import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

//ADD resource library and call it
Vue.use(VueResource);

//Default URL for DB

Vue.http.options.root = 'https://vuejs-udemy-ca814.firebaseio.com/users.json';

new Vue({
	el: '#app',
	render: h => h(App)
});
