<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Routing</h1>
				<hr>
				<router-view name="header-top"></router-view>
				<transition name="slide" mode="out-in">
					<router-view></router-view>
				</transition>
				<hr>
				<router-view name="header-bottom"></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from './components/Header.vue';

	export default {
		components: {
			appHeader: Header
		}
	}
</script>

<style>
	/*Animations*/
	@keyframes slideIn {
		0% {
			transform: translateY(40px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes slideOut {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		100% {
			transform: translateY(40px);
			opacity: 0;
		}
	}

	.slide-enter-active {
		animation: slideIn .7s forwards;
	}

	.slide-leave-active {
		animation: slideOut .7s forwards;
		position: absolute;
	}

</style>
