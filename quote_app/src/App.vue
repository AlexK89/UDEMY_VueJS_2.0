<template>
	<div>
		<app-new-quote @newQuote="addNewQuote"></app-new-quote>
		<app-quote-grid :quotes="quotes" @deletedQuote="deleteQuote"></app-quote-grid>
	</div>
</template>

<script>
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
				this.quotes.push(quote);
			},
			deleteQuote(index) {
				this.quotes.splice(index, 1);
			}
		},
		components: {
			appQuoteGrid: QuoteGrid,
			appNewQuote: NewQuote
		}
	}
</script>

<style>
</style>
