<template>
	<div>
		<button class="btn btn-primary" @click="asyncIncrement">Increment</button>
		<button class="btn btn-primary" @click="asyncDecrement">Decrement</button>
	</div>
</template>

<script>
	// import {mapMutations} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		methods: {
			// ...mapMutations([
			// 	'increment',
			// 	'decrement'
			// ])
			...mapActions([
				'asyncIncrement',
				'asyncDecrement',
			])
		}
	}
</script>