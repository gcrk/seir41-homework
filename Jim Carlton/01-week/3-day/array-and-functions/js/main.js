// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

// DEFINE THE FUNCTION
const maxOfTwoNumbers = function (num1, num2) {
  let result; // set up results variable

// CONDITIONAL IF-THEN-ELSE
  if (num1 > num2){ // if first number is greater than the second, return the first number
    result = num1;
  }
  else { // or print number 2 if it is bigger if the above isn't true
    result = num2;
  }
    return result;
}

// TEST THAT PUPPY!
console.log(maxOfTwoNumbers(39,11))

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

// DEFINE THE FUNCTION
const maxOfThree = function (n1, n2, n3){
  let result; // set up results variable

// CONDITIONAL IF-THEN-ELSE STATEMENTS
  if (n1 > n2 && n1 > n3) { // if n1 is great than n2 AND n3 values
    result = n1;
  }
  if (n2 > n1 && n2 > n3) { // if n2 is great than n1 AND n3 values
    result = n2;
  }
  if (n3 > n1 && n3 > n2) { // if n3 is great than n1 AND n2 values
    result = n3;
  }
    return result;
}

// TEST THAT PUPPY!
console.log(maxOfThree(32,711,112));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// DEFINE THE FUNCTION
const returnVowel = function (char) {
  let result; // set up results variable

// CONDITIONAL IF-THEN-ELSE STATEMENTS
  if (['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) >= 0){ // use array and indexOf method to list vowels and also force it to be lower case in case a capitalised letter is input
    result = true;
  }
  else { // all other characters return false
    result = false;
  }
  return result;
}

// TEST THAT PUPPY!
console.log(returnVowel("E"));


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

// `sumArray` FUNCTION
const sumArray = function (array){
  const reducer = (accumulator, currentValue) => accumulator + currentValue; // define and use reducer function to define the pattern of adding each array value
  let result = array.reduce(reducer); // use reduce method (not function) to execute the function
  return result; // store the result
}

// TEST THAT PUPPY!
console.log(sumArray([1,2,3,4]));

// `multiplyArray` FUNCTION
const multiplyArray = function (array) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue; // define and use reducer function to define the pattern of multiplying each array value
  let result = array.reduce(reducer); // use reduce method (not function) to execute the reducer function via the reduce array method
  return result; // store the result
}

// TEST THAT PUPPY!
console.log(multiplyArray([1,2,3,4]));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

// Define the function `reverseString`
const reverseString = function (string){
  let splitString = string.split(""); // convert the string into an array with letter split into a separate element
  let reverseArray = splitString.reverse(); // reverse the array
  let joinArray = reverseArray.join(""); // join (concatenate) the array and produce a string
  return joinArray; // store result
}

// TEST THAT PUPPY!
console.log(reverseString("jag testar"));

// ALT METHOD, CHAINING METHODS INTO 1 LINE

const reverseStringAlt = function (string){
  return string.split("").reverse().join("");
}

// TEST THAT PUPPY!
console.log(reverseStringAlt("jag testar"));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function (array) {
  return array.reduce((a, b) => a.length < b.length ? b : a, "");
}

console.log(findLongestWord(["dope", "super", "basement"]));

// FOR LOOP METHOD

const findLongestWord2 = function (array) {
  for (i = 0; i < array.length; i++) {
      console.log(array[i].length);
  }
}

console.log(findLongestWord2(["dope", "super", "basement"]));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
