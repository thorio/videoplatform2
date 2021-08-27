<template>
	<div>
		<Header />
		<div class="container-fluid">
			<Nuxt />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.container-fluid {
	width: 100%;
	max-width: 1500px;

	margin: 0 auto;
	padding: 1.5rem;
}
</style>
