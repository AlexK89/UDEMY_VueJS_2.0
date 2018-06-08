<template>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<router-link class="navbar-brand" to="/">Stock Trader</router-link>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<router-link to="/portfolio" active-class="active" tag="li"><a>Portfolio</a></router-link>
					<router-link to="/stocks" active-class="active" tag="li"><a>Stocks</a></router-link>
				</ul>
				<strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
				<ul class="nav navbar-nav navbar-right">
					<li><a @click="endDay">End Day</a></li>
					<li class="dropdown" :class="{open: isDropdownOpen}">
						<a
								class="dropdown-toggle"
								data-toggle="dropdown"
								role="button"
								aria-haspopup="true"
								aria-expanded="false"
								@click="isDropdownOpen = !isDropdownOpen">
									Save & Load <span class="caret"></span>
						</a>
						<ul class="dropdown-menu">
							<li><a href="#" @click="saveData">Save Data</a></li>
							<li><a href="#" @click="loadData">Load Data</a></li>
						</ul>
					</li>
				</ul>
			</div><!-- /.navbar-collapse -->
		</div><!-- /.container-fluid -->
	</nav>
</template>

<script>
	import {mapActions} from 'vuex';

	export default {
		name: "Header",
		data() {
			return {
				isDropdownOpen: false
			}
		},
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		},
		methods: {
			...mapActions([
				'randomizeStocks'
			]),
			endDay() {
				this.randomizeStocks();
			},
			saveData() {
				const data = {
					funds: this.$store.getters.funds,
					stocksPortfolio: this.$store.getters.stockPortfolio,
					stocks: this.$store.getters.stocks
				};

				this.$http.put('data.json', data);
			},
			loadData() {

			}
		}
	}
</script>

<style scoped>

</style>