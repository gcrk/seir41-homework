console.log("something to look for!")

// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (a, b) {
    if (a > b) {
      return a;
    }
    else {
      return b;
    }
};
console.log( maxOfTwoNumbers(20, 50) );

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (n1, n2, n3) {
  if (n1 > n2 && n1 > n3 ) {
    return n1;
  }
  if (n2 > n1 && n2 > n3) {
    return n2;
  }
  else {
    return n3;
  }
};
console.log( maxOfThree(5, 7, 3) );

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const characterOf = function (x){
   const input = true;
   const wrongInput = false;
   if (x == "A" || x == "E" || x == "I" || x == "O" || x == "U") {
     return input;
   }
   else {
     return wrongInput;
   }
};
console.log( characterOf("O") );

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function([num1, num2, num3, num4]) {
        const sum = [num1 + num2 + num3 + num4];
        return sum;
};
console.log( sumArray([1, 2, 3, 4]) );

const multiplyArray = function([u1, u2, u3, u4]) {
  const multiples = [u1*u2*u3*u4];
   return multiples;
};
console.log ( multiplyArray([1, 2, 3, 4]) );
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (theString) {
  const stringToReverse = theString;
  const theReverse = stringToReverse.split("").reverse().join("");
  return theReverse;
};
console.log( reverseString("broccoli") );

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function(arrayOfWords) {
  const wordsToCount = arrayOfWords.split(' ');
  let counted = 0;
  for (let i = 0; i < wordsToCount.length; i++ ) {
    if (wordsToCount[i].length > counted) {
      counted = wordsToCount[i].length;
    }
  }
  return counted;
};
console.log( findLongestWord("Ethiopia is in a war") );
             //or the code below
// function findLongestWordLength(str) {
//     let words = str.split(' ');
//     let maxLength = 0;
//
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//       }
//     }
//     return maxLength;
//   }
//   console.log( findLongestWordLength ("ethiopia is at war") );

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const filterLongWords = function(arrayOfStrings, i) {

}
