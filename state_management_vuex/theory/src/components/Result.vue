<template>
	<div>
		<p>Counter is: {{ doubleCounter }}</p>
		<p>Number of clicks: {{ stringCounter }}</p>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			//spread operator "..." - tels JS to pull all properties and methods from the object
			...mapGetters([
				'doubleCounter',
				'stringCounter'
			])
		}
	}
</script>