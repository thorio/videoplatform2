module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"./node_modules/@videoplatform2/tooling-config/.eslintrc",
	],
	parser: "@typescript-eslint/parser",
	rules: {
		// not needed, we have typescript-eslint
		"no-unused-vars": "off",

		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
	},
};
