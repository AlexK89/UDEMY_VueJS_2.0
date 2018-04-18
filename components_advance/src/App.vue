<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<our-quote>
					<h3>Quote title</h3>
					<p>our quote body</p>
				</our-quote>
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
