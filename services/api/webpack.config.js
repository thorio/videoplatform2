/* eslint-disable @typescript-eslint/no-var-requires */
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin-next");
const { exec } = require("child_process");
const { Compiler } = require("webpack");
const { stdout } = require("process");

/** @type {function(import('webpack').Configuration, import('webpack')):import('webpack').Configuration} */
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
module.exports = (options, webpack) => ({
	...options,
	externals: [
		{
			"@prisma": "require('../.prisma')",
		},
		nodeExternals({
			allowlist: [
				/^@videoplatform2\/.*/,
			],
		}),
	],
	plugins: [
		...options.plugins,
		new webpack.SourceMapDevToolPlugin({}),
		new NodemonPlugin({
			nodeArgs: "--inspect=0.0.0.0",
			watch: [
				"dist",
				".prisma",
			],
			delay: 200,
		}),
		new WebpackShellPlugin({
			onWatchRun: {
				scripts: [
					"npx prisma generate",
					() => {
						exec("npx nodemon --quiet --watch prisma --ext prisma --exec 'npx prisma generate'")
							.stdout.pipe(process.stdout);
					},
				],
				parallel: false,
			},
			onBeforeNormalRun: "npx prisma generate",
		}),
	],
});
