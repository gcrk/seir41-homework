// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion
// function findMax(arr) {
//   let index = 0;
//   let largest = arr[index];
//   function returnMax() {
//     if (index >= arr.length - 1) return largest;
//     largest = largest > arr[index + 1] ? largest : arr[index + 1];
//     index++;
//     return returnMax();
//   }
//   return returnMax();
// }

function findMax(array, largest = -Infinity) {
  if (array.length === 0) return largest;
  if (array[0] > largest) largest = array[0];
  const rest = array.slice(1);
  return findMax(rest, largest);
}

function factorial(n) {
  if (n <= 1) return n;
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function coinFlips(n) {
  const combinations = [];
  const flip = function(soFar = '') {
    if (soFar.length === n) {
      combinations.push(soFar);
    } else {
      flip(soFar + 'H');
      flip(soFar + 'T');
    }
  }
  flip();
  return combinations;
}

function letterCombinations() {
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
