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

// global variables

var words = [
  "spongebob",
  "patrick",
  "gary",
  "pearl",
  "squidward"
];

// empty variables
var lettersInWord = [];
var blanks = 0;
var blankSpace = [];
var wrongGuess = [];

// scores
var win = 0;
var losses = 0;
var remainingGuesses = 12;

// utility functions

function setInnerHtml(id, value) {
  var element = document.getElementById(id);
  element.innerHTML = value;
}

// choose a random word
function randomWordGen () {
  randomWord = words[Math.floor(Math.random() * words.length)];
  console.log(randomWord);
  return randomWord;
  
}


// Start Game

function initializeGame () {
  var randomWord = "";
  document.onkeyup = function (event) {
    var keyCode = event.keyCode;
    var userGuess = event.key;
      if (keyCode === 32) {
        randomWord = randomWordGen()
        blankSpace = [];
        for (var i = 0; i < randomWord.length; i++) {
          blankSpace[i] = "_";
        }
        setInnerHtml("guesses-number", remainingGuesses);
        setInnerHtml("win-number", win);
        setInnerHtml("game-board", " " + blankSpace.join(" "));
        console.log(blankSpace);
      }
      else {
        // don't let guesses go below zero
        remainingGuesses--;
        setInnerHtml("guesses-number", remainingGuesses);
        var isGuessWrong = true;
        for (var i = 0; i < randomWord.length; i++) {
          if (userGuess === randomWord[i]) {
            isGuessWrong = false;
            blankSpace[i] = userGuess;
            setInnerHtml("game-board", " " + blankSpace.join(" "));
          }
        }
        if (isGuessWrong === true) {
          wrongGuess.push(userGuess);
          setInnerHtml("wrong-letters", " " + wrongGuess.join(" "));
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

