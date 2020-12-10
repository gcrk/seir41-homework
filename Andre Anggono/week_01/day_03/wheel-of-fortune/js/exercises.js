// The Word Guesser
const word = ["C", "A", "M", "E", "L"];
const guessedLetters = ["_", "_", "_", "_", "_"];
let reward = 0;

const guessLetter = function (c) {
	let randomReward = Math.floor(Math.random() * 100);
	let guessedFlag = false;

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
		reward -= randomReward;
		console.log(`Sorry, there is no ${c.toUpperCase()} in this word.`);
		console.log(`You have lost $${randomReward} from your reward pool!`);
	}

	printToScreen();

	if (word.toString() === guessedLetters.toString()) {
		console.log("Congrats! You have won the game!");
		console.log(`Your final reward amount: $${reward}`);
	}
};

const printToScreen = function () {
	let output = "";

	for (let i = 0; i < guessedLetters.length; i++) {
		output += guessedLetters[i] + " ";
	}
	console.log(output);
	console.log(`Reward: $${reward}`);
	console.log("");
};

console.log("Guess the word");
printToScreen();
