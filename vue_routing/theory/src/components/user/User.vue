<template>
	<div>
		<h1>The User Page</h1>
		<button class="btn btn-default" @click="navigateHome">Go to Home</button>
	</div>
</template>
<script>
	export default {
		methods: {
			navigateHome() {
				this.$router.push('/')
			}
		}
	}
</script>