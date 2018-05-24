import Vue from 'vue';
import Vuex from 'vuex';
import Counter from './modules/counter.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		value: 0
	},
	getters: {
		value: state => {
			return state.value;
		}
	},
	mutations: {
		updateValue: (state, payload) => {
			state.value = payload;
		}
	},
	//actions - is to make our mutations work async
	actions: {
		updateValue: (context, payload) => {
			context.commit('updateValue', payload);
		}
	},
	modules: {
		Counter
	}
});