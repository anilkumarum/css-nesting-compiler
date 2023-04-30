"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_js_1 = require("./utils/enums.js");
const tokenizer_js_1 = require("./tokenizer.js");
class Parser {
    constructor(buffer) {
        this.styleSheet = { type: 0, cssRules: [] };
        this.ruleStack = [this.styleSheet];
        this.tokenizer = new tokenizer_js_1.Tokenizer(buffer);
        this.setListener();
    }
    setStyleRule(selector, args) {
        selector = selector.filter((u8) => u8 > 10); //trim \t\n
        selector.at(-1) === enums_js_1.CharCode.Space && (selector = selector.subarray(0, -1));
        const rule = {
            type: args?.[0] || enums_js_1.RuleType.STYLE_RULE,
        };
        rule.type === enums_js_1.RuleType.STYLE_RULE ? (rule.selector = selector) : (rule.name = selector);
        this.ruleStack.at(-1).cssRules ??= [];
        this.ruleStack.at(-1).cssRules.push(rule);
        this.ruleStack.push(rule);
        this.openRule = rule;
    }
    addRuleProperty(property) {
        //TODO check valid property
        this.property = property;
    }
    addDeclaration(value) {
        this.openRule.declarations ??= new Map();
        this.openRule.declarations.set(this.property, value);
        this.property = null;
    }
    closeRuleBlock() {
        this.ruleStack.pop();
    }
    parse() {
        this.tokenizer.consume();
        return this.styleSheet;
    }
    setListener() {
        this.tokenizer.on("openrule", this.setStyleRule.bind(this));
        this.tokenizer.on("addproperty", this.addRuleProperty.bind(this));
        this.tokenizer.on("declaration", this.addDeclaration.bind(this));
        this.tokenizer.on("closerule", this.closeRuleBlock.bind(this));
    }
}
exports.default = Parser;
