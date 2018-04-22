<template>
	<div>
		<div class="panel">
			<div class="panel-body quote">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Quote"
	}
</script>

<style scoped>
	.quote {
		background-color: #d5d5d5;
	}

	.quote:hover {
		 background-color: #00bfa5;
	 }
</style>