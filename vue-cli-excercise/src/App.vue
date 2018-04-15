<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<pageHeader></pageHeader>
			</div>
		</div>
		<hr>
		<div class="row">
			<serverItem class="col-xs-12 col-sm-6"></serverItem>
			<serverDetails class="col-xs-12 col-sm-6"></serverDetails>
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
	import Header from './Header.vue';
	import Servers from './Servers.vue';
	import Footer from './Footer.vue';
	import ServerDetails from './ServerDetails.vue';

	export default {
		components: {
			'serverItem': Servers,
			'pageHeader': Header,
			'serverDetails': ServerDetails,
			'Footer': Footer,
		}
	}
</script>

<style>

</style>
