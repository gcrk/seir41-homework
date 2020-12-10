// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a, b, c) {
  const d = maxOfTwoNumbers(a, b);
  return maxOfTwoNumbers(d, c);
}

console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(3, 1, 2));
console.log(maxOfThree(3, 2, 1));


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function (letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(letter.toLowerCase());
}

console.log(isVowel("w"));
console.log(isVowel("A"));


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (numbers) {
  let output = 0;
  for (let i = 0; i < numbers.length; i++) {
    output += numbers[i];
  }
  return output;
}

console.log(sumArray([1, 2, 3, 4]));

const multiplyArray = function (numbers) {
  let output = 1;
  for (let i = 0; i < numbers.length; i++) {
    output *= numbers[i];
  }
  return output;
}

console.log(multiplyArray([1, 2, 3, 4]));


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (str) {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
}

console.log(reverseString("true"));


// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[0].length < str[1].length) {
      str.splice(0, 1);
    } else {
      str.splice(1, 1);
    }
  }
  return maxOfTwoNumbers(str[0], str[1]).length;
}

console.log(findLongestWord(["pwwwwwooml", "true", "stufmmmf", "sun", "stsdefefars", "fe"]));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function (str, i) {
  const output = [];
  for (let n = 0; n < str.length; n++) {
    if (str[n].length > i) {
      output.push(str[n]);
    }
  }
  return output;
}

console.log(filterLongWords(["pwwwwwooml", "true", "stufmmmf", "sun", "stsdefefars", "fe"], 5));
