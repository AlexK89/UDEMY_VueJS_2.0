<template>
	<div class="quote">
		<!--slot - is reserved word to receive html block -->
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "Quote"
	}
</script>

<style scoped>
	.quote {
		background-color: #5c6bc0;
		color: #ffffff;
		text-align: center;
		margin: 2em auto;
		padding: 30px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
					0 6px 6px rgba(0, 0, 0, 0.23);
	}
</style>