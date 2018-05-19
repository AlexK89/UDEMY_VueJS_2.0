import Home from './components/Home.vue';
import User from './components/user/User.vue';

export const routes = [
	{path: '', component: Home},
	// :id makes us pass dynamic data
	{path: '/user/:id', component: User}
];