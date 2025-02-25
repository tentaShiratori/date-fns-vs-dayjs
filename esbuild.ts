import { analyzeMetafile, build } from "esbuild";

const options = [
	// format
	{
		entryPoints: ["./dist/format/dayjs.js"],
		minify: true,
		bundle: true,
		outfile: "./build/format/dayjs/esbuild.js",
		metafile: true,
	},
	{
		entryPoints: ["./dist/format/date-fns-light.js"],
		minify: true,
		bundle: true,
		outfile: "./build/format/date-fns-light/esbuild.js",
		metafile: true,
	},
	{
		entryPoints: ["./dist/format/date-fns-format.js"],
		minify: true,
		bundle: true,
		outfile: "./build/format/date-fns-format/esbuild.js",
		metafile: true,
	},
	{
		entryPoints: ["./dist/format/date-fns-intl.js"],
		minify: true,
		bundle: true,
		outfile: "./build/format/date-fns-intl/esbuild.js",
		metafile: true,
	},
];

Promise.all(options.map((option) => build(option))).then(async (results) => {
	for (const result of results) {
		if (result.metafile == null) {
			console.log("metafile is null");
			return;
		}
		const meta = await analyzeMetafile(result.metafile);
		console.log(meta);
	}
});
