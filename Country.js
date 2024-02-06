class Country {
    name;
    flag;
    spellings;
    translations;
    #element;
    #correctAnswers;
//constructeur de la classe Country
    constructor(name, flag, spellings, translations) {
        this.name = name;
        this.flag = flag;
        this.spellings = spellings;
        this.translations = translations;
        this.#correctAnswers = this.extractCorrectAnswers(translations);
    }
//getteur du drapeau
    get flagImage() {
        return this.flag;
    }
//set sur les réponses justes
    CorrectAnswers(translations) {
        const correctAnswers = new Set();
        for (const language in translations) {
            const translation = translations[language];
            if (translation.common) {
                correctAnswers.add(translation.common);
            }
        }
        return correctAnswers;
    }

    checkAnswer(answer) {
        const normalizedAnswer = answer.toLowerCase();
        return this.#correctAnswers.has(normalizedAnswer);
    }

    displayFlag() {
        const flagsElement = document.getElementById('flags');
        const flagElement = document.createElement('h1');
        flagElement.style.backgroundImage = `url(${this.flag})`;
        flagsElement.appendChild(flagElement);
    }
}

export default Country;
