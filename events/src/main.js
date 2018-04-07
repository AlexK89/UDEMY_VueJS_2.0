new Vue({
	el: '#app',
	data: {
		counter: 0,
		x: 0,
		y:0,
		name: 'Alex'
	},
	methods: {
		increase: function(step = 1) {
			this.counter += step;
		},
		randomNum: function (event) {
			this.x = event.clientX;
			this.y = event.clientY;

		},
		deadSpot: function (event) {
			event.stopPropagation();
		},
		alertMessage: function () {
			alert('Submited!');
		}
	}
});

new Vue({
	el: '#exercise',
	data: {
		value: ''
	},
	methods: {
		grebValue: function (event) {
			this.value = event.target.value;
		},
		showAlert: function () {
			alert('Alert');
		}
	}
});

new Vue({
	el: '#app_2',
	data: {
		counter: 0,
		result: ''
	},
	methods: {
		increaseCounter: function () {
			this.counter++;
			this.getResult();
		},
		decreaseCounter: function () {
			this.counter--;
			this.getResult();
		},
		getResult: function () {
			this.result = this.counter > 5 ? 'greater then 5' : 'less then 5';
		}
	}
});

new Vue({
	el: '#app_3',
	data: {
		counter: 0,
		counter_2: 0,
		result: ''
	},
	//computed works just synchronously
	computed: {
		output() {
			return this.result = this.counter > 5 ? ('greater then 5: ' + Math.random()) : ('less then 5: ' + Math.random());
		}
	},
	// watch execute code upon data changes
	// if you need async for 'computed' you need to use 'watch'
	watch: {
		// property needs to be the same as above to make it change
		counter(value) {
			let vueObj = this;
			setTimeout(()=>{
				vueObj.counter = 0;
			},5000);
		}
	},
	methods: {
		increaseCounter: function () {
			return this.result = this.counter > 5 ? ('greater then 5: ' + Math.random()) : ('less then 5: ' + Math.random());
		},
	}
});