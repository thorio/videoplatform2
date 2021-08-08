module.exports = {
	settings: {
		"vetur.format.enable": true,
		"vetur.format.options.useTabs": true,
		"vetur.format.options.tabSize": 4,
		"vetur.format.defaultFormatter.ts": "vscode-typescript",
		"vetur.format.defaultFormatter.html": "js-beautify-html",
		"vetur.format.defaultFormatter.scss": "prettier",
		"vetur.format.defaultFormatterOptions": {
			"prettier": {
				"singleQuote": false,
				"semi": true,
			},
			"js-beautify-html": {
				"indent_with_tabs": true,
				"preserve_newlines": true,
				"end_with_newline": true,
				"max_preserve_newlines": 1,
				"wrap_line_length": 0,
				"wrap_attributes": "preserve",
				"inline": ["a", "abbr", "area", "audio", "b", "bdi", "bdo", "br", "button", "cite", "code", "data", "datalist", "del", "dfn", "em", "i", "input", "ins", "kbd", "keygen", "label", "map", "mark", "math", "meter", "noscript", "object", "output", "progress", "q", "ruby", "s", "samp", "select", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "var", "video", "wbr", "text", "acronym", "address", "big", "dt", "ins", "strike", "tt"]
			},
		},
	},
	projects: [
		{
			root: './services/web',
			globalComponents: [
				'./src/components/**/*.vue',
			],
		},
	],
};
