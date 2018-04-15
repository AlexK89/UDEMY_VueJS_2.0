<template>
	<div class="component">
		<h3>You may edit the User here</h3>
		<p>Edit me!</p>
		<p>User age: {{ userAge }}</p>
		<button @click="editAge">Edit age</button>
	</div>
</template>

<script>
	// {eventBus} - ES6 syntax for get specific data from external file
	import {eventBus} from '../main.js';
	export default {
		name: 'UserEdit',
		props: ['userAge'],
		methods: {
			editAge() {
				this.userAge = 30;
				// this.$emit('ageWasChanged', this.userAge);

				// Pass data between siblings step: 2
				eventBus.$emit('ageWasChanged', this.userAge);
			}
		},
		created() {
			// listen events emitted
			eventBus.$on('ageWasReset', (data) => {
				this.userAge = data;
			});
		}
	}
</script>

<style scoped>
	div {
		height: 100%;
	}
</style>
