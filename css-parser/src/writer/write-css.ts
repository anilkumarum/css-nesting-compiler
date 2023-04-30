import { open } from "node:fs/promises";
import { AtRuleName, CSSSeq, RuleType } from "../parser/utils/enums.js";
import { CSSRule } from "../parser/parser.js";
import ReadStream from "./ReadStream.js";

export default async function writeCSSFile(styleSheet: CSSRule, outFilePath: string) {
	const filehandle = await open(outFilePath, "w");
	const reader = new ReadStream(filehandle);
	const insert = (data) => reader.push(data);

	function addDeclaration(value: Uint8Array, property: Uint8Array) {
		insert(property);
		insert(CSSSeq.Colon);
		insert(value);
		insert(CSSSeq.SemiColon);
	}

	function addRule(parentSelector: Uint8Array[], rule: CSSRule) {
		parentSelector && parentSelector.forEach((selector) => insert(selector));
		insert(rule.selector);
		insert(CSSSeq.OpenRule);
		rule.declarations.forEach(addDeclaration);
		insert(CSSSeq.CloseRule);
		const grandParentSelector = parentSelector ? [...parentSelector, rule.selector] : [rule.selector];
		rule.cssRules?.forEach(addRule.bind(null, grandParentSelector));
	}

	function writeCssRule(cssRules: CSSRule[]) {
		for (const rule of cssRules) {
			const isAtRule = rule.type !== RuleType.STYLE_RULE;
			if (isAtRule) {
				insert(AtRuleName[rule.type]);
				insert(CSSSeq.Space);
				insert(rule.name);
				insert(CSSSeq.OpenRule);
				rule.declarations?.forEach(addDeclaration);
				rule.cssRules?.forEach(addRule.bind(null, null));
				insert(CSSSeq.CloseRule);
			} else addRule(null, rule);
		}
	}

	writeCssRule(styleSheet.cssRules);
	reader.push(null);
	return;
}
