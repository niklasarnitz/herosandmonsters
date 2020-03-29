class View {
    constructor(bottom, width) {
        // RoundLabel
        this.roundLabel = createDiv("0. Runde")
        this.roundLabel.id("roundLabel")
        this.roundLabel.position(width / 2, bottom + 10)

        // HeroLivepointsLabel
        this.heroLifePointsLabel = createDiv("0 Heldenleben")
        this.heroLifePointsLabel.id("heroLifePointsLabel")
        this.heroLifePointsLabel.position(width / 2 - 300, bottom + 10)

        // HerosConditionScrollBox
        this.herosConditionScrollBox = createDiv("")
        this.herosConditionScrollBox.id("herosConditionScrollBox")
        this.herosConditionScrollBox.position(width / 2 - 300, bottom + 50)

        // MonsterLivepointsLabel
        this.monstersLifepointsLabel = createDiv("0 Monsterleben")
        this.monstersLifepointsLabel.id("monstersLifepointsLabel")
        this.monstersLifepointsLabel.position(width / 2 + 300, bottom + 10)

        // MonstersConditionScrollBox
        this.monstersConditionScrollBox = createDiv("")
        this.monstersConditionScrollBox.id("monstersConditionScrollbox")
        this.monstersConditionScrollBox.position(width / 2 + 300, bottom + 50)

        // EnemyLabel
        this.enemyLabel = createDiv("Dein Gegner: ");
        this.enemyLabel.id("enemyLabel")
        this.enemyLabel.position(width / 2, bottom + 270);

        // ChooseHeroCaptionLabel
        this.chooseHeroCaptionLabel = createDiv("Dein Held: ");
        this.chooseHeroCaptionLabel.id("chooseHeroCaptionLabel")
        this.chooseHeroCaptionLabel.position(width / 2 - 75, bottom + 320);

        // ChooseHeroInputView
        this.chooseHeroInputView = createInput("0");
        this.chooseHeroInputView.id("chooseHeroInputView")
        this.chooseHeroInputView.position(width / 2, bottom + 320);

        // FightButton
        this.fightButton = createButton('Runde austragen');
        this.fightButton.id("fightButton")
        this.fightButton.position(width / 2, bottom + 370);

    }
}
