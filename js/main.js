"use strict";

const guessButton = document.querySelector(".js-button");
const humanNumber = document.querySelector(".js-human-number");
const result = document.querySelector(".result");
const reset = document.querySelector(".js-reset");

//función que genera un juego nuevo
function guessNumber() {
  const randomNumber = Math.ceil(Math.random() * 100);
  if (
    humanNumber.value < 0 ||
    humanNumber.value > 100 ||
    humanNumber.value === ""
  ) {
    result.innerHTML = "Tienes que poner un número entre 1 y 100";
  } else if (randomNumber > humanNumber.value) {
    result.innerHTML = "Tu número es más alto";
    numAttempts();
  } else if (randomNumber < humanNumber.value) {
    result.innerHTML = "Tu número es más bajo";
    numAttempts();
  } else {
    result.innerHTML = "Has acertado!";
  }

}

//función que arranca el contador
let totalAttempts = 0;
function numAttempts() {
  const counterUp = document.querySelector(".js-attempts");
  const finishGame = document.querySelector(".js-finish");
  if (totalAttempts === 3) {
    finishGame.innerHTML = 'Perdiste';
    totalAttempts = 0;
  }
  totalAttempts += 1;
  counterUp.innerHTML = `${totalAttempts}`;
}

//función que resetea el juego
function resetGame() {
  totalAttempts = 0;
  humanNumber.value = "";
  guessNumber();
}

//función que arranca el juego
function game(event) {
  event.preventDefault();
    guessNumber();
}

guessButton.addEventListener("click", game);
reset.addEventListener("click", resetGame);

