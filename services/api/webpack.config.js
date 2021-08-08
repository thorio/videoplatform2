/* eslint-disable @typescript-eslint/no-var-requires */
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");

/** @type {function(import('webpack').Configuration, import('webpack')):import('webpack').Configuration} */
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
module.exports = (options, webpack) => ({
	...options,
	externals: [
		nodeExternals({
			allowlist: [
				/^@videoplatform2\/.*/,
			],
		}),
	],
	plugins: [
		...options.plugins,
		new NodemonPlugin({
			nodeArgs: "--inspect=0.0.0.0",
		}),
		new webpack.SourceMapDevToolPlugin({}),
	],
});
