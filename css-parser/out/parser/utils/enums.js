"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSSeq = exports.AtRuleName = exports.AtRules = exports.RuleType = exports.nestedSelector = exports.selectorStarter = exports.State = exports.CharCode = void 0;
var CharCode;
(function (CharCode) {
    CharCode[CharCode["Tab"] = 9] = "Tab";
    CharCode[CharCode["LineBreak"] = 10] = "LineBreak";
    CharCode[CharCode["FormFeed"] = 12] = "FormFeed";
    CharCode[CharCode["CarriageReturn"] = 13] = "CarriageReturn";
    CharCode[CharCode["Space"] = 32] = "Space";
    CharCode[CharCode["ExclamationMark"] = 33] = "ExclamationMark";
    CharCode[CharCode["Amp"] = 38] = "Amp";
    CharCode[CharCode["At"] = 64] = "At";
    CharCode[CharCode["SingleQuote"] = 39] = "SingleQuote";
    CharCode[CharCode["DoubleQuote"] = 34] = "DoubleQuote";
    CharCode[CharCode["Dash"] = 45] = "Dash";
    CharCode[CharCode["Dot"] = 46] = "Dot";
    CharCode[CharCode["Hash"] = 35] = "Hash";
    CharCode[CharCode["Dollar"] = 36] = "Dollar";
    CharCode[CharCode["Asterisk"] = 42] = "Asterisk";
    CharCode[CharCode["Slash"] = 47] = "Slash";
    CharCode[CharCode["Zero"] = 48] = "Zero";
    CharCode[CharCode["Nine"] = 57] = "Nine";
    CharCode[CharCode["Colon"] = 58] = "Colon";
    CharCode[CharCode["SemiColon"] = 59] = "SemiColon";
    CharCode[CharCode["Gt"] = 62] = "Gt";
    CharCode[CharCode["Eq"] = 61] = "Eq";
    CharCode[CharCode["Questionmark"] = 63] = "Questionmark";
    CharCode[CharCode["OpeningParentheses"] = 40] = "OpeningParentheses";
    CharCode[CharCode["ClosingParentheses"] = 41] = "ClosingParentheses";
    CharCode[CharCode["OpeningSquare"] = 91] = "OpeningSquare";
    CharCode[CharCode["ClosingSquare"] = 93] = "ClosingSquare";
    CharCode[CharCode["openingCurly"] = 123] = "openingCurly";
    CharCode[CharCode["closingCurly"] = 125] = "closingCurly";
    CharCode[CharCode["Tilde"] = 126] = "Tilde";
    CharCode[CharCode["Plus"] = 43] = "Plus";
})(CharCode = exports.CharCode || (exports.CharCode = {}));
exports.State = {
    Text: "1",
    BeforeRuleBlock: "BeforeRuleBlock",
    InRuleBlock: "InRuleBlock",
    InAtRuleBlock: "InAtRuleBlock",
    BeforeAtRuleBlock: "BeforeAtRuleBlock",
    BeforeNestedSelector: "BeforeNestedSelector",
    BeforeSelector: "BeforeSelector",
    InSelector: "InSelector",
    InNestedSelector: "InNestedSelector",
    InDeclarationBlock: "InDeclarationBlock",
    InNestingSelector: "InSelector",
    CloseDeclarationBlock: "CloseDeclarationBlock",
};
exports.selectorStarter = new Set([
    CharCode.Dot,
    CharCode.Hash,
    CharCode.Colon,
    CharCode.Asterisk,
    CharCode.openingCurly,
]);
exports.nestedSelector = new Set([...exports.selectorStarter, CharCode.Gt, CharCode.Tilde, CharCode.Plus]);
var RuleType;
(function (RuleType) {
    RuleType[RuleType["STYLE_RULE"] = 1] = "STYLE_RULE";
    RuleType[RuleType["IMPORT_RULE"] = 3] = "IMPORT_RULE";
    RuleType[RuleType["MEDIA_RULE"] = 4] = "MEDIA_RULE";
    RuleType[RuleType["FONT_FACE_RULE"] = 5] = "FONT_FACE_RULE";
    RuleType[RuleType["PAGE_RULE"] = 6] = "PAGE_RULE";
    RuleType[RuleType["KEYFRAMES_RULE"] = 7] = "KEYFRAMES_RULE";
    RuleType[RuleType["KEYFRAME_RULE"] = 8] = "KEYFRAME_RULE";
    RuleType[RuleType["NAMESPACE_RULE"] = 10] = "NAMESPACE_RULE";
    RuleType[RuleType["COUNTER_STYLE_RULE"] = 11] = "COUNTER_STYLE_RULE";
    RuleType[RuleType["SUPPORTS_RULE"] = 12] = "SUPPORTS_RULE";
    RuleType[RuleType["DOCUMENT_RULE"] = 13] = "DOCUMENT_RULE";
    RuleType[RuleType["FONT_FEATURE_VALUES_RULE"] = 14] = "FONT_FEATURE_VALUES_RULE";
    RuleType[RuleType["VIEWPORT_RULE"] = 15] = "VIEWPORT_RULE";
    RuleType[RuleType["REGION_STYLE_RULE"] = 16] = "REGION_STYLE_RULE";
    RuleType[RuleType["PROPERTY"] = 17] = "PROPERTY";
    RuleType[RuleType["LAYER_RULE"] = 18] = "LAYER_RULE";
    RuleType[RuleType["FONT_PALETTE_VALUES_RULE"] = 19] = "FONT_PALETTE_VALUES_RULE";
    RuleType[RuleType["CONTAINER_RULE"] = 20] = "CONTAINER_RULE";
    RuleType[RuleType["COLOR_PROFILE_RULE"] = 21] = "COLOR_PROFILE_RULE";
    RuleType[RuleType["CHARSET_RULE"] = 27] = "CHARSET_RULE";
})(RuleType = exports.RuleType || (exports.RuleType = {}));
exports.AtRules = {
    "99,104,97,114,115,101,116": RuleType.CHARSET_RULE,
    "99,111,108,111,114,45,112,114,111,102,105,108,101": RuleType.COLOR_PROFILE_RULE,
    "99,111,110,116,97,105,110,101,114": RuleType.CONTAINER_RULE,
    "99,111,117,110,116,101,114,45,115,116,121,108,101": RuleType.COUNTER_STYLE_RULE,
    "102,111,110,116,45,102,97,99,101": RuleType.FONT_FACE_RULE,
    "102,111,110,116,45,102,101,97,116,117,114,101,45,118,97,108,117,101,115": RuleType.FONT_FEATURE_VALUES_RULE,
    "102,111,110,116,45,112,97,108,101,116,116,101,45,118,97,108,117,101,115": RuleType.FONT_PALETTE_VALUES_RULE,
    "105,109,112,111,114,116": RuleType.IMPORT_RULE,
    "107,101,121,102,114,97,109,101,115": RuleType.KEYFRAMES_RULE,
    "108,97,121,101,114": RuleType.LAYER_RULE,
    "109,101,100,105,97": RuleType.MEDIA_RULE,
    "110,97,109,101,115,112,97,99,101": RuleType.NAMESPACE_RULE,
    "112,97,103,101": RuleType.PAGE_RULE,
    "112,114,111,112,101,114,116,121": RuleType.PROPERTY, //
};
exports.AtRuleName = {
    [RuleType.CHARSET_RULE]: new Uint8Array([64, 99, 104, 97, 114, 115, 101, 116]),
    [RuleType.COLOR_PROFILE_RULE]: new Uint8Array([
        64, 99, 111, 108, 111, 114, 45, 112, 114, 111, 102, 105, 108, 101,
    ]),
    [RuleType.CONTAINER_RULE]: new Uint8Array([64, 99, 111, 110, 116, 97, 105, 110, 101, 114]),
    [RuleType.COUNTER_STYLE_RULE]: new Uint8Array([
        64, 99, 111, 117, 110, 116, 101, 114, 45, 115, 116, 121, 108, 101,
    ]),
    [RuleType.FONT_FACE_RULE]: new Uint8Array([64, 102, 111, 110, 116, 45, 102, 97, 99, 101]),
    [RuleType.FONT_FEATURE_VALUES_RULE]: new Uint8Array([
        64, 102, 111, 110, 116, 45, 102, 101, 97, 116, 117, 114, 101, 45, 118, 97, 108, 117, 101, 115,
    ]),
    [RuleType.FONT_PALETTE_VALUES_RULE]: new Uint8Array([
        64, 102, 111, 110, 116, 45, 112, 97, 108, 101, 116, 116, 101, 45, 118, 97, 108, 117, 101, 115,
    ]),
    [RuleType.IMPORT_RULE]: new Uint8Array([64, 105, 109, 112, 111, 114, 116]),
    [RuleType.KEYFRAMES_RULE]: new Uint8Array([64, 107, 101, 121, 102, 114, 97, 109, 101, 115]),
    [RuleType.MEDIA_RULE]: new Uint8Array([64, 109, 101, 100, 105, 97]),
    [RuleType.NAMESPACE_RULE]: new Uint8Array([64, 110, 97, 109, 101, 115, 112, 97, 99, 101]),
    [RuleType.PAGE_RULE]: new Uint8Array([64, 112, 97, 103, 101]),
    [RuleType.PROPERTY]: new Uint8Array([64, 112, 114, 111, 112, 101, 114, 116, 121]),
};
exports.CSSSeq = {
    OpenRule: new Uint8Array([CharCode.openingCurly]),
    CloseRule: new Uint8Array([CharCode.closingCurly]),
    Colon: new Uint8Array([CharCode.Colon]),
    SemiColon: new Uint8Array([CharCode.SemiColon]),
    Space: new Uint8Array([CharCode.Space]),
    Ampersand: new Uint8Array([CharCode.Amp]),
};
