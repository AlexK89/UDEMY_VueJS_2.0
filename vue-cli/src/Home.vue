<template>
	<div>
		<app-server-status v-for="serverStatus in 5">{{ serverStatus }}</app-server-status>
	</div>
</template>

<script>
	import ServerStatus from './ServerStatus.vue';

	export default {
		components: {
			'app-server-status': ServerStatus
		}
	}
</script>

<style scoped>

</style>