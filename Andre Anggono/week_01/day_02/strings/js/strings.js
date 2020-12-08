// Strings
// DrEvil Function
const drEvil = function (amount) {
	let result = `${amount} dollars`;

	if (amount === 1000000) {
		result += " (pinky)";
	}

	return result;
};

// MixUp Function
const mixUp = function (s1, s2) {
	// Take the first two characters from s2 args, concatenate with s1 args starting from index 2 of the string.
	const firstMixedWord = s2.substr(0, 2) + s1.substr(2);

	// Take the first two characters from s1 args, concatenate with s2 args starting from index 2 of the string.
	const secondMixedWord = s1.substr(0, 2) + s2.substr(2);
	return `${firstMixedWord} ${secondMixedWord}`;
};

// FixStart Function
const fixStart = function (string) {
	// Initialising the result variable with the first character of the string argument as this will not be affected / formatted.
	let result = string[0];

	// To accomodate for single character input as the argument. Return the single character wihtout processing it.
	if (string.length > 1) {
		for (let i = 1; i < string.length; i++) {
			// Comparing character of string args at i'th location starting from index 1 with value from index 0.
			// If matches, add * to the result variable. Otherwise add the character of string args at i'th location.
			if (string[i] === string[0]) {
				result += "*";
			} else {
				result += string[i];
			}
		}
	}

	return result;
};

// Verbing Function
const verbing = function (verb) {
	let result = verb;

	// To ensure argument entered has atleast 3 characters. Otherwise return the argument unchanged.
	if (verb.length >= 3) {
		// If verb argument ends in "ing", add "ly" to it
		if (verb.substr(-3) === "ing") {
			result += "ly";
		} else {
			// Otherwise add "ing"
			result += "ing";
		}
	}

	return result;
};

// Not Bad Function
const notBad = function (string) {
	// Find the index where the word "not" starts
	const indexOfNot = string.indexOf("not");

	// Find the index where the word "bad" starts
	const indexOfBad = string.indexOf("bad");
	let result = string;

	// -1 value suggests that the word searched for in the string above is not present
	// This statement makes sure that they both exists and the order of "not" should come before "bad"
	if (indexOfNot !== -1 && indexOfBad !== -1 && indexOfBad > indexOfNot) {
		result = `${string.substr(0, indexOfNot)}good${string.substr(indexOfBad + 3)}`;
	}

	return result;
};
