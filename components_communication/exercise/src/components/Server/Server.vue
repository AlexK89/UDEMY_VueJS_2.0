<template>
	<li class="list-group-item">
		Server #{{ server.id }}, status: {{server.status}}; <span @click="selectedServer" style="cursor: pointer">More...</span>
	</li>
</template>

<script>
	import { serverBus } from '../../main';

	export default {
		name: "Server",
		props: ['server'],
		methods: {
			selectedServer() {
				serverBus.$emit('serverSelected', this.server);
			}
		},
	}
</script>

<style scoped>

</style>