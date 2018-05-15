import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

//ADD resource library and call it
Vue.use(VueResource);

new Vue({
	el: '#app',
	render: h => h(App)
});
