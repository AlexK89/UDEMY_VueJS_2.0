<template>
	<div class="component">
		<h3>You may view the User Details here</h3>
		<p>Many Details</p>
		<p>User name: {{userName}}</p>
	</div>
</template>

<script>
	export default {
		name: 'UserDetail',
		// props - for getting properties from outside
		props: ['userName']
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
