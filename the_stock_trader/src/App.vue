<template>
	<div class="container">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		created() {
			this.$store.dispatch('initStocks')
		}
	}
</script>

<style>
	.page {
		padding-top: 30px;
	}
</style>
