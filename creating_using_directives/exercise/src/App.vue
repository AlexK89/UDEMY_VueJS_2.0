<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Directives Exercise</h1>
				<!-- Exercise -->
				<!-- Build a Custom Directive which works like v-on (Listen for Events) -->
				<p v-font-size="{fontSize: '1.2em', defaultFontSize: '1em', interval: 1000}" style="transition: 0.5s; font-size: 1em; line-height: 3em;">Hello all</p>
				<button v-custom-on:click="clicked">Submit</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		directives: {
			fontSize: {
				bind(el, binding, vnode) {
					let currentSize = binding.value.defaultFontSize;

					setInterval(() => {
						currentSize == binding.value.defaultFontSize ? currentSize = binding.value.fontSize : currentSize = binding.value.defaultFontSize;

						el.style.fontSize = currentSize;
					}, binding.value.interval);
				}
			},
			customOn: {
				bind(el, binding) {
					const type = binding.arg;
					const fn = binding.value;

					el.addEventListener(type, fn);
				}
			}
		},
		methods: {
			clicked() {
				alert('Clicked');
			}
		}
	}
</script>

<style>
</style>
