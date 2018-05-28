<template>
	<div class="page">
		<app-header></app-header>
		<h1>Stocks component</h1>
		<app-stock v-for="stock in stocks" :stock="stock"></app-stock>
	</div>
</template>

<script>
	import Header from '../Header.vue';
	import Stock from './Stock.vue';

	export default {
		name: "Stocks",
		data() {
			return {
				stocks: [
					{id: 1, name: 'Apple', price: 10},
					{id: 2, name: 'BMW', price: 12},
					{id: 3, name: 'Audi', price: 123},
					{id: 4, name: 'Facebook', price: 54}
				]
			}
		},
		components: {
			appHeader: Header,
			appStock: Stock
		}
	}
</script>

<style scoped>

</style>