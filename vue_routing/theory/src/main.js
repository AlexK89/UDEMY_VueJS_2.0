import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import {routes} from './routes';

//To use Router we need 'use'
Vue.use(Router);

const router = new Router(
	{
		routes,
		// to not use # in url we need to add mode history
		mode: 'history'
	}
);

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
