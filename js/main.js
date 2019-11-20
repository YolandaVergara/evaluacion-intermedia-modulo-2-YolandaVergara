const randomNumber = Math.ceil(Math.random() * 100);

console.log(randomNumber);

const guessButton = document.querySelector('.js-button');

function guessNumber() {
    const humanNumber = document.querySelector('.js-human-number');
    console.logitg(humanNumber.value)

    if (humanNumber.value < 0 || humanNumber.value > 100) {
        document.querySelector('.result').innerHTML = 'Tienes que poner un número entre 1 y 100';
    } else if (randomNumber > humanNumber.value) {
        document.querySelector('.result').innerHTML = 'Tu número es más alto';
    } else if (randomNumber < humanNumber.value) {
        document.querySelector('.result').innerHTML = 'Tu número es más bajo';
    } else {
        document.querySelector('.result').innerHTML = 'Has acertado!';
    }
}

function numAttempts() {

}


guessButton.addEventListener('click', guessNumber);