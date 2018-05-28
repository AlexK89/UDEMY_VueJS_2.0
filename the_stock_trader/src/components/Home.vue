<template>
	<div class="page">
		<app-header></app-header>
		<h1>Home component</h1>
	</div>
</template>

<script>
	import Header from './Header.vue';

	export default {
		name: "Home",
		components: {
			appHeader: Header
		}
	}
</script>

<style>
</style>