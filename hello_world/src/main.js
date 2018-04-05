new Vue({
	el: '#vue-section',
	data: {
		input: 'Type any text inside the field',
		title: 'hi',
		link: 'http://www.google.com',
		fullLink: '<a href="http://yahoo.com">Yahoo</a>'
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

new Vue({
	el: '#exercise',
	data: {
		name: 'Vasile',
		age: '29',
		imageSrc: 'http://en.bcdn.biz/Images/2016/8/17/686e3772-a3df-42bf-b5a2-c1f68ad2c66e.jpg'
	},
	methods: {
		ageMath: function () {
			return this.age * 3;
		},
		randomNum: function () {
			return Math.random();
		}
	}
});