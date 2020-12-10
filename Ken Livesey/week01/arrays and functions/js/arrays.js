console.log("Hello world");
/*
# Array and Functions Bonus Material

1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
*/

// const maxOfTwoNumbers = function (a, b) {
// 	if  ( a > b ) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// };
//
// console.log(`The greater number of 5 an 10 is ${ maxOfTwoNumbers(5,10) }.`);


/*
2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
*/

// const maxOfThreeNumbers = function(num1, num2, num3) {
//   return Math.max(num1, num2, num3);
// }
// console.log(`The greatest of these 3 numbers is ${maxOfThreeNumbers(450, 74, 68)}`);

/*
const maxOfThree = function (num1, num2, num3) {
  maxVal = 0;
  if (num1 > num2) {
    maxVal = num1;
  } else {
    maxVal = num2;
  } if (num3 > maxVal) {
    maxVal = z;
  }
  return maxVal;
}

console.log(`The greatest of the three numbers is ${maxOfThree(1,0,1)}`);
console.log(`The greatest of the three numbers is ${maxOfThree(0,-10,-20)}`);
console.log(`The greatest of ${num1}, ${num2} and ${num3} is ${maxOfThree(1000,510,440)}`);
*/


/*
3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
/*
const charCheck = function (z) {
    if ( z == "a" || z == "e" || z == "i" || z == "o" || z == "u") {
    return true;
  }
    return false;
}

console.log(`${ charCheck("e") }`);
*/

/*
4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
*/

/*
//this function is sumArray, it adds together all of the numbers in an array
const sumArray = function(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
}
console.log( sumArray([1, 2, 3, 4]) );
*/

/*
//this function multiplyArray, multiplies all of the numbers in an array
const multiplyArray = function(numArray) {
  let sum = 1;
  for (let i = 0; i < numArray.length; i++) {
    sum *= numArray[i];
  }
  return sum;
}
console.log( multiplyArray( [1, 2, 3, 4] ) );
*/


/*
## Bonus

5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/
/*
const reverseString = function(str) {
  let newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString
}
//reverseString("hello");

console.log(reverseString("hello"));
*/

/*
6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
*/

/*
const findLongestWord = function (str) {
  let strSplit = str.split(' ');
  let longestWord = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
      }
  }
  return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
*/


/*
7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
*/

const wordArray = ["Street", "art", "tote", "bag", "enamel", "pin", "humblebrag", "8-bit", "brunch"]

const filterLongWords = function (arr, num) {
 let result;
 for (i = 0; i < arr.length; i++) {
   if (arr[i].length > num) {
     result = arr[i];
   } else {
     result = "No words are longer than that."
   }
 }
 return result;
}

console.log(filterLongWords(wordArray, 3));
