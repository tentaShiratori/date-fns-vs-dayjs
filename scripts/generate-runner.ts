import fs from "node:fs/promises";
import path from "node:path";
import { scanSrc } from "./lib/scanSrc";

async function main() {
	const files = await scanSrc();
	for (const file of files) {
		const level = file.dir ? file.dir.split("/").length + 1 : 1;
		const prefix = Array(level).fill("..").join("/");
		const relativePath = `${prefix}/src${file.dir ? `/${file.dir}` : ""}/${file.name}`;
		const code = `
import run from "${relativePath}";
console.log(run());
`;

		const filepath = `./runner${file.dir ? `/${file.dir}` : ""}/${file.filename}`;
		const runnerPath = path.parse(filepath);
		await fs.mkdir(runnerPath.dir, { recursive: true });
		await fs
			.access(filepath)
			.then(() => fs.rm(filepath))
			.catch(() => {});
		await fs.writeFile(filepath, code);
	}
}

main();
