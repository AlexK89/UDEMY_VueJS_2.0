import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowercase', (value) => {
	return value.toLowerCase();
});

//global mixin

Vue.mixin({
	created() {
		console.log('Global MIXIN - Created Hook')
	}
});

//the third time of calling a Global mixin is because this Vue object
new Vue({
	el: '#app',
	render: h => h(App)
})
