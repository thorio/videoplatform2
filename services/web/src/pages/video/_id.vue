<template>
	<el-row gutter="20">
		<el-col span="18">
			<Video :video="video" />
		</el-col>
		<el-col span="6">
			placeholder
		</el-col>
	</el-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	data() {
		return {
			id: this.$route.params.id,
			video: {
				title: "video title",
				publishedAt: new Date(),
				views: 0,
				uploader: {
					username: "uploader",
				},
			},
		};
	},
});
</script>

<style lang="scss" scoped>
</style>
