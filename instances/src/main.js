// Component - should be defined before any vue instance

Vue.component('hello', {
	template: '<h1>Hello from component</h1>'
});

let vm1 = new Vue( {
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
			// printout the button object
			console.log(this.$refs);

			this.$refs.myButton.innerText = 'Passed by $refs'
		},
		updateTitle(title) {
			this.title = title;
		}
	}
});
vm1.$mount('#app1');

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


//mount template from Vue object
let vm3 = new Vue({
	template: '<h1>Hello</h1>'
});

// vm3.$mount('#app3');

// OR
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);

