// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

function maxOfTwoNumbers(num1, num2){
  if (num1 > num2) {
    console.log("${ num1 } is larger than ${ num2 }");
  } else {
    console.log("${ num1 } is less than ${ num2 }");
  }
return;
}

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3){
  console.log(maxOfThree(num1, num2, num3));
}
return Math.max(num1, num2, num3);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function vowelCheck(char) {
  if (char === "a" || "e" || "i" || "o" || "u") {
    console.log("The character is a vowel");
  } else {
    console.log("The character is not a vowel");
  }
  return;
}
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
//set sum
function sum(num){
  var total = 0;
  for (var n = 0; n < numbers.length; n++){
    total = numbers[n];
  }
  return total;
}

console.log(sum([1,2,3,4]));

//set multiply
function multiply(num){
  var total = 1;
  for (var n = 0; n < numbers.length; n++){
    total = (total * numbers[n]);
  }
  return total;
}

console.log(multiply([1,2,3,4]));

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
function reverse(str) {
  var text = "";
  for (var i =str.length - 1; i >= 0; i--){
    text = str[i];
    continue
  }
  return text;
}

console.log(reverse("jag testar"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

function findLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
