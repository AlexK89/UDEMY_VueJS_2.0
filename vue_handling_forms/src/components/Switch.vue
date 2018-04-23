<template>
	<div class="switcher">
		<div id="on"
			 @click="switched(true)"
			 :class="{active: value}">On</div>
		<div id="off"
			 @click="switched(false)"
			 :class="{active: !value}">Off</div>
	</div>
</template>

<script>
	export default {
		name: "Switcher",
		props: ['value'],
		methods: {
			switched(isOn) {
				this.$emit('input', isOn);
			}
		}
	}
</script>

<style scoped>
	.switcher {
		display: flex;
		justify-content: center;
	}
	#on,
	#off {
		width: 40px;
		height: 20px;
		background-color: #d5d5d5;
		padding: 2px;
		display: inline-block;
		margin: 10px -2px;
		box-sizing: content-box;
		cursor: pointer;
		text-align: center;
	}
	#on:hover, #on.active {
		background-color: #00e6c7;
	}
	#off:hover, #off.active {
		background-color: #ef0000;
	}
</style>