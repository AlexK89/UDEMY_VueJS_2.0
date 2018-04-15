<template>
	<div>
		<h1>HELLO {{ planetMars }}!</h1>
		<server-status></server-status>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				planetMars: 'Mars'
			}
		}
	}
</script>

<style lang="scss">

</style>
