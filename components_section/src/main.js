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

new Vue({
	el: '#app'
});


