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

	 button {
		 padding: 1em 2em;
		 border: none;
		 background-color: #ff4081;
		 color: #ffffff;
		 outline: none;
		 box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
		 0 1px 2px rgba(0, 0, 0, 0.24);
		 transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
	 }

	button:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
		0 10px 10px rgba(0, 0, 0, 0.22);
	}

	button:hover:active {
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
		0 1px 2px rgba(0, 0, 0, 0.24);
	}
</style>
