class Player {
    constructor(energy, fightforce, lifepoints) {
        this.lifepoints = lifepoints;
        this.fightforce = fightforce;
        this.energy = energy;
        this.dice = new Dice();
    }
    getAttackValue() {
        return (this.fightforce * this.energy * this.dice.getFade())
    }
    getCondition() {
        return ("F:" + this.fightforce + "  E: " + this.energy.toFixed(2) + "  L: " + this.lifepoints)
    }
}
