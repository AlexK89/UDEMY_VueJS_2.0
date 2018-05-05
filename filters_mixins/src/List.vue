<template>
	<div class="list">
		<input type="text" v-model="filteredText">
		<ul>
			<li v-for="fruit in filteredFruits">{{ fruit }}</li>
		</ul>
	</div>
</template>

<script>
	import {fruitMixin} from 'fruitMixin';

	export default {
		mixins: [fruitMixin]
	}
</script>

<style>

</style>
