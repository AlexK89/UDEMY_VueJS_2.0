

<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Build in Directives</h1>
				<p v-text="'v-text - Hello World'"></p>
				<p v-html="'v-html - <strong>html text</strong>'"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<!--delayed is a modifier, we can create and use a lot of modifiers-->
				<h1 v-highlight:background.delayed="'green'">Custom Directives</h1>
				<h1 v-highlight="'green'">Custom Directives</h1>
				<h1 v-local-highlight:background.delayed.blink="{
					mainColor: 'green',
					secondColor: 'blue',
					interval: 500,
					target: 'background'
					}">Custom Directives</h1>
				<p v-text="'v-text - Hello World'"></p>
				<p v-html="'v-html - <strong>html text</strong>'"></p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'App',
		directives: {
			'localHighlight': {
				bind(el, binding, vnode) {
					let delay = 0;

					if (binding.modifiers['delayed']) {
						delay = 3000;
					}

					if (binding.modifiers['blink']) {
						let currentColor = binding.value.mainColor;

						setTimeout(() => {
							setInterval(() => {
								currentColor === binding.value.mainColor ? currentColor = binding.value.secondColor : currentColor = binding.value.mainColor;

								if (binding.value.target === 'background') {
									el.style.background = currentColor;
								} else {
									el.style.color = currentColor;
								}
							}, binding.value.interval);

						}, 3000);

					} else {
						setTimeout(() => {
							if (binding.value.target === 'background') {
								el.style.background = binding.value.mainColor;
							} else {
								el.style.color = binding.value.mainColor;
							}
						}, delay);
					}
				}
			}
		}
	}
</script>

<style>

</style>
