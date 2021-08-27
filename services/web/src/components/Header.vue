<template>
	<header>
		<div class="navbar">
			<div class="brand">
				<nuxt-link to="/">
					<span>videoplatform2</span>
				</nuxt-link>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@use "src/scss/colors.scss";

header {
	&,
	> div {
		width: 100%;
		height: 3rem;
	}

	.navbar {
		position: fixed;
		display: flex;
		flex-direction: row;
		background-color: colors.$background;
		font-size: 1.75rem;
		font-family: Roboto, Helvetica, Arial, sans-serif;
		padding: 0.5rem 1.5rem;
	}
}

.brand {
	span {
		color: colors.$text;
	}
}
</style>
