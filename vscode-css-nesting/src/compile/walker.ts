import * as vscode from "vscode";
import { readdir } from "node:fs/promises";
import { willWalk } from "../utils/glob.js";
import compileFile from "./compile.js";
import statusBar from "../utils/status-bar.js";
import msgChannel, { OutputLevel } from "../utils/msg-channel.js";
import { userConfig } from "../utils/helper.js";
import * as path from "node:path";

const workspaceFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;

async function walkDir(source: string) {
	const dirents = await readdir(workspaceFolder + source, { withFileTypes: true });

	const promises = [];
	for (const dirent of dirents) {
		const dirPath = `${source}${path.sep}${dirent.name}`;
		if (dirent.isDirectory()) willWalk(source.slice(1), dirent.name) && walkDir(dirPath);
		else if (dirent.name.endsWith(".css")) promises.push(compileFile(dirPath));
	}
	return await Promise.all(promises).catch((err) => msgChannel.info(err, OutputLevel.Error));
}

export default async function compileDir() {
	statusBar.processing();
	const rootDirPath = `${path.sep}${userConfig.rootDir || ""}`;
	await walkDir(rootDirPath).catch((err) => msgChannel.info(err, OutputLevel.Error));
	statusBar.done();
}
