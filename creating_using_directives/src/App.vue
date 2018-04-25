

<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Build in Directives</h1>
				<p v-text="'v-text - Hello World'"></p>
				<p v-html="'v-html - <strong>html text</strong>'"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1 v-highlight="'grey'">Custom Directives</h1>
				<p v-text="'v-text - Hello World'"></p>
				<p v-html="'v-html - <strong>html text</strong>'"></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>

</style>
