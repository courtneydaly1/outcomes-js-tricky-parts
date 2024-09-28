function guessingGame() {
    const ANS = Math.floor(Math.random() * 100);
    let gameOver = false;
    let guesses = 0;

    return function guess(num){
        if (gameOver) return "The game is over, you WON!";
        guesses++;
        if(num ===ANS){
            gameOver = true;
            const guess = guesses === 1 ? "guess" : "guesses";
            return  `You WIN! You found ${num} in ${guesses} ${guess}.`;
        };
        if (num < ANS) return `${num} is too low!`;
        if (num > ANS) return `${num} is too high!`;
    }

}

module.exports = { guessingGame };
