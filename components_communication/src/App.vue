<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<app-user></app-user>
			</div>
		</div>
	</div>
</template>

<script>
	import User from './components/User.vue';

	export default {
		components: {
			appUser: User
		}
	}
</script>

<style>
	body {
		background-color: #d5d5d5;
	}
	.container {
		background-color: #ffffff;
		margin: 2em auto;
		padding: 30px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
					0 6px 6px rgba(0, 0, 0, 0.23);
	}
</style>
