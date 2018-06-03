<template>
	<div class="page">
		<app-header></app-header>
		<h1>Portfolio component</h1>
		<app-stock v-for="stock in stocks" :stock="stock"></app-stock>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	import Header from '../Header.vue';
	import Stock from './Stock.vue';

	export default {
		name: "Portfolio",
		computed: {
			...mapGetters({
				stocks: 'stockPortfolio'
			}),
		},
		components: {
			appHeader: Header,
			appStock: Stock
		}
	}
</script>