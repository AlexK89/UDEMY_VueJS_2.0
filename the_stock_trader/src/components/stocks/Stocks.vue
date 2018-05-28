<template>
	<div class="page">
		<app-header></app-header>
		<h1>Stocks component</h1>
	</div>
</template>

<script>
	import Header from '../Header.vue';

	export default {
		name: "Stocks",
		components: {
			appHeader: Header
		}
	}
</script>

<style scoped>

</style>