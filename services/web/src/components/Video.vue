<template>
	<div>
		<VideoPlayer />
		<div class="title">
			{{ video.title }}
		</div>
		<div class="meta">
			<span>{{ video.uploader.username }}</span>
			<span>{{ video.views }} views</span>
			<span>{{ video.publishedAt | date }}</span>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { date } from "../filters";

export default Vue.extend({
	filters: { date },
	props: {
		video: Object,
	},
});
</script>

<style lang="scss" scoped>
@use "src/scss/colors.scss";

.title {
	margin-top: 1rem;
	font-size: 1.5rem;
}

.meta {
	display: flex;
	margin-top: 0.5rem;
	color: colors.$text-dark;

	span:not(:last-child)::after {
		content: "/";
		color: colors.$text-faint;
		margin: 0 0.75ch;
	}
}
</style>
