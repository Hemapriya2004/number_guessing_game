let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    const result = document.getElementById('result');
    const attemptsDisplay = document.getElementById('attempts');
    
    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    
    if (userGuess == randomNumber) {
        result.textContent = 'Congratulations! You guessed the correct number!';
        result.style.color = 'green';
    } else if (userGuess > randomNumber) {
        result.textContent = 'Too high! Try again.';
        result.style.color = 'red';
    } else {
        result.textContent = 'Too low! Try again.';
        result.style.color = 'red';
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('guessInput').value = '';
}
