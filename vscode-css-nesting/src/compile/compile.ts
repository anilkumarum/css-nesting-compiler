import * as vscode from "vscode";
import { access, constants, mkdir, readFile } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import { writeCSSFile, Parser } from "css-parser";
import { userConfig } from "../utils/helper.js";
import msgChannel, { OutputLevel } from "../utils/msg-channel.js";
import { performance } from "node:perf_hooks";

const workspaceFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;

export default async function compileFile(filePath: string) {
	try {
		const buffer = await readFile(workspaceFolder + filePath);
		const parser = new Parser(buffer);
		const stylesheet = parser.parse();
		//create file directory and get outfilePath
		const outFilePath = await getOutFilePath(filePath);
		writeCSSFile(stylesheet, outFilePath);
		msgChannel.info(`${filePath} compiled in ${Math.trunc(performance.now())}ms`);
	} catch (error) {
		msgChannel.info(error, OutputLevel.Error);
	}
}

async function getOutFilePath(filePath: string): Promise<string> {
	const dirPath = join(workspaceFolder, userConfig.outDir, dirname(filePath.slice(1))); //remove "/" from at 1
	await createDirIfNotExist(dirPath);
	const fileName = basename(filePath, ".css"); //extract fileName from filePath
	return join(dirPath, fileName + userConfig.extension);
}

async function createDirIfNotExist(dirPath: string) {
	try {
		await access(dirPath, constants.R_OK | constants.W_OK);
		return true;
	} catch (error) {
		await mkdir(dirPath, { recursive: true }).catch((err) => console.error(err));
		return true;
	}
}
