import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		counter: 0,
		value: 0
	},
	getters: {
		doubleCounter: (state) => {
			return state.counter * 2;
		},
		stringCounter: (state) => {
			return `${state.counter} clicks`;
		},
		value: state => {
			return state.value;
		}
	},
	mutations: {
		increment: (state, payload) => {
			state.counter += payload;
		},
		decrement: (state, payload) => {
			state.counter -= payload;
		},
		updateValue: (state, payload) => {
			state.value = payload;
		}
	},
	//actions - is to make our mutations work async
	actions: {
		increment: (context, payload) => {
			context.commit('increment', payload);
		},
		decrement: (context, payload) => {
			context.commit('decrement', payload);
		},
		asyncIncrement: (context, args) => {
			context.commit(setTimeout(() => {
				context.commit('increment', args.by);
			}, args.timeout))
		},
		asyncDecrement: (context, args) => {
			context.commit(setTimeout(() => {
				context.commit('decrement', args.by);
			}, args.timeout))
		},
		updateValue: (context, payload) => {
			context.commit('updateValue', payload);
		}
	}
});