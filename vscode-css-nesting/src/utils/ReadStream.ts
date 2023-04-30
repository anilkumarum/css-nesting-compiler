import { FileHandle } from "fs/promises";
import { Readable } from "node:stream";

export default class ReadStream extends Readable {
	constructor(private readonly filehandle: FileHandle) {
		super();
		this.pipe(this.filehandle.createWriteStream());
		this.on("end", () => this.filehandle?.close());
	}
	_read = () => {};
}
