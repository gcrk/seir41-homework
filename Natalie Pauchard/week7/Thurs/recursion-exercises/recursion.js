// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion
// -Infinity - part of JS. largest =-Infinity

function findMax(array, largest=array[0]{ // works for minus numbers. Or can be =-Infinity
  if (array.length === 0) {
    return largest; // base case
  }

  if (array[0] > largest) {
    largest = array[0]
  }

  const rest = array.slice(1); // everything after array 0

  return findMax(rest, largest);
}

  if (array.length === 1){
    return array[0];
  } else {
    let index = 0
    maxNum = Math.max(array[0])
    index++
    array[index] > maxNum;
    return findMax(array[index + 1]);
  }
    // This function returns the largest number in a given array.
}

function factorial(num){
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
    // This function returns the factorial of a given number.
}

function fibonacci(N){
  if(N < 3) {
    return 1;
  } else {
    return fibonacci( N - 1 ) + fibonacci( N - 2 )
  }

    //So ficonacci(6) would return the 6th fibonacci number which is 8
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips(tosses){
  const combinations = [];

  const flip = function (soFar="") {
    if soFar.length === tosses) {
      combinations.push( soFar ) ; //base case
    } else {
      soFar = "H";
      soFar = "T"
    }
  }
  flip();
  return combinations;
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
