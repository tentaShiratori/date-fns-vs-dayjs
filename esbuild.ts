import fs from "node:fs/promises";
import path from "node:path";
import { analyzeMetafile, build } from "esbuild";

async function createOptions() {
	const runnerDir = path.resolve(__dirname, "./runner");
	const files = await fs.readdir(runnerDir, {
		recursive: true,
		withFileTypes: true,
	});
	return files
		.filter((file) => file.isFile())
		.map((file) => {
			const parsed = path.parse(file.name);
			const data = {
				name: parsed.name,
				dir: path
					.relative(runnerDir, file.parentPath)
					.replaceAll(path.sep, "/"),
			};
			return {
				entryPoints: [
					`./dist/runner/${data.dir && `${data.dir}/`}${data.name}.js`,
				],
				minify: true,
				bundle: true,
				outfile: `./build/${data.dir && `${data.dir}/`}${data.name}/esbuild.js`,
				metafile: true,
			};
		});
}
await Promise.all((await createOptions()).map((option) => build(option))).then(
	async (results) => {
		for (const result of results) {
			if (result.metafile == null) {
				console.log("metafile is null");
				return;
			}
			const meta = await analyzeMetafile(result.metafile);
			console.log(meta);
		}
	},
);
