import Vue from 'vue'
import App from './App.vue'

//custom directives
Vue.directive('highlight', {
	
});

new Vue({
	el: '#app',
	render: h => h(App)
})
