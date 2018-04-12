new Vue({
	el: '#app',
	data: {
		title: 'vuejs',
		showParagraph: false
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