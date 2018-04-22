<template>
	<div class="quote-table__item">
		<p><slot></slot></p>
	</div>
</template>

<script>
	export default {
		name: "Quote"
	}
</script>

<style scoped>
	.quote-table__item {
		cursor: pointer;
		width: 100%;
		padding: 1em 2em;
		max-width: 600px;
		margin: 0 auto;
		background-color: #05a8f3;
		color: #ffffff;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12),
					0 1px 2px rgba(0,0,0,0.24);
		transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	}

	.quote-table__item:hover {
		box-shadow: 0 14px 28px rgba(0,0,0,0.25),
					0 10px 10px rgba(0,0,0,0.22);
	}

	.quote-table__item:active {
		box-shadow: 0 1px 3px rgba(0,0,0,0.12),
					0 1px 2px rgba(0,0,0,0.24);
	}

	.quote-table__item:nth-child(even) {
		background-color: #1b39a8;
		color: #ffffff;
		margin: 1em 0;
	}

	p {
		text-align: end;
		padding: 1em;
		border-right: 2px solid #ffffff;
	}
</style>