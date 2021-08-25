module.exports = {
	root: true,
	rules: {
		// form
		"no-useless-escape": "warn",
		"dot-location": ["warn", "property"],
		"semi": ["warn", "always"],
		"comma-dangle": ["warn", {
			"arrays": "always-multiline",
			"objects": "always-multiline",
		}],
		"quotes": ["warn", "double"],
		"prefer-arrow-callback": "warn",
		"indent": ["warn", "tab"],
		"space-before-function-paren": ["warn", "never"],
		"no-tabs": "off",
		"space-before-function-paren": ["warn", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],

		// function
		"require-atomic-updates": "warn",
		"no-unused-vars": "warn",
		"no-await-in-loop": "warn",
		"no-restricted-globals": ["error", "status"],
		"no-constant-condition": ["warn", {
			"checkLoops": false,
		}],
		"no-var": "error",
		"no-invalid-this": "error",
		"prefer-const": "off",
	},
};
