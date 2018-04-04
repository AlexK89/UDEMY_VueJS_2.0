new Vue({
	el: '#vue-section',
	data: {
		input: 'Type any text inside the field',
		title: 'hi',
		link: 'http://www.google.com'
	},
	methods: {
		changeTitle: function (event) {
			this.input = event.target.value;
		},
		sayHello: function () {
			this.title = 'hello:)';
			return 'method'
		},
	}
});