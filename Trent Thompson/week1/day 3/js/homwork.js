console.log ("hi")


//homework for the 9/12/20

const maxOfTwoNumbers = function(a , b){
  if (a > b) {
  return (a);
}else if (b > a) {
  return (b);
}
}
maxOfTwoNumbers(1 , 3); //this doesnt call the funtion in the console.??? but i am able to do it manually from the console????

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
maxOfThree(1,2,3) //this doesnt call the funtion in the console.??? but i am able to do it manually from the console????

//3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowel = function (vowel) {
  console.log ("true");
};

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (a,b,c,d) {
  const input = [a,b,c,d];
  return (input[0]+(input[1])+(input[2])+(input[3]));
}

const multiplyArray = function (a,b,c,d) {
  const input = [a,b,c,d];
  return (input[0]*(input[1])*(input[2])*(input[3]));
}

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".


const reverseString = function (inputWord) {
  return(inputWord);
}
//I wanted to be able to pass in any word to the input word argument but when i do so it says not defined...help???
