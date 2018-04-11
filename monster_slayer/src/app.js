new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameRunning: false,
		turns: []
	},
	methods: {
		// Main functionality
		startGame() {
			this.gameRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		defaultAttack() {
			// passing 4 params: playerMin, playerMax, monsterMin, monsterMax
			this.attack(3, 10, 3, 15);
		},

		specialAttack() {
			// passing 4 params: playerMin, playerMax, monsterMin, monsterMax
			this.attack(5, 16, 5, 22);
		},
		heal() {
			this.monsterAttack(0, 15);

			// For "damageMath" pass parameters: minDamage, maxDamage
			let healedBy = this.damageMath(6, 10);

			this.playerHealth += healedBy;
			if (this.playerHealth > 100) {
				this.playerHealth = 100;
			}

			this.turns.unshift({
				isPlayer: true,
				text: `You healed by ${healedBy}`
			});
		},
		resetGame() {
			this.playerHealth = 0;
			setTimeout(() => {
				alert('You have been defeated');
			}, 600);
			this.gameRunning = false
		},

		//supplemental methods
		attack(playerMin, playerMax, monsterMin, monsterMax) {
			// For "damageMath" pass parameters: minDamage, maxDamage
			let damage = this.damageMath(playerMin, playerMax);

			this.monsterHealth -= damage;

			//Pass parameters: attacker, target, damage, isPlayer
			this.commitTurn('Player', 'Monster', damage, true);
			if (this.checkResult()) {
				return;
			}

			this.monsterAttack(monsterMin, monsterMax);
			this.checkResult();
		},
		// we use separate method to make it accessible for healing step
		monsterAttack(monsterMin, monsterMax) {
			let damage = this.damageMath(monsterMin, monsterMax);

			this.playerHealth -= damage;

			//Pass parameters: attacker, target, damage, isPlayer
			this.commitTurn('Monster', 'Player', damage, false);
		},
		commitTurn(attacker, target, damage, isPlayer) {
			this.turns.unshift({
				isPlayer: isPlayer,
				text: `${attacker} hits ${target} by ${damage}`
			});
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