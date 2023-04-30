export enum CharCode {
	Tab = 0x9, // "\t"
	LineBreak = 0xa, // "\n" 10
	FormFeed = 0xc, // "\f"
	CarriageReturn = 0xd, // "\r"
	Space = 0x20, // " "
	ExclamationMark = 0x21, // "!"
	Amp = 0x26, // "&"
	At = 64, //@
	SingleQuote = 0x27, // "'"
	DoubleQuote = 0x22, // '"'
	Dash = 0x2d, // "-"
	Dot = 46, // "."
	Hash = 35, //#
	Dollar = 36, //$
	Asterisk = 42, // *
	Slash = 0x2f, // /
	Zero = 0x30, // 0
	Nine = 0x39, // 9
	Colon = 58, // :
	SemiColon = 0x3b, // ;
	Gt = 0x3e, // ">"
	Eq = 0x3d, // "="
	Questionmark = 0x3f, // ?
	OpeningParentheses = 40, // "(",
	ClosingParentheses = 41, // ")"
	OpeningSquare = 0x5b, // "["
	ClosingSquare = 93, // "]"
	openingCurly = 123, // {
	closingCurly = 125, // }
	Tilde = 126, // "~"
	Plus = 43, //+
}

export const State = {
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

export const selectorStarter = new Set([
	CharCode.Dot,
	CharCode.Hash,
	CharCode.Colon,
	CharCode.Asterisk,
	CharCode.openingCurly,
]);

export const nestedSelector = new Set([...selectorStarter, CharCode.Gt, CharCode.Tilde, CharCode.Plus]);

export enum RuleType {
	STYLE_RULE = 1,
	IMPORT_RULE = 3,
	MEDIA_RULE = 4,
	FONT_FACE_RULE = 5,
	PAGE_RULE = 6,
	KEYFRAMES_RULE = 7,
	KEYFRAME_RULE = 8,
	NAMESPACE_RULE = 10,
	COUNTER_STYLE_RULE = 11,
	SUPPORTS_RULE = 12,
	DOCUMENT_RULE = 13,
	FONT_FEATURE_VALUES_RULE = 14,
	VIEWPORT_RULE = 15,
	REGION_STYLE_RULE = 16,
	PROPERTY = 17,
	LAYER_RULE = 18,
	FONT_PALETTE_VALUES_RULE = 19,
	CONTAINER_RULE = 20,
	COLOR_PROFILE_RULE = 21,
	CHARSET_RULE = 27,
}

export const AtRules = {
	"99,104,97,114,115,101,116": RuleType.CHARSET_RULE, //charset
	"99,111,108,111,114,45,112,114,111,102,105,108,101": RuleType.COLOR_PROFILE_RULE, //color-profile
	"99,111,110,116,97,105,110,101,114": RuleType.CONTAINER_RULE, //container
	"99,111,117,110,116,101,114,45,115,116,121,108,101": RuleType.COUNTER_STYLE_RULE, //counter-style
	"102,111,110,116,45,102,97,99,101": RuleType.FONT_FACE_RULE, //font-face
	"102,111,110,116,45,102,101,97,116,117,114,101,45,118,97,108,117,101,115": RuleType.FONT_FEATURE_VALUES_RULE, //font-feature-values
	"102,111,110,116,45,112,97,108,101,116,116,101,45,118,97,108,117,101,115": RuleType.FONT_PALETTE_VALUES_RULE, //font-palette-values
	"105,109,112,111,114,116": RuleType.IMPORT_RULE, //import
	"107,101,121,102,114,97,109,101,115": RuleType.KEYFRAMES_RULE, //keyframes
	"108,97,121,101,114": RuleType.LAYER_RULE, //layer
	"109,101,100,105,97": RuleType.MEDIA_RULE, //media
	"110,97,109,101,115,112,97,99,101": RuleType.NAMESPACE_RULE, //namespace
	"112,97,103,101": RuleType.PAGE_RULE, //page
	"112,114,111,112,101,114,116,121": RuleType.PROPERTY, //
};

export const AtRuleName = {
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

export const CSSSeq = {
	OpenRule: new Uint8Array([CharCode.openingCurly]),
	CloseRule: new Uint8Array([CharCode.closingCurly]),
	Colon: new Uint8Array([CharCode.Colon]),
	SemiColon: new Uint8Array([CharCode.SemiColon]),
	Space: new Uint8Array([CharCode.Space]),
	Ampersand: new Uint8Array([CharCode.Amp]),
};
