export default {
	srcDir: "src/",
	ssr: false,
	target: "static",
	components: true,

	buildModules: [
		"@nuxt/typescript-build",
	],

	server: {
		host: "0.0.0.0",
		port: "8080",
	},

	head: {
		title: "tmp",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
		],
	},
};
