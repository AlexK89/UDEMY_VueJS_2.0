<template>
	<div class="page">
		<div class="container">
			<app-header></app-header>
			<transition name="slide" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	import Header from './components/Header.vue';

	export default {
		components: {
			appHeader: Header
		},
		created() {
			this.$store.dispatch('initStocks')
		}
	}
</script>

<style>
	.page {
		padding-top: 30px;
	}

	.slide-enter-active {
		animation: slideIn 0.3s forwards;
	}

	.slide-leave-active {
		animation: slideOut 0.3s forwards;
	}

	@keyframes slideIn {
		from {
			transform: translateY(-30px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes slideOut {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(-30px);
			opacity: 0;
		}
	}
</style>
