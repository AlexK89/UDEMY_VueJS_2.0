<template>
	<div class="row">
		<form class="col-sm-10 com-sm-offset-1">
			<label for="new-quote"></label>
			<textarea name="new-quote" id="new-quote" cols="30" rows="10" class="form-control" v-model="quote"></textarea>
			<button class="button button-primary" @click.prevent="createNewQuote">Add quote</button>
		</form>
	</div>
</template>

<script>
	export default {
		name: "NewQuote",
		data() {
			return {
				quote: ''
			}
		},
		methods: {
			createNewQuote() {
				this.$emit('newQuote', this.quote);
				this.quote = '';
			}
		}
	}
</script>

<style scoped>

</style>