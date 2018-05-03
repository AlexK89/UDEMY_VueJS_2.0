// With components template can be reusable

Vue.component('my-message', {
	data() {
		return {
			greetings: 'Hello'
		}
	},
	template: `<p>My message is: {{greetings}} <button @click="chengeMsg">change</button></p>`,
	methods: {
		chengeMsg() {
			this.greetings = 'Hello again';
		}
	}
});

// to use globally we need to store Vue object into variable
let myComponent = {
	data() {
		return {
			greetings: 'Hello from var'
		}
	},
	template: `<p>My message is: {{greetings}} <button @click="chengeMsg">change</button></p>`,
	methods: {
		chengeMsg() {
			this.greetings = 'Hello again from var';
		}
	}
};

new Vue({
	el: '#app1',
	components: {
		'my-message': myComponent
	}
});

new Vue({
	el: '#app2',
	components: {
		'my-message': myComponent
	}
});