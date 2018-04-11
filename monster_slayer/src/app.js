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
		},
		attack() {
			this.monsterHealth -= this.damageMath(3, 10);
			this.playerHealth -= this.damageMath(0, 12);

			this.checkResult();
		},
		checkResult() {
			if (this.monsterHealth <= 0) {
				this.monsterHealth = 0;
				this.gameRunning = false;
				
				alert("you win");
			} else if (this.playerHealth <= 0) {
				this.playerHealth = 0;
				this.gameRunning = false;

				alert("you lose");
			}
		},
		damageMath(minDamage, maxDamage) {
			return Math.max(Math.ceil(Math.random() * maxDamage), minDamage);
		},
		specialAttack() {

		},
		heal() {

		},
		resetGame() {

		},
	}
});