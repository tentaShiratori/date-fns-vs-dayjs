const BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("node:path");
const fs = require("node:fs");

function createOptions() {
	const runnerDir = path.resolve(__dirname, "./runner");
	const files = fs.readdirSync(runnerDir, {
		recursive: true,
	});
	return files
		.filter((file) => file.endsWith(".ts"))
		.map((file) => {
			const parsed = path.parse(file);
			const data = {
				name: parsed.name,
				dir: path.dirname(file),
			};
			console.log(data.dir, data.name);
			return {
				entry: `./dist/runner/${data.dir ? `${data.dir}/` : ""}${data.name}.js`,
				output: {
					filename: "webpack.js",
					path: path.resolve(
						__dirname,
						`./build/${data.dir ? `${data.dir}/` : ""}${data.name}`,
					),
				},
				// date-fns/constantsをparseする箇所でwebpack-bundle-analyzerがエラーになるため、externalsを使って生成されるコードに誤差を生んでエラーが出ないようにする
				externals: {
					"date-fns/constants": "dateFns",
				},
				plugins: [
					new BundleAnalyzerPlugin({
						analyzerMode: "static",
					}),
				],
			};
		});
}
module.exports = createOptions();
