<template>
	<div>
		<h1>The User Page</h1>
		<p>Loaded id: {{id}}</p>
		<button class="btn btn-default" @click="navigateHome">Go to Home</button>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				//get params from your route
				id: this.$route.params.id
			}
		},
		methods: {
			navigateHome() {
				this.$router.push('/')
			}
		}
	}
</script>