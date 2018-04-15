<template>
	<div class="component">
		<h3>You may view the User Details here</h3>
		<p>Many Details</p>
		<p>User name: {{reverseName()}}</p>
		<p>User age: {{ userAge }}</p>
		<button @click="resetName">Reset name</button>
		<button @click="resetAge">Reset age</button>
	</div>
</template>

<script>
	import {eventBus} from '../main.js';

	export default {
		name: 'UserDetail',
		// props - for getting properties from outside
		props: {
			// to force a type of parameter we need to use props as object
			// userName: String
			// if we want to add more params for the variable use object
			userName: {
				type: String,
				required: true
			},
			resetName: Function,
			userAge: Number
		},
		methods: {
			reverseName() {
				return this.userName.split('').reverse().join('');
			},
			resetAge() {
				this.userAge = 28;
				eventBus.$emit('ageWasReset', this.userAge);
			},

		},
		// Pass data between siblings step: 3
		created() {
			// listen events emitted
			eventBus.$on('ageWasChanged', (data) => {
				this.userAge = data;
			});
		}
	}
</script>

