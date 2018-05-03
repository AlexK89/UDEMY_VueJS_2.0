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
	div {
		text-align: center;
		color: #9e9e9e;
	}
	.bar {
		width: 90%;
		height: 2px;
		margin: 0 auto;
		background-color: #d5d5d5;
	}

	.bar span {
		display: block;
		height: 100%;
		background: #f26192;
		transition: .3s;
	}
</style>