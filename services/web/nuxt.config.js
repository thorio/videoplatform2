export default {
	srcDir: "src/",
	ssr: false,
	target: "static",
	components: true,

	buildModules: [
		"@nuxt/typescript-build",
	],

	plugins: [
		"~/plugins/element-ui",
	],

	server: {
		host: "0.0.0.0",
		port: "8080",
	},

	css: [
		"element-ui/lib/theme-chalk/reset.css",
		"element-ui/lib/theme-chalk/index.css",
		"~/scss/global.scss",
	],

	head: {
		title: "videoplatform2",
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
