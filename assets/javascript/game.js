let wins = 0;
let losses = 0;
let listOfHorseWords = ['spurs', 'whiney', 'trot', 'canter', 'saddle', 'bit', 'bridle', 'foal', 'filly'];
let lettersGuess = [];
let guessesRemaining = 12;
let gameInProgress = false; //needed?
let currentGameString = "";
let currentWordToGuess = "";


function resetGame() {
    let userText = document.getElementById("user-text");
    userText.textContent = "Hit Any Key To Start";
    currentGameString = "";
    currentWordToGuess = "";
    gameInProgress = false;
    guessesRemaining = 12;
}


// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function (event) {
    let userText = document.getElementById("user-text");
    let gameStatus = document.getElementById("game-status");
    let winsId = document.getElementById("wins");
    let lossesId = document.getElementById("losses");
    let guessesId = document.getElementById("guesses");

    //if the game is just starting
    if (gameInProgress === false) {
        gameInProgress = true;
        //  select a random word from list above
        currentWordToGuess = listOfHorseWords[Math.floor(Math.random() * listOfHorseWords.length)];
        console.log(currentWordToGuess);
        //  set currentGameString to new word in dash form
        for (var i = 0; i < currentWordToGuess.length; i++) {
            currentGameString += '_ ';
        }
        //  print a new word in dash form

        userText.textContent = currentGameString;


        gameStatus.textContent = "Game In Progress";


    } // the game is in progress
    else if (guessesRemaining !== 0) {
        // process this key entry as a guess and update all stats
        // if the currentWordToGuess contains the typed letter, then update the currentGameString
        let newCurrentString = "";
        if (currentWordToGuess.indexOf(event.key) > -1) {
            for (let i = 0; i < currentWordToGuess.length; i++) {
                if (currentWordToGuess[i] === event.key) {
                    currentGameString = currentGameString.substring(0, i * 2) + event.key + currentGameString.substring(i * 2 + 1);
                }
            }
            userText.textContent = currentGameString;

            if (!currentGameString.includes('_')) {
                wins++;
                winsId.textContent = "Wins: " + wins;
                guessesRemaining = 0;
                gameInProgress = false;
                gameStatus.textContent = "You WIN!!!";
                resetGame();
            }

        }
        else //user guessed wrong
        {
            // reduce number of guesses remaining
            guessesRemaining--;

            // else output some smartass response for a wrong guess
            userText.textContent = "You missed try again!";
            setTimeout(function() {
                userText.textContent = currentGameString;
            }, 2000);
            guessesId.textContent = "Guesses: " + guessesRemaining;

        }
    }
    else //the game is in progress but we've ran out of guesses
    {
        gameStatus.textContent = "GAME OVER! The word was " + currentWordToGuess;
        losses++;
        lossesId.textContent = "Losses: " + losses;
        resetGame();
    }
};


