// Step 1: Pick a word
//         Vairable known from beginning are:
//              Array of words
//              Set wins to 0
//              Set remaining guesses to 12
// 
// Step 2: Start the game        
// Step 3: Display blank spaces for word
// Step 4: Guess a letter (on key up)
// Step 5: If letter is wrong - display in wrong box.
//         If letter is right, replace blank space with letter
//         Reduce the number of guesses by 1
// Step 6: If whole word is guessed - show picture
//         If number of guesses gets to 0 - show you lose


// TIME TO CODE

// Global variables

var words = [
  "spongebob",
  "patrick",
  "gary",
  "pearl",
  "squidward"
];

// Empty variables
var lettersInWord = [];
var blanks = 0;
var blankSpace = [];
var wrongGuess = [];

// Scores
var win = 0;
var losses = 0;
var remainingGuesses = 12;

// Utility functions

function setInnerHtml(id, value) {
  var element = document.getElementById(id);
  element.innerHTML = value;
}

// Choose a random word
function randomWordGen() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  console.log(randomWord);
  return randomWord;

}


// Start Game

function initializeGame() {
  var randomWord = "";
  document.onkeyup = function (event) {
    var keyCode = event.keyCode;
    var userGuess = event.key;
    // Space bar to start game
    if (keyCode === 32) {
      // Generate random word
      randomWord = randomWordGen()
      remainingGuesses = 12;
      wrongGuess = [];
      // Black spaces to replace letters
      blankSpace = [];
      for (var i = 0; i < randomWord.length; i++) {
        blankSpace[i] = "_";
      }
      // Show variables on HTML page
      setInnerHtml("guesses-number", remainingGuesses);
      setInnerHtml("win-number", win);
      setInnerHtml("game-board", " " + blankSpace.join(" "));
      setInnerHtml("wrong-letters", wrongGuess);
      console.log(blankSpace);
    }
    // Start guesses
    else {
      setInnerHtml("guesses-number", remainingGuesses);
      // If the guess is correct
      var isGameWon = false;
      var isGuessWrong = true;
      for (var i = 0; i < randomWord.length; i++) {
        if (userGuess === randomWord[i]) {
          isGameWon = true;
          isGuessWrong = false;
          blankSpace[i] = userGuess;
          setInnerHtml("game-board", " " + blankSpace.join(" "));
          for (var j = 0; j < blankSpace.length; j++) {
            if (blankSpace[j] === "_") {
              isGameWon = false;
            }
          }
          if (isGameWon === true) {
            win++;
            alert("you are a winner!");
          }

        }
      }
      // If the guess is incorrect
      if (isGuessWrong === true) {
        if (remainingGuesses > 0) {
          remainingGuesses--;
          setInnerHtml("guesses-number", remainingGuesses);
          wrongGuess.push(userGuess);
          setInnerHtml("wrong-letters", " " + wrongGuess.join(" "));
        }
        if (remainingGuesses === 0) {
          alert("you are a loser");

          // Restart game
          initializeGame();
        }
      }

    }
  }
}


initializeGame()

  // Check Answers





// // check answers

// function checkLetters(letter) {
//   for (var i = 0; i < blanks; i++) {
//     if (randomWord[i] === letter) {
//       lettersInWord = true;
//     }
//   }

//   if (lettersInWord) {
//     for (var i = 0; i < blanks; i++) {
//       if (randomWord[i] === letter) {
//         blanksAndCorrect[i] = letter;
//       }
//     }
//   }

//   else {
//     wrongGuess.push(letter);
//     remaingingGuesses --;
//   }
// }

// // if the player wins

// function complete () {



// // generate a random word from the array words

// var randomWord = words[Math.floor(Math.random() * words.length)];

// // replace letters from randomWord with _

//   for (i = 0; i < randomWord.length; i++) {
//     randomWord[i] = "_";
//   }
//   document.getElementById("game-board").innerHTML = randomWord.join(" ");

