<template>
	<div class="page">
		<h1>Stocks component</h1>
		<app-stock v-for="stock in stocks" :stock="stock"></app-stock>
	</div>
</template>

<script>
	import Header from '../Header.vue';
	import Stock from './Stock.vue';

	export default {
		name: "Stocks",
		components: {
			appHeader: Header,
			appStock: Stock
		},
		computed: {
			stocks() {
				return this.$store.getters.stocks;
			}
		}
	}
</script>

<style scoped>

</style>