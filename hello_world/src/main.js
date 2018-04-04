new Vue({
	el: '#vue-section',
	data: {
		title: 'hello world'
	},
	methods: {
		changeTitle: function (event) {
			this.title = event.target.value;
		}
	}
});