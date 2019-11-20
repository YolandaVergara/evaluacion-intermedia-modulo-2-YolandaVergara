'use strict';
const randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
const guessButton = document.querySelector('.js-button');

function guessNumber(event) {
    const humanNumber = document.querySelector('.js-human-number');
    const result = document.querySelector('.result');
    event.preventDefault();

    if (humanNumber.value < 0 || humanNumber.value > 100) {
        result.innerHTML = 'Tienes que poner un número entre 1 y 100';
    } else if (randomNumber > humanNumber.value) {
        result.innerHTML = 'Tu número es más alto';
    } else if (randomNumber < humanNumber.value) {
        result.innerHTML = 'Tu número es más bajo';
    } else {
        result.innerHTML = 'Has acertado!';
    }
}

// let totalAttempts = 0;
// function numAttempts() {
//     const counterUp = document.querySelector('.attempts');
//     totalAttempts += 1;
//     counterUp.innerHTML = `${totalAttempts}`;
//     console.log('Hola');
// }

// function game() {
//     guessNumber();
//     numAttempts();
// }


guessButton.addEventListener('click', guessNumber);