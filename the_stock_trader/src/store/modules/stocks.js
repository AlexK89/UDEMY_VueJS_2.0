import {stocks} from '../../data/stocks.js';

const state = {
	stocks: [],
};

const mutations = {
	'SET_STOCKS'(state, stocks) {
		state.stocks = stocks;
	},
	'RMD_STOCKS'(state) {
		state.stocks.map(stock => {
			stock.price = Math.round(stock.price * (1 + Math.random() - 0.5) + 2);
		})
	}
};

const actions = {
	buyStock: ({commit}, order) => {
		commit('BUY_STOCK', order);
	},
	initStocks: ({commit}) => {
		commit('SET_STOCKS', stocks);
	},
	randomizeStocks: ({commit}) => {
		commit('RMD_STOCKS');
	}
};

const getters = {
	stocks: state => {
		return state.stocks;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}