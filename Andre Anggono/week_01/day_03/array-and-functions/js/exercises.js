// Max of Two Numbers
const maxOfTwoNumbers = function (num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
};

// Max of Three
const maxOfThree = function (num1, num2, num3) {
	// if (num1 > num2 && num1 > num3) {
	// 	return num1;
	// } else if (num2 > num1 && num2 > num3) {
	// 	return num2;
	// } else {
	// 	return num3;
	// }
	return maxOfTwoNumbers(maxOfTwoNumbers(num1, num2), maxOfTwoNumbers(num2, num3));
};

// Is it a Vowel?
const isVowel = function (c) {
	const vowels = ["a", "e", "i", "o", "u"];

	for (let i = 0; i < vowels.length; i++) {
		if (c === vowels[i]) {
			return true;
		}
	}

	return false;
};

// sumArray and multiplyArray
const sumArray = function (arr) {
	let result = arr[0];

	for (let i = 1; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
};

const multiplyArray = function (arr) {
	let result = arr[0];

	for (let i = 0; i < arr.length; i++) {
		result *= arr[i];
	}
	return result;
};

// Reverse String
const reverseString = function (string) {
	let result = "";

	for (let i = string.length - 1; i >= 0; i--) {
		result += string[i];
	}
	return result;
};

// Find Longest Word
const findLongestWord = function (arr) {
	let result = 0;

	// Iterate through the array arr
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > result) {
			// keeps track of the length of the longest word in the array arr
			// only stores the value if the length of the current index is greater than previously iterated.
			result = arr[i].length;
		}
	}
	return result;
};

// Filter Long Words
const filterLongWords = function (arr, num) {
	// create a new array to store words in arr that are longer than num || the result
	const newArray = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > num) {
			// if the length of the word at i'th index of arr is greater than num, store it in the newArray
			newArray.push(arr[i]);
		}
	}

	return newArray;
};
