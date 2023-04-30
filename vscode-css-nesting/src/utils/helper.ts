import * as vscode from "vscode";

type UserConfig = {
	rootDir: string;
	outDir: string;
	excludeList: string[];
	extension: string;
};

const configMap = vscode.workspace.getConfiguration("cssnestingCompiler.config");

export const userConfig: UserConfig = {
	rootDir: configMap.get("rootDirectory"),
	outDir: configMap.get("outDirectory"),
	excludeList: configMap.get("excludeList"),
	extension: configMap.get("extension"),
};
