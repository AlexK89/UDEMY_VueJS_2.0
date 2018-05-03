<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<br>
				<button class="btn btn-primary" @click="selectedBlock='appBlue'">Load Blue Template</button>
				<button class="btn btn-success" @click="selectedBlock='appGreen'">Load Green Template</button>
				<button class="btn btn-danger" @click="selectedBlock='appRed'">Load Red Template</button>
				<hr>
				<component :is="selectedBlock"></component>
			</div>
		</div>
	</div>
</template>

<script>
	import Blue from './components/Blue.vue';
	import Green from './components/Green.vue';
	import Red from './components/Red.vue';

	export default {
		components: {
			appBlue: Blue,
			appGreen: Green,
			appRed: Red
		},
		data() {
			return {
				selectedBlock: 'appBlue'
			}
		}
	}
</script>

<style>
</style>
