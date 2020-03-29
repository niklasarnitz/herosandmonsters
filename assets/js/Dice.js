class Dice {
    constructor() {}
    getFade() {
        //Math random gibt eine Zahl von 0,5 inklusive bis 1,5 exclusive aus
        return Math.random() + 0, 5;
    }
    // gebe eine ganzzahlige Zufallszahl bis max zurück
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max - 1) + 1);
    }
}
