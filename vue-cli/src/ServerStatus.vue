<template>
	<div>
		<h1>Server status: {{ status }}</h1>
		<button @click="changeStatus">Change</button>
		<hr>
	</div>
</template>

<script>
	export default {
		name: "ServerStatus",
		data() {
			return {
				status: 'Critical'
			}
		},
		methods: {
			changeStatus() {
				this.status = 'Acceptable'
			}
		}
	}
</script>

<style scoped>

</style>