interface CSSRule {
	type: number;
	name?: Uint8Array;
	selector?: Uint8Array;
	declarations?: Map<Uint8Array, Uint8Array>;
	cssRules?: CSSRule[];
}

export class Parser {
	constructor(buffer: Uint8Array);
	parse(): CSSRule[];
}

declare function writeCSSFile(styleSheet: CSSRule[], outFilePath: string): void;
