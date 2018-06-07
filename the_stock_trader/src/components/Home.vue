<template>
	<div class="page">
		<h1>Trade or view your profile</h1>
		<h6>Save&Load your data</h6>
		<h6>Click 'End Day' to begin a new day</h6>
		<hr>
		<p>Your funds is: {{ funds | currency }}</p>
	</div>
</template>

<script>

	export default {
		name: "Home",

		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		},
	}
</script>