<template>
	<el-row :gutter="20">
		<el-col :span="18">
			<Video :video="video" />
		</el-col>
		<el-col :span="6">
			placeholder
		</el-col>
	</el-row>
</template>

<script lang="ts">
import Vue from "vue";
import videoQuery from "../../apollo/queries/getVideo.gql";

export default Vue.extend({
	apollo: {
		videos: {
			query: videoQuery,
		},
	},

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
