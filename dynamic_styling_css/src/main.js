new Vue({
	el: '#vue-styling',
	data: {
		attachGreen: false,
		color: ''
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