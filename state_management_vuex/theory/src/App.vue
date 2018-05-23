<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Vuex</h1>
				<app-result></app-result>
				<hr>
				<app-counter></app-counter>
				<hr>
				<app-another-result></app-another-result>
				<hr>
				<p>Another counter</p>
				<app-another-counter></app-another-counter>
				<hr>
				<!--Two way binding-->
				<!--<input type="text" placeholder="Put a value" :value="values" @input="updateValue">-->
				<!--Two way binding shorter method-->
				<input type="text" placeholder="Put a value" v-model="values">
				<p>Value is: {{values}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Counter from './components/Counter.vue';
	import Result from './components/Result.vue';
	import AnotherCounter from './components/AnotherCounter.vue';
	import AnotherResult from './components/AnotherResult.vue';

	export default {
		computed: {
			// values() {
			// 	return this.$store.getters.value;
			// }
			values: {
				get() {
					return this.$store.getters.value;
				},
				//Setter
				set(value) {
					this.$store.dispatch('updateValue', value);
				}
			}
		},
		methods: {
			// updateValue(event) {
			// 	this.$store.dispatch('updateValues', event.target.value);
			// }
		},
		components: {
			appCounter: Counter,
			appResult: Result,
            appAnotherResult: AnotherResult,
            appAnotherCounter: AnotherCounter,
		}
	}
</script>

