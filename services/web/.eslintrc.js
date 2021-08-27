module.exports = {
	root: true,
	extends: [
		"@nuxtjs/eslint-config-typescript",
		"plugin:nuxt/base",
		"./node_modules/@videoplatform2/tooling-config/.eslintrc",
	],
	env: {
		browser: true,
		node: true,
	},
	rules: {
		"vue/html-indent": ["warn", "tab"],
		"vue/html-self-closing": ["warn", {
			html: {
				void: "never",
				normal: "always",
				component: "always",
			},
			svg: "always",
			math: "always",
		}],
		"vue/max-attributes-per-line": "off",
	},
};
