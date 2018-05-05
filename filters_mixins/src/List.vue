<template>
	<div class="list">
		<input type="text" v-model="filteredText">
		<ul>
			<li v-for="fruit in filteredFruits">{{ fruit }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				fruits: ['apple', 'banana', 'orange', 'watermelon'],
				filteredText: ''
			}
		},
		computed: {
			filteredFruits() {
				return this.fruits.filter((element) => {
					return element.match(this.filteredText);
				})
			}
		}
	}
</script>