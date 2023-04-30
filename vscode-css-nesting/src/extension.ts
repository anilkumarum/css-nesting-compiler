import * as vscode from "vscode";
import { ExtensionContext } from "vscode";
import compileDir from "./compile/walker.js";

export function activate(context: ExtensionContext) {
	const disposableCompiler = vscode.commands.registerCommand(
		"cssNestingCompiler.compileCssNesting",
		async () => {
			await compileDir();
			//run custom command  after compiled
			const command: string = vscode.workspace.getConfiguration("cssnestingCompiler.custom").get("runCommand");
			if (command) {
				const terminal = vscode.window.createTerminal(`compileTs command #${Date.now()}`);
				terminal.show();
				terminal.sendText(command);
			}
		}
	);

	context.subscriptions.push(disposableCompiler);
}
