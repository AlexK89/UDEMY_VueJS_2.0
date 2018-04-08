new Vue({
	el: '#vue-styling',
	data: {
		attachGreen: false
	},
	computed:{
		divColor() {
			return {
				'green': this.attachGreen,
				'blue': !this.attachGreen
			}
		}
	}
});