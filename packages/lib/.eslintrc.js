module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"./node_modules/@videoplatform2/tooling-config/.eslintrc",
	],
};
