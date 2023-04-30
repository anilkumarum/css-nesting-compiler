import { CharCode, RuleType } from "./utils/enums.js";
import { Tokenizer } from "./tokenizer.js";

export interface CSSRule {
	type: number;
	name?: Uint8Array;
	selector?: Uint8Array;
	declarations?: Map<Uint8Array, Uint8Array>;
	cssRules?: CSSRule[];
}

export default class Parser {
	styleSheet: CSSRule = { type: 0, cssRules: [] };
	ruleStack: CSSRule[] = [this.styleSheet];
	property: Uint8Array;
	openRule: CSSRule;
	tokenizer: Tokenizer;

	constructor(buffer: Uint8Array) {
		this.tokenizer = new Tokenizer(buffer);
		this.#setListener();
	}

	parse() {
		this.tokenizer.consume();
		return this.styleSheet;
	}

	#setStyleRule(selector: Uint8Array, args) {
		selector = selector.filter((u8) => u8 > 10); //trim \t\n
		selector.at(-1) === CharCode.Space && (selector = selector.subarray(0, -1));
		const rule: CSSRule = {
			type: args?.[0] || RuleType.STYLE_RULE,
		};
		rule.type === RuleType.STYLE_RULE ? (rule.selector = selector) : (rule.name = selector);
		this.ruleStack.at(-1).cssRules ??= [];
		this.ruleStack.at(-1).cssRules.push(rule);
		this.ruleStack.push(rule);
		this.openRule = rule;
	}

	#addRuleProperty(property) {
		//TODO check valid property
		this.property = property;
	}

	#addDeclaration(value) {
		this.openRule.declarations ??= new Map();
		this.openRule.declarations.set(this.property, value);
		this.property = null;
	}

	#closeRuleBlock() {
		this.ruleStack.pop();
	}

	#setListener() {
		this.tokenizer.on("openrule", this.#setStyleRule.bind(this));
		this.tokenizer.on("addproperty", this.#addRuleProperty.bind(this));
		this.tokenizer.on("declaration", this.#addDeclaration.bind(this));
		this.tokenizer.on("closerule", this.#closeRuleBlock.bind(this));
	}
}
