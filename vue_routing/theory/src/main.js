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
		mode: 'history',
		// to make scroll when we use #id in url to navigate to some element on a page
		//savedPosition is to keep in memory if you navigate back and forward
		scrollBehavior(to, from, savedPosition) {
			if (savedPosition) {
				return savedPosition;
			}
			if (to.hash) {
				return { selector: to.hash }
			}
			return {x: 0, y: 0}
		}
	}
);

//to control user access to the component we use beforeEach
router.beforeEach((to, from, next) => {
	console.log('Global beforeEach');
	next(); // continue a journey
	// next(false); // stop a journey
	// next({}); // pass specific route and redirect you
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
