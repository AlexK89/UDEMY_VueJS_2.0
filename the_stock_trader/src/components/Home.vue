<template>
	<div class="page">
		<app-header></app-header>
		<h1>Trade or view your profile</h1>
		<h6>Save&Load your data</h6>
		<h6>Click 'End Day' to begin a new day</h6>
		<hr>
		<p>Your funds is: {{ funds | currency }}</p>
	</div>
</template>

<script>
	import Header from './Header.vue';

	export default {
		name: "Home",
		components: {
			appHeader: Header
		},
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		}
	}
</script>