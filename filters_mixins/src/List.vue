<template>
	<div class="list">
		<input type="text" v-model="filteredText">
		<ul>
			<li v-for="fruit in filteredFruits">{{ fruit }}</li>
		</ul>
	</div>
</template>

<script>
	import {fruitMixin} from './fruitMixin.js';

	export default {
		mixins: [fruitMixin],
		created() {
			console.log('Created hook from List component');
		}
	}
</script>

<style>

</style>
