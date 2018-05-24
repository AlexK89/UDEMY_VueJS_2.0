<template>
	<div>
		<p>Counter is: {{ doubleCounter }}</p>
		<p>Number of clicks: {{ clickCounter }}</p>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import * as types from '../store/types.js';

	export default {
		computed: {
			//spread operator "..." - tels JS to pull all properties and methods from the object
			...mapGetters({
				doubleCounter: types.DOUBLE_COUNTER,
				clickCounter: types.CLICK_COUNTER
			})
		}
	}
</script>