// # Array and Functions Bonus Material
//


// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (n1, n2) {
  if (n1 > n2) {
    return n1
  } else if (n2 > n1) {
    return n2
  };
};

console.log(maxOfTwoNumbers(2, 4));


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1
  } else if (n2 > n1 && n2 > n3) {
    return n2
  } else if (n3 > n1 && n3 > n2) {
    return n3
  };
};

console.log(maxOfThree(1, 2, 3));

//Could use a Math.max method


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelChecker = function (character) {
  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    return true;
  } else {
    return false;
  };
};

console.log(vowelChecker('l'));

// Could also make an array and check if the string is in an array.
// could add a line that makes inputs to lowercase




// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
//


//Probably a better way to do this...
var numArray = [1, 2, 3, 4, 5]

const sumArray = function () {
  summed = numArray[0] + numArray[1] + numArray[2] + numArray[3] + numArray[4];
  return summed;
};

console.log(sumArray());

const multiplyArray = function () {
  multiplied = numArray[0] * numArray[1] * numArray[2] * numArray[3] * numArray[4];
  return multiplied;
};

console.log(multiplyArray());


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
