<template>
	<p>Counter is: {{ counter }}</p>
</template>

<script>
	import {mapGetters} from 'vuex';
	import * as types from '../store/types.js';

	export default {
		computed: {
			//spread operator "..." - tels JS to pull all properties and methods from the object
			...mapGetters({
				counter: types.DOUBLE_COUNTER,
			})
		}
	}
</script>