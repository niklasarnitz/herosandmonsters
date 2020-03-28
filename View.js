class View {
    constructor() {
        // RoundLabel
        this.roundLabel = createDiv("0. Runde")
        this.roundLabel.position(10, 10)

        // HeroLivepointsLabel
        this.heroLifePointsLabel = createDiv("0 Heldenleben")
        this.heroLifePointsLabel.position(130, 10)

        // HerosConditionScrollBox
        this.herosConditionScrollBox = createDiv("")
        this.herosConditionScrollBox.style("height", "200px")
        this.herosConditionScrollBox.style("width", "200px")
        this.herosConditionScrollBox.style("overflow-y", "scroll")
        this.herosConditionScrollBox.position(130, 50)

        // MonsterLivepointsLabel
        this.monstersLifepointsLabel = createDiv("0 Monsterleben")
        this.monstersLifepointsLabel.position(400, 10)

        // MonstersConditionScrollBox
        this.monstersConditionScrollBox = createDiv("")
        this.monstersConditionScrollBox.style("height", "200px")
        this.monstersConditionScrollBox.style("width", "200px")
        this.monstersConditionScrollBox.style("overflow-y", "scroll")
        this.monstersConditionScrollBox.position(400, 50)

        // EnemyLabel
        this.enemyLabel = createDiv("Dein Gegner: ");
        this.enemyLabel.position(10, 270);

        // ChooseHeroCaptionLabel
        this.chooseHeroCaptionLabel = createDiv("Dein Held: ");
        this.chooseHeroCaptionLabel.position(10, 320);

        // ChooseHeroInputView
        this.chooseHeroInputView = createInput("0");
        this.chooseHeroInputView.position(110, 320);

        // FightButton
        this.fightButton = createButton('Runde austragen');
        this.fightButton.position(130, 370);

    }
}
