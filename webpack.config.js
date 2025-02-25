const BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("node:path");

const base = path.resolve(__dirname, "build");
module.exports = [
	// format
	{
		entry: "./dist/format/dayjs.js",
		output: {
			filename: "webpack.js",
			path: path.resolve(base, "format", "dayjs"),
		},
		plugins: [
			new BundleAnalyzerPlugin({
				analyzerMode: "static",
			}),
		],
	},
	{
		entry: "./dist/format/date-fns-light.js",
		output: {
			filename: "webpack.js",
			path: path.resolve(base, "format", "date-fns-light"),
		},
		plugins: [
			new BundleAnalyzerPlugin({
				analyzerMode: "static",
			}),
		],
	},
	{
		entry: "./dist/format/date-fns-format.js",
		output: {
			filename: "webpack.js",
			path: path.resolve(base, "format", "date-fns-format"),
		},
		plugins: [
			new BundleAnalyzerPlugin({
				analyzerMode: "static",
			}),
		],
	},
	{
		entry: "./dist/format/date-fns-intl.js",
		output: {
			filename: "webpack.js",
			path: path.resolve(base, "format", "date-fns-intl"),
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
	},
];
