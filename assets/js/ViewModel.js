class ViewModel {
    constructor() {
        this.round = 0
        this.heros = []
        this.monsters = []
        this.monsterIndex = 0
        this.heroIndex = 0
        this.dice = new Dice()

        for (var i = 0; i < 5; i++) {
            this.heros.push(new Player(10, this.dice.getRandomInt(5), this.dice.getRandomInt(25)))
            this.monsters.push(new Player(10, this.dice.getRandomInt(5), this.dice.getRandomInt(25)))
        }
    }

    setHero(heroIndex) {
	if(this.heros[heroIndex].energy <= 0) {
		alert("Du kannst mit diesem Held nicht kämpfen! Warte bis er sich erholt hat.")
	} else {
		this.heroIndex = heroIndex
	}
    }

    fight() {
        if (this.heros[this.heroIndex].getAttackValue() > this.monsters[this.monsterIndex].getAttackValue()) {
            this.monsters[this.monsterIndex].lifepoints = this.monsters[this.monsterIndex].lifepoints - 1
        } else if (this.monsters[this.monsterIndex].getAttackValue() > this.heros[this.heroIndex].getAttackValue()) {
            this.heros[this.heroIndex].lifepoints = this.heros[this.heroIndex].lifepoints - 1
        } else if (this.monsters[this.monsterIndex].getAttackValue() == this.heros[this.heroIndex].getAttackValue()) {
            return
        }

        this.heros[this.heroIndex].energy = this.heros[this.heroIndex].energy - 0.25
        this.monsters[this.monsterIndex].energy = this.monsters[this.monsterIndex].energy - 0.25

        this.checkForTheDead()

	if(this.getHerosLifepoints() <= 0) alert("GAME OVER! Die Monster haben dich besiegt!")
	if(this.getMonstersLifepoints() <=0) alert("SUPER! Du hast die Monster besiegt und das Königreich gerettet!")
    }

    checkForTheDead() {
        for (var i = 0; i < this.monsters.length; i++) {
            if (this.monsters[i].lifepoints <= 0) {
                alert("Das Monster " + i + " wurde besiegt!")
                this.monsters.splice(i, 1)
            }
        }

        for (var j = 0; j < this.heros.length; j++) {
            if (this.heros[j].lifepoints <= 0) {
                alert("Dein Held " + j + " wurde besiegt!")
                this.heros.splice(j, 1)
            }
        }
    }

    getRandomMonster() {
        this.monsterIndex = this.dice.getRandomInt(this.monsters.length)
    }

    getHerosCondition() {
        let string = ""
        for (let i = 0; i < this.heros.length; i++) {
            string = string + i + " # " + this.heros[i].getCondition() + "<br>"
        }
        return string
    }

    getMonstersCondition() {
	if(this.monsters.count < 1) {
		return("")
	} else {
        	let string = ""
        	for (let i = 0; i < this.monsters.length; i++) {
        		string = string + i + " # " + this.monsters[i].getCondition() + "<br>"
        	}
        	return string
	}
    }

    getMonstersLifepoints() {
        let sum = 0
        this.monsters.forEach(monster => {
            sum = sum + monster.lifepoints
        })

        return ("Gesamte Monsterleben: " + sum)
    }

    getHerosLifepoints() {
        let sum = 0
        this.heros.forEach(hero => {
            sum = sum + hero.lifepoints
        })

        return ("Gesamte Heroleben: " + sum)
    }

    regenerateMonstersAndHeros() {
        this.monsters.forEach(monster => {
            monster.energy = monster.energy + 0.05
        })

        this.heros.forEach(hero => {
            hero.energy = hero.energy + 0.05
        })
    }

    chooseNewMonster() {
        this.monsterIndex = this.dice.getRandomInt(this.monsters.length)
    }

}
