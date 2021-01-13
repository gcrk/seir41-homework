console.log ("hi dude")


//homework for the 9/12/20

const maxOfTwoNumbers = function(a , b){
  if (a > b) {
  return (a);
}else if (b > a) {
  return (b);
}
}
console.log(maxOfTwoNumbers(22,21));

//max of three
const maxOfThree = function (a , b , c) {
  if (a > b && a > c ) {
  return (a);
} else if (b > a && b > c) {
  return (b);
} else {
  return (c);
}
}
console.log(maxOfThree(999,10,3));

//3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// THIS IS THE CODE ALONG I DID WITH STACEY I BELIEVE
// const vowelOrNot = function (letter) {
//   let vowelString = "aeiou";
//   let output = "";
//   for (i = 0; i < vowelString.length; i++) {
//     if (letter === vowelString[i]) {
//       output = true;
//     }
//   }
//
// };
//
// vowelOrNot("a")
const isaVowel = function (letter){
  let trueVowels = "aeiou";
  for (i = 0; i < trueVowels.length; i++) {
    if (letter === trueVowels[i] ) {
      return true;
     } else {
       return false;
     }
  }
}

console.log(isaVowel("e"))

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

// const sumArray = function (a,b,c,d) {
//   const input = [a,b,c,d];
//   return (input[0]+(input[1])+(input[2])+(input[3]));
// } this was my first attempt

const addArray = function (array){
  let sum = 0;

  for (i = 0; i < array.length;i++){
    sum = sum + array[i]
  }
  return sum;
  //console.log(sum)
}
console.log(addArray([1,2,3,4]));



//FIRST ATTEMPT
// const multiplyArray = function (a,b,c,d) {
//   const input = [a,b,c,d];
//   return (input[0]*(input[1])*(input[2])*(input[3]));
// }
//SECOND ATTEMPT!
const multiplyArray = function (mArray) {
  let sum = 1;

  for (i = 0; i < mArray.length; i++){
  sum = sum * mArray[i];
  }
  return sum;
}

console.log(multiplyArray([10,10,10,10]));

// ANOTHER CRACK AT IT

const multiplier = function(theArray){
  let sum = 1;
  for (i = 0; i < theArray.length; i++){
    sum = sum * theArray[i];
  }
  return sum
}

console.log(multiplier([2,2,2,0.5])); //did it correcly without looking


// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".


const reverseString = function (inputWord) {
  return(inputWord);
}
//I wanted to be able to pass in any word to the input word argument but when i do so it says not defined...help???
