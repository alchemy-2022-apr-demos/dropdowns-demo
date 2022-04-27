// Get our Elements
const selectElem = document.getElementById('animal-select');
const zodiacSelect = document.getElementById('zodiac-select');
console.log(zodiacSelect);

const animalDiv = document.getElementById('animal');
const zodiacDiv = document.getElementById('zodiac');
const countElem = document.getElementById('count');

let animalCount = 0;
let zodiacCount = 0;

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
    zodiacDiv.style.backgroundImage = `url('./assets/${zodiacSelect.value}.png')`;
    zodiacCount++;
    displayStats();
});

function displayStats() {
    countElem.textContent = `You have changed the animal ${animalCount} times and the zodiac ${zodiacCount} times.`;
}
