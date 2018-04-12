let vm1 = new Vue( {
	el: '#app1',
	data: {
		title: 'vuejs',
		showParagraph: false
	},
	computed: {
		lowerCaseTitle() {
			this.title = this.title.toLowerCase();
		}
	},
	methods: {
		show() {
			this.showParagraph = true;
			this.updateTitle('The vuejs instance');
		},
		updateTitle(title) {
			this.title = title;
		}
	}
});

let vm2 = new Vue( {
	el: '#app2',
	data: {
		title: 'Second instance',
	},
	computed: {
		lowerCaseTitle() {
			this.title = this.title.toLowerCase();
		}
	},
	methods: {
		onChange() {
			vm1.title = 'Changed by second instance'
		}
	}
});

setTimeout(() => {
	vm1.title = 'Changed by timer';
}, 3000);