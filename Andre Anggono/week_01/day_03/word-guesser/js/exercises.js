// The Word Guesser
const word = ["C", "A", "M", "E", "L"];
const guessedLetters = ["_", "_", "_", "_", "_"];

console.log("Guess the word");
console.log(guessedLetters);

const guessLetter = function (c) {
	for (let i = 0; i < word.length; i++) {
		if (c.toUpperCase() === word[i]) {
			guessedLetters[i] = word[i];
			console.log("Congrats! You've found a new letter.");
		}
	}
	console.log(guessedLetters);

	if (word.toString() === guessedLetters.toString()) {
		console.log("Congrats! You have won the game!");
	}
};
