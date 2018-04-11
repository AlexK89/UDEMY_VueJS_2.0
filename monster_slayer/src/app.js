new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameRunning: false
	},
	methods: {
		startGame() {
			this.gameRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		}
	}
});