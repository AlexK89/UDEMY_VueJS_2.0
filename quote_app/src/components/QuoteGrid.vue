<template>
	<div>
		<!--"native" modifier means apply click to element which we insert into app-quote-->
		<app-quote v-for="(quote, index) in quotes" @click.native="removeQuote(index)">{{quote}}</app-quote>
	</div>
</template>

<script>
	import Quote from './Quote.vue';

	export default {
		name: "QuoteGrid",
		props: ['quotes'],
		methods: {
			removeQuote(index) {
				this.$emit('deletedQuote', index);
			}
		},
		components: {
			appQuote: Quote
		}
	}
</script>

<style scoped>

</style>