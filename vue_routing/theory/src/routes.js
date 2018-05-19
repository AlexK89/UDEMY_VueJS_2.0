import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

export const routes = [
	{path: '', component: Home},
	// :id makes us pass dynamic data
	//we use parameter children to pass for the components own routes
	{path: '/user/', component: User, children: [
			{ path: '', component: UserStart },
			{ path: ':id', component: UserDetail },
			{ path: ':id/edit', component: UserEdit },
		]}
];