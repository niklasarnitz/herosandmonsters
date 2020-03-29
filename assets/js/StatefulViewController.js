class StatefulViewController {
    constructor(view, viewModel) {
        // MARK: - Instance Properties
        this.view = view;
        this.viewModel = viewModel;

        this.view.fightButton.mousePressed(this.fight.bind(this));
        this.updateView();
    }

    updateView() {
	if(this.viewModel.getHerosLifepoints() <= 1) alert("GAME OVER!")
	if(this.viewModel.getMonstersLifepoints() <= 1) alert("Du hast die Monster besiegt und das Königreich besiegt!")
        this.view.roundLabel.html(this.viewModel.round + ". Runde")
        this.view.heroLifePointsLabel.html(this.viewModel.getHerosLifepoints())
        this.view.monstersLifepointsLabel.html(this.viewModel.getMonstersLifepoints())
        this.view.herosConditionScrollBox.html(this.viewModel.getHerosCondition())
        this.view.monstersConditionScrollBox.html(this.viewModel.getMonstersCondition())
        if(this.viewModel.monsters[this.viewModel.monsterIndex] == undefined) {
		this.view.enemyLabel.html("DU HAST GESIEGT!")
		this.view.monstersConditionScrollBox.html("")
		this.view.monstersLifepointsLabel.html("Gesamte Monsterleben: 0")
		alert("Du hast die bösen Monster besiegt und das Königkreich gerettet!!")
	} else {
		this.view.enemyLabel.html("Dein Gegner: " + this.viewModel.monsters[this.viewModel.monsterIndex].getCondition())
    	}

	if(this.viewModel.heros[this.viewModel.heroIndex] == undefined) {
                this.view.enemyLabel.html("GAME OVER! Du hast leider verloren")
                this.view.herosConditionScrollBox.html("")
                this.view.heroLifePointsLabel.html("Gesamte Heroleben: 0")
                alert("GAME OVER! Du hast leider verloren.")
        }
    }

    fight() {
        this.viewModel.setHero(this.view.chooseHeroInputView.value());
        this.viewModel.regenerateMonstersAndHeros()
        this.viewModel.round++;
        this.viewModel.chooseNewMonster()
        this.viewModel.fight()
        this.viewModel.chooseNewMonster()
	this.updateView();
    }
}
