new Vue({
	el: '#vue-section',
	data: {
		title: 'Type any text inside the field'
	},
	methods: {
		changeTitle: function (event) {
			this.title = event.target.value;
		}
	}
});