"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("node:fs/promises");
const enums_js_1 = require("../parser/utils/enums.js");
const ReadStream_js_1 = require("./ReadStream.js");
async function writeCSSFile(styleSheet, outFilePath) {
    const filehandle = await (0, promises_1.open)(outFilePath, "w");
    const reader = new ReadStream_js_1.default(filehandle);
    const insert = (data) => reader.push(data);
    function addDeclaration(value, property) {
        insert(property);
        insert(enums_js_1.CSSSeq.Colon);
        insert(value);
        insert(enums_js_1.CSSSeq.SemiColon);
    }
    function addRule(parentSelector, rule) {
        parentSelector && parentSelector.forEach((selector) => insert(selector));
        insert(rule.selector);
        insert(enums_js_1.CSSSeq.OpenRule);
        rule.declarations.forEach(addDeclaration);
        insert(enums_js_1.CSSSeq.CloseRule);
        const grandParentSelector = parentSelector ? [...parentSelector, rule.selector] : [rule.selector];
        rule.cssRules?.forEach(addRule.bind(null, grandParentSelector));
    }
    function writeCssRule(cssRules) {
        for (const rule of cssRules) {
            const isAtRule = rule.type !== enums_js_1.RuleType.STYLE_RULE;
            if (isAtRule) {
                insert(enums_js_1.AtRuleName[rule.type]);
                insert(enums_js_1.CSSSeq.Space);
                insert(rule.name);
                insert(enums_js_1.CSSSeq.OpenRule);
                rule.declarations?.forEach(addDeclaration);
                rule.cssRules?.forEach(addRule.bind(null, null));
                insert(enums_js_1.CSSSeq.CloseRule);
            }
            else
                addRule(null, rule);
        }
    }
    writeCssRule(styleSheet.cssRules);
    reader.push(null);
    return;
}
exports.default = writeCSSFile;
