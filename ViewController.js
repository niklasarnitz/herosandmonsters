class StatefulViewController {
    constructor(view, viewModel) {
        // MARK: - Instance Properties
        this.view = view;
        this.viewModel = viewModel;

        this.view.fightButton.mousePressed(this.fight.bind(this));
        this.updateView();
    }

    updateView() {
        this.view.roundLabel.html(this.viewModel.round + ". Runde")
        this.view.heroLifePointsLabel.html(this.viewModel.getHerosLifepoints())
        this.view.monstersLifepointsLabel.html(this.viewModel.getMonstersLifepoints())
        this.view.herosConditionScrollBox.html(this.viewModel.getHerosCondition())
        this.view.monstersConditionScrollBox.html(this.viewModel.getMonstersCondition())
        this.view.enemyLabel.html("Dein Gegner: " + this.viewModel.monsters[this.viewModel.monsterIndex].getCondition())
    }

    fight() {
        this.viewModel.setHero(this.view.chooseHeroInputView.value());
        this.viewModel.regenerateMonstersAndHeros()
        this.viewModel.round++;
        this.viewModel.chooseNewMonster()
        this.viewModel.fight()
        this.updateView();
    }
}
