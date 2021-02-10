// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr, index = 0, maxNum = arr[0]) {
	// This function returns the largest number in a given array.
	if (index === arr.length) return maxNum;
	if (arr[index] > maxNum) maxNum = arr[index];

	return findMax(arr, index + 1, maxNum);
}

function factorial(number, result = 1) {
	// This function returns the factorial of a given number.
	if (number === 0) return result;
	result *= number;
	return factorial(number - 1, result);
}

function fibonacci(number, s = [0, 1], counter = 2) {
	// This function returns the Nth number in the fibonacci sequence.
	// https://en.wikipedia.org/wiki/Fibonacci_number
	// For this function, the first two fibonacci numbers are 1 and 1
	if (number < 2) return s[number];

	if (counter === number) return s[0] + s[1];

	s = s.reverse();
	s[1] = s[0] + s[1];

	// Other options
	// temp = [...s];
	// s[0] = temp[1];
	// s[1] = temp[0] + temp[1];

	return fibonacci(number, s, counter + 1);
}

function coinFlips(coins, combo = ["H", "T"], counter = 1) {
	// This function returns an array of all possible outcomes from flipping a coin N times.
	// Input type: Integer
	// For example, coinFlips(2) would return the following:
	// ["HH", "HT", "TH", "TT"]
	// H stands for Heads and T stands for tails
	// Represent the two outcomes of each flip as "H" or "T"

	if (coins === counter) return combo;

	// OPTION 1 - Quicker in performance but can only go up to 13 coins until max call stack size exceeded //
	let index = 0;
	const addTH = (h = [], t = []) => {
		if (index === combo.length) return [...h, ...t];
		h.push(combo[index] + "H");
		t.push(combo[index] + "T");
		index++;
		return addTH(h, t);
	};
	combo = addTH();

	// OPTION 2 - Performance is slower with for loop? But can go higher than 13 coins //
	// const h = [];
	// const t = [];

	// for (let c of combo) {
	// 	h.push(c + "H");
	// 	t.push(c + "T");
	// }

	// combo = [...h, ...t];

	return coinFlips(coins, combo, counter + 1);
}

function letterCombinations(letters, combo = [[...letters]], counter = 1) {
	// This function returns an array of all combinations of the given letters
	// Input type: Array of single characters
	// For example, letterCombinations(["a","b","c"]) would return the following:
	// ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
	if (counter === letters.length) return combo.flat();

	let lastRound = combo[combo.length - 1];
	let newCombo = [];

	for (let c of lastRound) {
		for (let letter of letters) {
			if (c[0] !== letter) newCombo.push(c + letter);
		}
	}

	combo.push(newCombo);

	return letterCombinations(letters, combo, counter + 1);
}

module.exports = {
	findMax,
	factorial,
	fibonacci,
	coinFlips,
	letterCombinations,
};
