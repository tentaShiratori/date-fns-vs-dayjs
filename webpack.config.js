const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  entry: './dist/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'webpack'),
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}