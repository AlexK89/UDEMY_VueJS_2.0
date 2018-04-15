<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<Header></Header>
			</div>
		</div>
		<hr>
		<div class="row">
			<Servers class="col-xs-12 col-sm-6"></Servers>
			<ServerDetails class="col-xs-12 col-sm-6"></ServerDetails>
		</div>
		<hr>
		<div class="row">
			<div class="col-xs-12">
				<Footer></Footer>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from './components/Shared/Header.vue';
	import Servers from './components/Server/Servers.vue';
	import Footer from './components/Shared/Footer.vue';
	import ServerDetails from './components/Server/ServerDetails.vue';

	export default {
		components: {
			Servers,
			Header,
			ServerDetails,
			Footer,
		}
	}
</script>

<style>

</style>
