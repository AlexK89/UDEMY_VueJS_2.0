<template>
	<div class="component">
		<h3>You may view the User Details here</h3>
		<p>Many Details</p>
		<p>User name: {{userName}}</p>
		<button @click="resetName">Reset name</button>
	</div>
</template>

<script>
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
			}
		},
		methods: {
			resetName() {
				this.userName = 'Alex';
				this.$emit('resetedName', this.userName);
			}
		}
	}
</script>

<style scoped>
	div {
		background-color: #5c6bc0;
		color: #ffffff;
		padding: 1em 2em;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
					0 1px 2px rgba(0, 0, 0, 0.24);
	}
</style>
