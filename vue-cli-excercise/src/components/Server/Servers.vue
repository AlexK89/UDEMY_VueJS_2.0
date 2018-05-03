<template>
	<ul class="list-group">
		<li class="list-group-item" v-for="index in serversNumber">
			Server #{{ index }}
		</li>
	</ul>
</template>

<script>
	export default {
		name: "Servers",
		data() {
			return {
				serversNumber: [1, 2, 3, 4, 5]
			}
		}
	}
</script>

<style scoped>

</style>