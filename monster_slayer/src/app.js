new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameRunning: false
	},
	methods: {
		// Main functionality
		startGame() {
			this.gameRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},
		defaultAttack() {
			// passing 4 params: playerMin, playerMax, monsterMin, monsterMax
			this.attack(3, 10, 0, 12);
		},

		specialAttack() {
			// passing 4 params: playerMin, playerMax, monsterMin, monsterMax
			this.attack(8, 16, 0, 20);
		},
		heal() {

		},
		resetGame() {

		},

		//supplemental methods
		attack(playerMin, playerMax, monsterMin, monsterMax) {
			console.log(playerMin);
			this.monsterHealth -= this.damageMath(playerMin, playerMax);
			if (this.checkResult()) {
				return;
			}

			this.playerHealth -= this.damageMath(monsterMin, monsterMax);
			this.checkResult();
		},
		damageMath(minDamage, maxDamage) {
			return Math.max(Math.ceil(Math.random() * maxDamage), minDamage);
		},
		checkResult() {
			if (this.monsterHealth <= 0) {
				this.monsterHealth = 0;
				this.gameRunning = false;

				alert("you win");
				return true;
			} else if (this.playerHealth <= 0) {
				this.playerHealth = 0;
				this.gameRunning = false;

				alert("you lose");
				return true;
			}
		},
	}
});