import Vue from 'vue'
import App from './App.vue'

// Pass data between siblings step: 1
export const eventBus = new Vue({
	methods: {
		changeAge(age) {
			eventBus.$emit('ageWasChanged', age);
		}

	}
});

new Vue({
	el: '#app',
	render: h => h(App)
});