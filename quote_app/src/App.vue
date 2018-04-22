<template>
	<div>
		<app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
		<app-new-quote @newQuote="addNewQuote"></app-new-quote>
		<app-quote-grid :quotes="quotes" @deletedQuote="deleteQuote"></app-quote-grid>
	</div>
</template>

<script>
	import Header from './components/Header.vue';
	import QuoteGrid from './components/QuoteGrid.vue';
	import NewQuote from './components/NewQuote.vue';

	export default {
		data() {
			return {
				quotes: [
					'test quote'
				],
				maxQuotes: 10
			}
		},
		methods: {
			addNewQuote(quote) {
				if (!(this.quotes.length >= this.maxQuotes)) {
					this.quotes.unshift(quote);
				}
			},
			deleteQuote(index) {
				this.quotes.splice(index, 1);
			}
		},
		components: {
			appHeader: Header,
			appQuoteGrid: QuoteGrid,
			appNewQuote: NewQuote
		}
	}
</script>

<style>
	* {
		font-family: 'Roboto', cursive;
		box-sizing: border-box;
	}
</style>
