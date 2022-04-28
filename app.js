// Get our Elements
const selectElem = document.getElementById('animal-select');
const zodiacSelect = document.getElementById('zodiac-select');
console.log(zodiacSelect);

const animalDiv = document.getElementById('animal');
const zodiacDiv = document.getElementById('zodiac');
const countElem = document.getElementById('count');

const catchphraseElem = document.getElementById('catchphrase');
const button = document.getElementById('save-button');

let animalCount = 0;
let zodiacCount = 0;

let catchphrases = [];

// listening for any changes to the select menu
selectElem.addEventListener('change', () => {
    console.log('changing select', selectElem.value);
    animalDiv.style.backgroundImage = `url('./assets/${selectElem.value}.png')`;
    // animalDiv.style = `background-image: url('./assets/${selectElem.value}.png`;
    // increment the state every time the user picks a different animal
    animalCount++;
    displayStats();
});

zodiacSelect.addEventListener('change', () => {
    console.log('changing zodiac', zodiacSelect.value);
    zodiacDiv.style.backgroundImage = `url('./assets/${zodiacSelect.value}-sign.png')`;
    zodiacCount++;
    displayStats();
});

function displayStats() {
    countElem.textContent = `You have changed the animal ${animalCount} times and the zodiac ${zodiacCount} times.`;
}

button.addEventListener('click', () => {
    catchphrases.push(catchphraseElem.value);
    console.log(catchphrases);
    displayCatchPhrases();
});

function displayCatchPhrases() {
    const catchphraseList = document.getElementById('catchphrase-list');
    // clear out the existing catchphrases
    catchphraseList.textContent = '';

    // loop through each catchphrase
    for (let phrase of catchphrases) {
        // create an element with the catchphrase as textContent
        const banana = document.createElement('li');
        banana.textContent = phrase;
        // append the new element to the page
        catchphraseList.append(banana);
    }
}
