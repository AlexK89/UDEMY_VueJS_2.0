import Home from './components/Home.vue';
import Header from './components/Header.vue';

// LAZY LOADER - loads when it requires !!! VERY USEFUL FOR BIG APPS
const User = resolve => {
	require.ensure(['./components/user/User.vue'], () => {
		resolve(require('./components/user/User.vue'));
	});
};

const UserStart = resolve => {
	require.ensure(['./components/user/UserStart.vue'], () => {
		resolve(require('./components/user/UserStart.vue'));
	});
};

const UserDetail = resolve => {
	require.ensure(['./components/user/UserDetail.vue'], () => {
		resolve(require('./components/user/UserDetail.vue'));
	});
};

const UserEdit = resolve => {
	require.ensure(['./components/user/UserEdit.vue'], () => {
		resolve(require('./components/user/UserEdit.vue'));
	});
};

// ==============================
// ==============================

export const routes = [
	{
		path: '',
		name: 'home',
		components: {
			default: Home,
			'header-top': Header
		}
	},
	// :id makes us pass dynamic data
	//we use parameter children to pass for the components own routes
	{
		path: '/user/',
		children: [
			{
				path: '',
				component: UserStart},
			{
				path: ':id',
				component: UserDetail,
				beforeEnter: (to, from, next) => {
					console.log('Inside route setup | Children');
					next();
				}
			},
			//we can edit name property to make your code cleaner
			{
				path: ':id/edit',
				component: UserEdit,
				name: 'userEdit'
			},
		],
		components: {
			default: User,
			'header-bottom': Header
		},
	},
	{
		path: '/redirect-me',
		redirect: {
			name: 'home'
		}
	},
	{
		path: '*',
		redirect: {
			name: 'home'
		}
	}
];