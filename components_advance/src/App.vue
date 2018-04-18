<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<our-quote></our-quote>
			</div>
		</div>
	</div>
</template>

<script>
	import Quote from './components/Quote.vue'

	export default {
		components: {
			ourQuote: Quote
		}
	}
</script>

<style>
</style>
