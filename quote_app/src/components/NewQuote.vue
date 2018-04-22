<template>
	<div class="new-quote">
		<form>
			<label for="new-quote"></label>
			<textarea name="new-quote" id="new-quote" cols="30" rows="10" class="form-control" placeholder="Write a Quote..." v-model="quote"></textarea>
			<button @click.prevent="createNewQuote">Add quote</button>
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
				if (this.quote.length) {
					this.$emit('newQuote', this.quote);
					this.quote = '';
				}
			}
		}
	}
</script>

<style scoped>
	.new-quote {
		width: 90%;
		max-width: 600px;
		margin: 2em auto;
	}

	.new-quote form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
	}

	textarea {
		width: 100%;
		border: none;
		padding: 2em;
		margin-bottom: 3em;
		outline: none;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12),
					0 1px 2px rgba(0,0,0,0.24);
	}

	button {
		width: 200px;
		height: 50px;
		border: none;
		background-color: #f26192;
		color: #ffffff;
		font-size: 1.2em;
		outline: none;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12),
		0 1px 2px rgba(0,0,0,0.24);
		transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	}

	button:hover {
		background-color: #f24375;
		box-shadow: 0 14px 28px rgba(0,0,0,0.25),
		0 10px 10px rgba(0,0,0,0.22);
	}

	button:active {
		box-shadow: 0 1px 3px rgba(0,0,0,0.12),
		0 1px 2px rgba(0,0,0,0.24);
	}
</style>