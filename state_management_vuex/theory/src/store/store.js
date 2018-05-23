import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		counter: 0
	},
	getters: {
		doubleCounter: (state) => {
			return state.counter * 2;
		},
		stringCounter: (state) => {
			return `${state.counter} clicks`;
		}
	},
	mutations: {
		increment: state => {
			state.counter++;
		},
		decrement: state => {
			state.counter--;
		}
	},
	//actions - is to make our mutations work async
	actions: {
		increment: context => {
			context.commit('increment');
		},
		decrement: context => {
			context.commit('decrement');
		},
		asyncIncrement: context => {
			context.commit(setTimeout(() => {
				context.commit('increment');
			}, 2000))
		},
		asyncDecrement: context => {
			context.commit(setTimeout(() => {
				context.commit('decrement');
			}, 2000))
		}
	}
});