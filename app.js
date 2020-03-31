//imports functions
import compareNumbers from './compareNumbers.js';

// elements from first section
const readyButton = document.getElementById('ready-button');
const rulesSection = document.getElementById('rules');

// elements from second section
const gameSection = document.getElementById('game');
const numberGuessInput = document.getElementById('number-guess');
const submitButton = document.getElementById('guess-button');
const numberOfLives = document.getElementById('number-of-lives');
const highOrLow = document.getElementById('high-or-low');

//elements from third section
const resultSection = document.getElementById('results');
const againButton = document.getElementById('again-button');
const winOrLose = document.getElementById('win-or-lose');

// initializing data
let numLives = 4;
let numToGuess = Math.floor(Math.random() * (20 - 1)) + 1;

readyButton.addEventListener('click', () => {
    rulesSection.style.display = 'none';
    gameSection.style.display = 'flex';
});

submitButton.addEventListener('click', () => {
    let guessed = Number(numberGuessInput.value);
    let expected = Number(numToGuess);
    console.log(guessed, expected, numLives);
    let result = compareNumbers(expected, guessed);
    if (result === 'correct') {
        gameSection.style.display = 'none';
        resultSection.style.display = 'flex';
        winOrLose.textContent = 'Congratulations, you won!';
    } else if (result === 'higher') {
        highOrLow.textContent = 'You need to guess lower!';
    } else if (result === 'lower') {
        highOrLow.textContent = 'You need to guess higher!';
    }
    numLives--;
    if (numLives === 0) {
        gameSection.style.display = 'none';
        resultSection.style.display = 'flex';
        winOrLose.textContent = 'Better luck next time!';
    }
    numberOfLives.textContent = numLives;
});

againButton.addEventListener('click', () => {

});

// while (numGuesses > 0) {
// submitButton.addEventListener('click', () => {
//         let guessed = numberGuessInput.value;
//         console.log(guessed, numToGuess);
//         compareNumbers(guessed, numToGuess);
//         if (compareNumbers === 'corect') {
//             numLives.textContent = 'You win!';
//         } else if (compareNumbers === 'higher') {
//             numLives.textContent = 'You are too high!';
//             break;
//         } else if (compareNumbers === 'lower') {
//             numLives.textContent = 'You are too low!';
//             break;
//         }
//         numGuesses--;
//         numLives.textContent = numGuesses;    
// });
// }

// againButton.addEventListener('click', () => {
//     gameSection.style.display = 'flex';
    
// });



