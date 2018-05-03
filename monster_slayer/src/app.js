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
			this.attack(3, 10, 2, 12);
		},

		specialAttack() {
			// passing 4 params: playerMin, playerMax, monsterMin, monsterMax
			this.attack(5, 16, 5, 16);
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
			let damageByPlayer = this.damageMath(playerMin, playerMax);

			this.monsterHealth -= damageByPlayer;

			//Pass parameters: attacker, target, damage, isPlayer
			this.commitTurn('Player', 'Monster', damageByPlayer, true);
			if (this.checkResult()) {
				return;
			}

			this.monsterAttack(monsterMin, monsterMax);
			this.checkResult();
		},
		// we use separate method to make it accessible for healing step
		monsterAttack(monsterMin, monsterMax) {
			let damageByMonster = this.damageMath(monsterMin, monsterMax);

			this.playerHealth -= damageByMonster;

			//Pass parameters: attacker, target, damage, isPlayer
			this.commitTurn('Monster', 'Player', damageByMonster, false);
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

				setTimeout(() => {
					alert("You win :)");
				}, 500);

				return true;
			} else if (this.playerHealth <= 0) {
				this.playerHealth = 0;
				this.gameRunning = false;

				setTimeout(() => {
					alert("You lose :(");
				}, 500);
				return true;
			}
		},
	}
});