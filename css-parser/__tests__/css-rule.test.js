"use strict";
const ava = require("ava");
const test = ava.default;
const { Parser } = require("../out/index.js");
const {
	universalSelector,
	tagSelector,
	multiTagSelector,
	nestedSelfSelector,
	nestedChildSelector,
	nestedMultiChildSelector,
	tagAttributeSelector,
	attributeSelector,
	multiRuleSelector,
	deepNestedSelector,
	atRuleSelector,
	psuedoClassSelector,
	isPsuedoSelector,
	ruleComment,
	declaratioComment,
} = require("../samples/data.js");

test("universalSelector", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(universalSelector);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("tagSelector", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(tagSelector);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("multiTagSelector", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(multiTagSelector);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("nestedSelfSelector", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(nestedSelfSelector);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("nestedChildSelector", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(nestedChildSelector);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("nestedMultiChildSelector", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(nestedMultiChildSelector);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("tagAttributeSelector", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(tagAttributeSelector);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("attributeSelector", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(attributeSelector);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("multiRuleSelector", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(multiRuleSelector);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("deepNestedSelector", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(deepNestedSelector);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("atRuleSelector", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(atRuleSelector);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("psuedoClassSelector", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(psuedoClassSelector);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("isPsuedoSelector", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(isPsuedoSelector);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("ruleComment", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(ruleComment);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});

test("declaratioComment", (t) => {
	// This test passes because it does not throw an exception.
	const parser = new Parser(declaratioComment);
	const stylesheet = parser.parse();
	t.snapshot(stylesheet);
});
