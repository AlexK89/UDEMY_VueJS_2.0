import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

//ADD resource library and call it
Vue.use(VueResource);

//Default URL for DB
// Vue.http.options.root = 'https://vuejs-udemy-ca814.firebaseio.com/users.json';

//URL for DB with internal resources
Vue.http.options.root = 'https://vuejs-udemy-ca814.firebaseio.com/';

//Interceptors
Vue.http.interceptors.push((request, next) => {
	console.log(request);
	if (request.method === 'POST') {
		request.method = 'PUT';
	}
	//convert native response object into readable one
	next(response => {
		response.json = () => {return {messages: response.body}}
	});
});

new Vue({
	el: '#app',
	render: h => h(App)
});
