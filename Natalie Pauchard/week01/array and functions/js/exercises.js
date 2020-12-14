console.log("wed_HW");
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(num1, num2) {
  let output = "";

  if (num1 > num2) {
  output += num1;
}
  if (num2 > num1) {
  output += num2;
}

return output;
};

console.log(maxOfTwoNumbers(34, 67));
console.log(maxOfTwoNumbers(88, 19));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(num1, num2, num3) {
  let output = "";

  if (num1 > (num2 && num3)) {
  output += num1;
}
  else if (num2 > (num1 && num3)) {
  output += num2;

} else {
  output += num3;
}

return output;
};

console.log(maxOfThree(777, 22, 679));

//Joel's solultion:

const maxOfThreeV2 = function (a, b, c) {
  return maxOfTwoV2( maxOfTwo(a, b), maxOfTwo(b, c) );
};


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


// HINTS - create an all purpose array and then ... check Thurs Morning 10 Dec video


// const character = function(x) {
//   let output = "";
//
//   if (x == "a" || "e" || "i" || "o" || "u") {
//     output = true;
//   }
//
//   if (x !== "a" || "e" || "i" || "o" || "u") {
//     output = false;
//   }
//
// return output;
// };



// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = [1, 2, 3, 4];
const multiplyArray = [1, 2, 3, 4];
