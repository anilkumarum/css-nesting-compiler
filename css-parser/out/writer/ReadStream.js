"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_stream_1 = require("node:stream");
class ReadStream extends node_stream_1.Readable {
    constructor(filehandle) {
        super();
        this.filehandle = filehandle;
        this._read = () => { };
        this.pipe(this.filehandle.createWriteStream());
        this.on("end", () => this.filehandle?.close());
    }
}
exports.default = ReadStream;
