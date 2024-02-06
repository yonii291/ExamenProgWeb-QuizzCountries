import Country from "./Country.js";
import Game from "./Game.js";

const tabCounitries = [];
const getCountries = (api) => {
    const contries = fetch(`https://restcountries.com/v3.1/all`).then((resutlat) => (resutlat.json()));
    contries.then((data) => {
        console.log(contries);
        contries.forEach((element) => {
            tabCounitries.push(
                new Country(
                    element.name.official,
                    element.flags,
                    element.translations,
                    element.element = false,
                    element.correctAnswers = " "
                ))
            console.log(tabCounitries);
        });
    })

};

const game = new Game(tabCounitries);

const formElement = document.querySelector("form");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = e.target.firstElementChild.value;
if (!game.isGameOver()) {
    if (game.currentCountry.checkAnswer(inputValue)) {
        game.incrementScore();
    }game.nextCountry();
}
alert(`Game over! Your score is ${game.score}`);
reset()
});
displayFlags();
getCountries();
console.log(tabCounitries);
