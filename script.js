// Words for the game
var words = ["hangman", "javascript", "programming", "coding", "computer"];

// Randomly select a word
var word = words[Math.floor(Math.random() * words.length)];

// Array to store correct guesses
var correctGuesses = [];

// Array to store wrong guesses
var wrongGuesses = [];

// Display underscores for each letter in the word
function displayWord() {
  var wordDisplay = "";
  for (var i = 0; i < word.length; i++) {
    if (correctGuesses.indexOf(word[i]) !== -1) {
      wordDisplay += word[i];
    } else {
      wordDisplay += "_";
    }
  }
  document.getElementById("word").innerText = wordDisplay;
}

// Display alphabet buttons
function displayAlphabet() {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var alphabetDisplay = "";
  for (var i = 0; i < alphabet.length; i++) {
    alphabetDisplay += "<button onclick='guessLetter(\"" + alphabet[i] + "\")'>" + alphabet[i] + "</button>";
  }
  document.getElementById("alphabet").innerHTML = alphabetDisplay;
}

// Process the guessed letter
function guessLetter(letter) {
  if (word.indexOf(letter) !== -1) {
    correctGuesses.push(letter);
  } else {
    wrongGuesses.push(letter);
  }
  displayWord();
  checkGameStatus();
}

// Check if the game is won or lost
function checkGameStatus() {
  if (wrongGuesses.length === 6) {
    alert("Game Over! You lost.");
    resetGame();
  } else if (word.split('').every(letter => correctGuesses.includes(letter))) {
    alert("Congratulations! You won.");
    resetGame();
  }
}

// Reset the game
function resetGame() {
  word = words[Math.floor(Math.random() * words.length)];
  correctGuesses = [];
  wrongGuesses = [];
  displayWord();
}

// Initialize the game
displayWord();
displayAlphabet();