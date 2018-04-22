<template>
	<div class="progress-bar">
		<h2>Progress bar</h2>
		<p>{{ quoteCount }} / {{ maxQuotes }}</p>
		<div class="bar">
			<span :style="{width: quoteCount * 10 + '%'}"></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		props: [
			'quoteCount',
			'maxQuotes'
		]
	}
</script>

<style scoped>
	.bar {
		width: 90%;
		height: 20px;
		margin: 0 auto;
		background-color: #d5d5d5;
		border: 1px solid #0a0a0a;
	}

	.bar span {
		display: block;
		height: 100%;
		background: #00bfa5;
		transition: .3s;
	}
</style>