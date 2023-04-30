"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tokenizer = void 0;
const enums_js_1 = require("./utils/enums.js");
const EventEmitter_js_1 = require("./utils/EventEmitter.js");
function isWhitespace(c) {
    return c === enums_js_1.CharCode.Tab || c === enums_js_1.CharCode.LineBreak || c === enums_js_1.CharCode.Space;
}
class Tokenizer extends EventEmitter_js_1.EventEmitter {
    constructor(buffer) {
        super();
        this.buffer = buffer;
        this.state = enums_js_1.State.BeforeSelector;
        this.sectionStart = -1;
        this.index = -1;
        this.size = 0;
        this.allStates = {
            [enums_js_1.State.BeforeSelector]: this.stateBeforeSelector,
            [enums_js_1.State.InSelector]: this.stateInSelector,
            [enums_js_1.State.BeforeAtRuleBlock]: this.stateBeforeAtRuleBlock,
            [enums_js_1.State.InDeclarationBlock]: this.stateInDeclarationBlock,
            [enums_js_1.State.CloseDeclarationBlock]: this.stateCloseDeclarationBlock,
            [enums_js_1.State.BeforeNestedSelector]: this.stateBeforeNestedSelector,
        };
        this.size = buffer.byteLength;
    }
    fastForwardTo(code) {
        while (this.buffer[++this.index] !== code)
            if (this.index === this.size)
                break;
        return true;
    }
    skipComment() {
        ++this.index; //skip *
        this.fastForwardTo(enums_js_1.CharCode.Asterisk);
        if (!this.isNextCode(enums_js_1.CharCode.Slash))
            return this.skipComment();
        this.index = this.index + 2; //skip */
    }
    checkAndSkipComment(code) {
        if (code === enums_js_1.CharCode.Slash && this.isNextCode(enums_js_1.CharCode.Asterisk))
            this.skipComment();
        if (isWhitespace(this.buffer[this.index]))
            return this.skipWhitespace();
        return this.buffer[this.index];
    }
    skipWhitespace() {
        while (++this.index < this.size) {
            const code = this.buffer[this.index];
            if (code !== enums_js_1.CharCode.LineBreak && code !== enums_js_1.CharCode.Tab && code !== enums_js_1.CharCode.Space)
                break;
        }
        return this.buffer[this.index];
    }
    /** @param {string} evtName */
    emitData(evtName, ...args) {
        this.emit(evtName, this.buffer.subarray(this.sectionStart, this.index), args);
    }
    validTagName() {
        let sectionStart = this.index;
        return true;
    }
    isNextCode(code) {
        return this.buffer[this.index + 1] === code;
    }
    stateBeforeAtRuleBlock() {
        let sectionStart = this.index;
        this.fastForwardTo(enums_js_1.CharCode.Space);
        const atRule = String(this.buffer.slice(sectionStart, this.index));
        if (enums_js_1.AtRules[String(atRule)]) {
            this.sectionStart = this.index = sectionStart;
            this.stateInAtRuleBlock(enums_js_1.AtRules[atRule]);
        }
    }
    stateInAtRuleBlock(ruleType) {
        this.fastForwardTo(enums_js_1.CharCode.openingCurly);
        this.emitData("openrule", ruleType);
        this.state = enums_js_1.State.BeforeSelector;
    }
    stateCloseDeclarationBlock(code) {
        isWhitespace(code) && (code = this.skipWhitespace());
        if (code === enums_js_1.CharCode.closingCurly)
            return this.emitData("closerule");
        isWhitespace(code) && (code = this.skipWhitespace());
        if (code === enums_js_1.CharCode.Amp)
            this.state = enums_js_1.State.BeforeNestedSelector;
        else {
            this.state = enums_js_1.State.BeforeSelector;
            this.stateBeforeSelector(this.buffer[this.index]);
        }
    }
    stateInDeclarationBlock(code) {
        isWhitespace(code) && (code = this.skipWhitespace());
        code = this.checkAndSkipComment(code);
        if (code === enums_js_1.CharCode.Amp)
            return (this.state = enums_js_1.State.BeforeNestedSelector);
        if (code === enums_js_1.CharCode.closingCurly) {
            this.state = enums_js_1.State.CloseDeclarationBlock;
            return this.emitData("closerule");
        }
        this.sectionStart = this.index;
        this.fastForwardTo(enums_js_1.CharCode.Colon);
        this.emitData("addproperty");
        this.isNextCode(enums_js_1.CharCode.Space) ? (this.index = this.index + 2) : ++this.index;
        this.sectionStart = this.index;
        this.fastForwardTo(enums_js_1.CharCode.SemiColon);
        this.emitData("declaration");
        this.sectionStart = -1;
        this.isNextCode(enums_js_1.CharCode.LineBreak) && ++this.index;
    }
    stateInSelector() {
        this.fastForwardTo(enums_js_1.CharCode.openingCurly);
        this.emitData("openrule");
        this.state = enums_js_1.State.InDeclarationBlock;
    }
    stateBeforeNestedSelector(code) {
        this.sectionStart = this.index;
        this.isNextCode(enums_js_1.CharCode.Space) && (code = this.buffer[++this.index]);
        code = this.checkAndSkipComment(code);
        if (enums_js_1.nestedSelector.has(code)) {
            this.fastForwardTo(enums_js_1.CharCode.openingCurly);
            this.emitData("openrule");
            this.state = enums_js_1.State.InDeclarationBlock;
        }
        else if (this.validTagName())
            this.state = enums_js_1.State.InSelector;
    }
    stateBeforeSelector(code) {
        isWhitespace(code) && (code = this.skipWhitespace());
        code = this.checkAndSkipComment(code);
        if (enums_js_1.selectorStarter.has(code)) {
            this.state = enums_js_1.State.InSelector;
            this.sectionStart = this.index;
        }
        else if (code === enums_js_1.CharCode.At) {
            this.state = enums_js_1.State.BeforeAtRuleBlock;
            this.sectionStart = this.index;
        }
        else if (this.validTagName()) {
            this.state = enums_js_1.State.InSelector;
            this.sectionStart = this.index;
        }
    }
    consume() {
        while (++this.index < this.size) {
            const code = this.buffer[this.index];
            this.allStates[this.state].call(this, code);
        }
    }
}
exports.Tokenizer = Tokenizer;
