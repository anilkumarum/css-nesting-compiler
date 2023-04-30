"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCSSFile = exports.Parser = void 0;
const parser_js_1 = require("./parser/parser.js");
exports.Parser = parser_js_1.default;
const write_css_js_1 = require("./writer/write-css.js");
exports.writeCSSFile = write_css_js_1.default;
