<template>
	<div>
		<p>{{ testVar }}</p>
		<p>{{ apiResult }}</p>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { test } from "@videoplatform2/lib";

function delay(milliseconds: number): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(resolve, milliseconds);
	});
}

export default Vue.extend({
	data() {
		return {
			testVar: test("with lerna + nuxt + docker"),
			apiResult: "loading...",
		};
	},

	async fetch() {
		await delay(500);

		this.apiResult = await fetch("/api")
			.then(res => res.text());
	},
});
</script>
