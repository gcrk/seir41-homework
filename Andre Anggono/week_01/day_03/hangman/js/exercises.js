// The Word Guesser
const word = ["C", "A", "M", "E", "L"];
const guessedLetters = ["_", "_", "_", "_", "_"];
const guesses = [];
let hangman = 0;
let reward = 0;

const guessLetter = function (c) {
	let randomReward = Math.floor(Math.random() * 100);
	let guessedFlag = false;

	if (!checkIfGuessed(c)) {
		guesses.push(c.toUpperCase());
		for (let i = 0; i < word.length; i++) {
			if (c.toUpperCase() === word[i]) {
				guessedLetters[i] = word[i];
				guessedFlag = true;
				reward += randomReward;
				console.log("Congrats! You've found a new letter.");
				console.log(`You have earned $${randomReward}`);
			}
		}

		if (!guessedFlag) {
			if (reward > randomReward) {
				reward -= randomReward;
			} else {
				reward = 0;
			}

			hangman++;
			console.log(`Sorry, there is no ${c.toUpperCase()} in this word.`);
			console.log(`You have lost $${randomReward} from your reward pool!`);
		}
	}
	printToScreen();

	if (word.toString() === guessedLetters.toString()) {
		console.log("Congrats! You have won the game!");
		console.log(`Your final reward amount: $${reward}`);
	}

	if (hangman === 6) {
		console.log("You have lost the game!");
		printHangman();
	}
};

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

const checkIfGuessed = function (c) {
	for (let i = 0; i < guesses.length; i++) {
		if (c.toUpperCase() === guesses[i]) {
			return true;
		}
	}

	return false;
};

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
