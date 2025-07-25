"use strict";

const fs = require("fs");
const path = require("path");
const webpack = require("../../../../");

/** @type {(env: Env, options: TestOptions) => import("../../../../").Configuration} */
module.exports = (env, { srcPath }) => {
	const valueFile = path.resolve(srcPath, "value.txt");
	return {
		plugins: [
			new webpack.DefinePlugin({
				TEST_VALUE: webpack.DefinePlugin.runtimeValue(
					() => JSON.stringify(fs.readFileSync(valueFile, "utf8").trim()),
					[valueFile]
				),
				TEST_VALUE2: webpack.DefinePlugin.runtimeValue(
					() => JSON.stringify(fs.readFileSync(valueFile, "utf8").trim()),
					[]
				),
				TEST_VALUE3: webpack.DefinePlugin.runtimeValue(
					() => JSON.stringify(fs.readFileSync(valueFile, "utf8").trim()),
					true
				),
				TEST_VALUE4: webpack.DefinePlugin.runtimeValue(
					() => JSON.stringify(fs.readFileSync(valueFile, "utf8").trim()),
					{
						fileDependencies: [valueFile]
					}
				),
				TEST_VALUE5: webpack.DefinePlugin.runtimeValue(
					({ version, key }) => JSON.stringify({ version, key }),
					{
						version: () => fs.readFileSync(valueFile, "utf8").trim()
					}
				)
			})
		]
	};
};
