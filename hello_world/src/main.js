new Vue({
	el: '#vue-section',
	data: {
		title: 'Type any text inside the field',
		link: 'google.com'
	},
	methods: {
		changeTitle: function (event) {
			this.title = event.target.value;
		},
		sayHello: function () {
			return 'hello:)'
		}
	}
});