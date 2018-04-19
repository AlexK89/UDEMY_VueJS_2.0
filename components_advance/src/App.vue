<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<button @click="selectedComponent='ourQuote'">Quote</button>
				<button @click="selectedComponent='ourAuthor'">Author</button>
				<button @click="selectedComponent='ourNew'">New</button>
				<!--Dynamic components-->
				<component :is="selectedComponent">
					<p>Default Content</p>
				</component>
				<!--<our-quote>-->
					<!--<h3 slot="title">Quote title</h3>-->
					<!--<p slot="body">our quote body</p>-->
				<!--</our-quote>-->
			</div>
		</div>
	</div>
</template>

<script>
	import Quote from './components/Quote.vue'
	import Author from './components/Author.vue'
	import New from './components/New.vue'

	export default {
		data() {
			return {
				quoteTitle: 'The Quote',
				selectedComponent: 'ourQuote',
			}
		},
		components: {
			ourQuote: Quote,
			ourAuthor: Author,
			ourNew: New,
		}
	}
</script>

<style>
</style>
