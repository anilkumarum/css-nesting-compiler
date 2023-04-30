import { AtRules, CharCode, nestedSelector, selectorStarter, State } from "./utils/enums.js";
import { EventEmitter } from "./utils/EventEmitter.js";

function isWhitespace(c: number) {
	return c === CharCode.Tab || c === CharCode.LineBreak || c === CharCode.Space;
}

export class Tokenizer extends EventEmitter {
	state: string = State.BeforeSelector;
	sectionStart: number = -1;
	index: number = -1;
	size: number = 0;

	constructor(private buffer: Uint8Array) {
		super();
		this.size = buffer.byteLength;
	}

	fastForwardTo(code: number) {
		while (this.buffer[++this.index] !== code) if (this.index === this.size) break;
		return true;
	}

	skipComment() {
		++this.index; //skip *
		this.fastForwardTo(CharCode.Asterisk);
		if (!this.isNextCode(CharCode.Slash)) return this.skipComment();
		this.index = this.index + 2; //skip */
	}

	checkAndSkipComment(code: CharCode) {
		if (code === CharCode.Slash && this.isNextCode(CharCode.Asterisk)) this.skipComment();
		if (isWhitespace(this.buffer[this.index])) return this.skipWhitespace();
		return this.buffer[this.index];
	}

	skipWhitespace() {
		while (++this.index < this.size) {
			const code = this.buffer[this.index];
			if (code !== CharCode.LineBreak && code !== CharCode.Tab && code !== CharCode.Space) break;
		}
		return this.buffer[this.index];
	}

	/** @param {string} evtName */
	emitData(evtName: string, ...args) {
		this.emit(evtName, this.buffer.subarray(this.sectionStart, this.index), args);
	}

	validTagName() {
		let sectionStart = this.index;
		return true;
	}

	isNextCode(code: CharCode) {
		return this.buffer[this.index + 1] === code;
	}

	stateBeforeAtRuleBlock() {
		let sectionStart = this.index;
		this.fastForwardTo(CharCode.Space);
		const atRule = String(this.buffer.slice(sectionStart, this.index));
		if (AtRules[String(atRule)]) {
			this.sectionStart = this.index = sectionStart;
			this.stateInAtRuleBlock(AtRules[atRule]);
		}
	}

	stateInAtRuleBlock(ruleType: number) {
		this.fastForwardTo(CharCode.openingCurly);
		this.emitData("openrule", ruleType);
		this.state = State.BeforeSelector;
	}

	stateCloseDeclarationBlock(code: CharCode) {
		isWhitespace(code) && (code = this.skipWhitespace());
		if (code === CharCode.closingCurly) return this.emitData("closerule");
		isWhitespace(code) && (code = this.skipWhitespace());
		if (code === CharCode.Amp) this.state = State.BeforeNestedSelector;
		else {
			this.state = State.BeforeSelector;
			this.stateBeforeSelector(this.buffer[this.index]);
		}
	}

	stateInDeclarationBlock(code: CharCode) {
		isWhitespace(code) && (code = this.skipWhitespace());
		code = this.checkAndSkipComment(code);
		if (code === CharCode.Amp) return (this.state = State.BeforeNestedSelector);
		if (code === CharCode.closingCurly) {
			this.state = State.CloseDeclarationBlock;
			return this.emitData("closerule");
		}

		this.sectionStart = this.index;
		this.fastForwardTo(CharCode.Colon);
		this.emitData("addproperty");

		this.isNextCode(CharCode.Space) ? (this.index = this.index + 2) : ++this.index;
		this.sectionStart = this.index;
		this.fastForwardTo(CharCode.SemiColon);
		this.emitData("declaration");
		this.sectionStart = -1;
		this.isNextCode(CharCode.LineBreak) && ++this.index;
	}

	stateInSelector() {
		this.fastForwardTo(CharCode.openingCurly);
		this.emitData("openrule");
		this.state = State.InDeclarationBlock;
	}

	stateBeforeNestedSelector(code: CharCode) {
		this.sectionStart = this.index;
		this.isNextCode(CharCode.Space) && (code = this.buffer[++this.index]);
		code = this.checkAndSkipComment(code);

		if (nestedSelector.has(code)) {
			this.fastForwardTo(CharCode.openingCurly);
			this.emitData("openrule");
			this.state = State.InDeclarationBlock;
		} else if (this.validTagName()) this.state = State.InSelector;
	}

	stateBeforeSelector(code: CharCode) {
		isWhitespace(code) && (code = this.skipWhitespace());
		code = this.checkAndSkipComment(code);

		if (selectorStarter.has(code)) {
			this.state = State.InSelector;
			this.sectionStart = this.index;
		} else if (code === CharCode.At) {
			this.state = State.BeforeAtRuleBlock;
			this.sectionStart = this.index;
		} else if (this.validTagName()) {
			this.state = State.InSelector;
			this.sectionStart = this.index;
		}
	}

	allStates = {
		[State.BeforeSelector]: this.stateBeforeSelector,
		[State.InSelector]: this.stateInSelector,
		[State.BeforeAtRuleBlock]: this.stateBeforeAtRuleBlock,
		[State.InDeclarationBlock]: this.stateInDeclarationBlock,
		[State.CloseDeclarationBlock]: this.stateCloseDeclarationBlock,
		[State.BeforeNestedSelector]: this.stateBeforeNestedSelector,
	};

	consume() {
		while (++this.index < this.size) {
			const code = this.buffer[this.index];
			this.allStates[this.state].call(this, code);
		}
	}
}
