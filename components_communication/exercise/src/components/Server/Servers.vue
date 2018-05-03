<template>
	<div class="col-xs-12 col-sm-6">
		<ul class="list-group">
			<app-server v-for="server in servers" :server="server"></app-server>
		</ul>
	</div>
</template>

<script>
	import Server from './Server.vue'
	export default {
		data() {
			return {
				servers: [
					{id: '001', name: 'Mac', status: 'good'},
					{id: '002', name: 'Linux', status: 'poor'},
					{id: '003', name: 'Debian', status: 'good'},
					{id: '004', name: 'Windows', status: 'critical'}
				]
			}
		},
		components: {
			appServer: Server
		}
	}
</script>
