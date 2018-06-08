import Vue from 'vue';

export const loadData = ({comit}) => {
	Vue.$http.get('data.json')
		.then(response => response.json())
		.then(data => {
			if (data) {
				const funds = data.funds;
				const stocksPortfolio = data.stocksPortfolio;
				const stocks = data.stocks;

				const portfolio = {
					funds,
					stocksPortfolio
				};

				commit('SET_STOCKS', stocks);
				commit('SET_PORTFOLIO', portfolio);
			}
		})
};