<template>
	<div>
		<h1>The User Page</h1>
		<p>Loaded id: {{id}}</p>
		<button class="btn btn-default" @click="navigateHome">Go to Home</button>
		<hr>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		// data() {
		// 	return {
		// 		//get params from your route
		// 		id: this.$route.params.id
		// 	}
		// },
		// watch: {
		// 	// watcher for $route
		// 	'$route'(to, from) {
		// 		this.id = to.params.id;
		// 	}
		// },
		methods: {
			navigateHome() {
				this.$router.push({name: 'home'})
			}
		}
	}
</script>