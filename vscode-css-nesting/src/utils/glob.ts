//"src/**/assets" -> will work
//"src/**/assets/**" -> will not work
const excludeList = ["**/node_modules", ".vscode/**"]; //work
const excludeDirs = {};

for (const glob of excludeList) {
	const idx = glob.lastIndexOf("/");
	const key = glob.slice(0, idx);
	excludeDirs[key] ??= new Set();
	excludeDirs[key].add(glob.slice(idx + 1));
}

export function willWalk(dirPath: string, dirName: string) {
	if (excludeDirs[dirPath]?.has("**") || excludeDirs["**"].has(dirName)) return false;
	if (excludeDirs[dirPath + "/**"]?.has(dirName)) return false;
	return true;
}
