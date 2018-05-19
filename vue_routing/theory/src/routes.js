import Home from './components/Home.vue';
import Header from './components/Header.vue';
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

export const routes = [
	{
		path: '', name: 'home', components: {
			default: Home,
			'header-top': Header
		}
	},
	// :id makes us pass dynamic data
	//we use parameter children to pass for the components own routes
	{
		path: '/user/', children: [
			{path: '', component: UserStart},
			{path: ':id', component: UserDetail},
			//we can edit name property to make your code cleaner
			{path: ':id/edit', component: UserEdit, name: 'userEdit'},
		],
		components: {
			default: User,
			'header-top': Header,
			'header-bottom': Header
		}
	},
	{
		path: '/redirect-me', redirect: {name: 'home'}
	}
];