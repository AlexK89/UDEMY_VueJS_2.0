export const fruitMixin = {
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
};