import Card from "./Card";

export default class Handmaiden extends Card {
    public name = "Servante";
    public value = 4;
    public isPassive = true;

    public action() {
        console.log(`${this.name} vous protège des attaques pendant un tour.`);
    }
}