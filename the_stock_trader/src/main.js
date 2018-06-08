import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import {routes} from "./routes.js";
import store from "./store/store.js";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.filter('currency', value => {
	return `$ ${value.toLocaleString()}`
});

const router = new VueRouter({
	routes,
	// to not use # in url we need to add mode history
	mode: 'history'
});

//to control user access to the component we use beforeEach
router.beforeEach((to, from, next) => {
	next(); // continue a journey
	// next(false); // stop a journey
	// next({}); // pass specific route and redirect you
});

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});
