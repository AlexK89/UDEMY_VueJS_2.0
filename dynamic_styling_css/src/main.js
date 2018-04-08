new Vue({
	el: '#vue-styling',
	data: {
		attachGreen: false,
		color: '',
		width: null,
		height: null
	},
	computed:{
		divColor() {
			return {
				'green': this.attachGreen,
				'blue': !this.attachGreen
			}
		},
		size() {
			return {
				width: this.width + 'px',
				height: this.height + 'px'
			}

		}
	}
});