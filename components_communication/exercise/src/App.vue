<template>
	<div class="container">
		<app-header></app-header>
		<hr>
		<div class="row">
			<servers :servers="servers"></servers>
			<app-server-details></app-server-details>
		</div>
		<hr>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import Header from './components/Shared/Header.vue';
	import Footer from './components/Shared/Footer.vue';
	import Servers from './components/Server/Servers.vue';
	import ServerDetails from './components/Server/ServerDetails.vue';

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
			appHeader: Header,
			Servers,
			'app-server-details': ServerDetails,
			'app-footer': Footer
		}
	}
</script>

<style>

</style>
