// The Word Guesser
const word = ["C", "A", "M", "E", "L"];
const guessedLetters = ["_", "_", "_", "_", "_"];
const guesses = [];
let hangman = 0;
let reward = 0;

const guessLetter = function (c) {
	// stores a random reward between 0 and 100
	let randomReward = Math.floor(Math.random() * 100);
	let guessedFlag = false;

	// check if the char c has been guessed before. If so, do nothing.
	// function checkIfGuessed will return a boolean value.
	if (!checkIfGuessed(c)) {
		// logs new character guesses
		guesses.push(c.toUpperCase());

		for (let i = 0; i < word.length; i++) {
			// checking if the args char c is in the word array
			if (c.toUpperCase() === word[i]) {
				// The following tracks Successful guesses that prints to the screen
				// Tracks and updates rewards pool as well
				guessedLetters[i] = word[i];
				guessedFlag = true;
				reward += randomReward;
				console.log("Congrats! You've found a new letter.");
				console.log(`You have earned $${randomReward}`);
			}
		}

		// If the guess is incorrect: deduct reward pool with the random reward value.
		// If it goes to negative territory, make reward pool to 0.
		if (!guessedFlag) {
			if (reward > randomReward) {
				reward -= randomReward;
			} else {
				reward = 0;
			}

			// logs hangman value
			hangman++;
			console.log(`Sorry, there is no ${c.toUpperCase()} in this word.`);
			console.log(`You have lost $${randomReward} from your reward pool!`);
		}
	}
	printToScreen();

	// Check if the player has guessed all letters correctly and have won
	if (word.toString() === guessedLetters.toString()) {
		console.log("Congrats! You have won the game!");
		console.log(`Your final reward amount: $${reward}`);
	}

	// Check if the player has guessed incorrectly for 6x and have lost
	if (hangman === 6) {
		console.log("You have lost the game!");
		printHangman();
	}
};

// function prints out the board and relevant statistical values like Reward pool, Guessed Letters and Hangman Counter
const printToScreen = function () {
	let output = "";
	let output2 = "";

	for (let i = 0; i < guessedLetters.length; i++) {
		output += guessedLetters[i] + " ";
	}

	for (let i = 0; i < guesses.length; i++) {
		output2 += guesses[i] + " ";
	}

	console.log(output);
	console.log(`Reward: $${reward}`);
	console.log(`Letters you've guessed: ${output2}`);
	console.log(`Hangman Counter: ${hangman}`);
	console.log("");
};

// function checks the user's guesses whether it's been tried before. Returns a boolean value.
const checkIfGuessed = function (c) {
	for (let i = 0; i < guesses.length; i++) {
		if (c.toUpperCase() === guesses[i]) {
			return true;
		}
	}

	return false;
};

// function prints hangman to console
const printHangman = function () {
	console.log("________");
	console.log("|      |");
	console.log("|    (x x)");
	console.log("|    -| |-");
	console.log("|     - -");
	console.log("|");
	console.log("______");
};

console.log("Guess the word");
printToScreen();
