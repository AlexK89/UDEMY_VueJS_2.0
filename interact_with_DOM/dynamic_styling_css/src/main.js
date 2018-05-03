new Vue({
	el: '#vue-styling',
	data: {
		attachGreen: false,
		color: '',
		width: null,
		height: null
	},
	computed: {
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

new Vue({
	el: '#exercise',
	data: {
		styles: '',
		colorRed: 'red',
		border: 'box-border',
		boxStyle: '',
		extraClass: false,
		inputClass: '',
		test: 100,
		myStyle: {
			background: 'green'
		},
		progressBar: {
			height: '20px',
			background: 'red',
			width: 0,
			transition: '5s'
		}
	},
	methods: {
		startEffect() {
			return setInterval(() => {
				if (this.styles === 'highlight') {
					this.styles = 'shrink';
				} else {
					this.styles = 'highlight';
				}
			}, 3000);
		},
		startProgress() {
			let vm = this;
			let width = 0;

			let interval = setInterval(() => {
				console.log(width);
				if (width < 1000) {
					width += 30;
					vm.progressBar.width = width + 'px';
				} else {
					clearInterval(interval);
				}
			}, 100)
		}
	}
});