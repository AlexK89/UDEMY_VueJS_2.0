<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Filters & Mixins</h1>
				<p>{{ text | toUppercase | toLowercase }}</p>
				<hr>
				<input type="text" v-model="filteredText">
				<ul>
					<li v-for="fruit in filteredFruits">{{ fruit }}</li>
				</ul>
				<hr>
				<app-list></app-list>
			</div>
		</div>
	</div>
</template>

<script>
	import {fruitMixin} from './fruitMixin.js';
	import List from './List.vue';

	export default {
		data() {
			return {
				text: 'Hello world',
			}
		},
		filters: {
			// 'value' - is must have, means value we want to transform
			toUppercase(value) {
				return value.toUpperCase();
			}
		},
		mixins: [fruitMixin],
		components: {
			appList: List
		},
		created() {
			console.log('Created hook from App component');
		}
	}
</script>

<style>

</style>
