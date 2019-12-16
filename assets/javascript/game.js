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
var randomWord = "";
var lettersInWord = [];
var blanks = 0;
var blankSpace = [];
var wrongGuess = [];

// scores
var win = 0;
var losses = 0;
var remaingingGuesses = 12;

// choose a random word

  randomWord = words[Math.floor(Math.random() * words.length)];
  console.log(randomWord);

  //display blank _ for letters of word

  for (var i = 0; i < randomWord.length; i++) {
    blankSpace[i] = "_";
  }

  console.log(blankSpace);
  document.getElementById("game-board").innerHTML = " " + blankSpace.join(" "); 

// Start Game

document.onkeyup = function(event) {

}

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

