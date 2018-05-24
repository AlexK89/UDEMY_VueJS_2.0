import Vue from 'vue';
import Vuex from 'vuex';
import Counter from './modules/counter.js';
import * as actions from './actions.js';
import * as getters from './getters.js';
import * as mutations from './mutations.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		value: 0
	},
	getters,
	mutations,
	//actions - is to make our mutations work async
	actions,
	modules: {
		Counter
	}
});