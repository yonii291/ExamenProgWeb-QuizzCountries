import Country from "./Country";

class Game {
    #score = 0;
    #bestScore = 0;
    #countries = [];
    #countryIndex = 0;
    #currentCountry = null;

    constructor(countries) {
        this.#countries = countries;
        this.#currentCountry = new Country(this.#countries[this.#countryIndex]);
        this.#currentCountry.displayFlag();
    }

    get score() {
        return this.#score;
    }
    incrementScore() {
        this.#score++;
    }

    isGameOver() {
        return this.#countryIndex >= this.#countries.length;
    }
    nextCountry() {
        this.#countryIndex++;
        if (!this.isGameOver()) {
            this.#currentCountry = new Country(this.#countries[this.#countryIndex]);
            this.#currentCountry.displayFlag();
        }
    }
}

export default Game;