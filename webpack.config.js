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
			// 特定のディレクトリのみを対象にする場合はここでフィルタリングする
			// if (data.dir !== "allfeature") return;
			return {
				entry: `./dist/runner/${data.dir ? `${data.dir}/` : ""}${data.name}.js`,
				output: {
					filename: "[name].js",
					path: path.resolve(
						__dirname,
						`./build/${data.dir ? `${data.dir}/` : ""}${data.name}`,
					),
				},
				// date-fns/constantsをparseする箇所でwebpack-bundle-analyzerがエラーになるため、externalsを使って生成されるコードに誤差を生んでエラーが出ないようにする
				externals: {
					"date-fns/constants": "dateFns",
				},
				optimization: {
					splitChunks: {
						cacheGroups: {
							commons: {
								chunks: "initial",
								minChunks: 2,
								maxInitialRequests: 5, // The default limit is too small to showcase the effect
								minSize: 0, // This is example is too small to create commons chunks
							},
							vendor: {
								test: /node_modules/,
								chunks: "initial",
								name: "vendor",
								priority: 10,
								enforce: true,
							},
						},
					},
				},
				plugins: [
					new BundleAnalyzerPlugin({
						analyzerMode: "static",
					}),
				],
			};
		})
		.filter(Boolean);
}
module.exports = [...createOptions()];
