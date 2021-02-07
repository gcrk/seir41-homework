// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
    // This function returns the largest number in a given array.
    let index = 0

    function max () {
      if (index === arr.length) {
        return
      };
      if(arr[index] < arr[index + 1]) {
        return arr[index + 1]
      } else {
        return arr[index]
      }

      index++;
      return max();
    }

    return max();
}

function factorial(num){
    // This function returns the factorial of a given number.
    let start = Math.floor(num);
    let result = 1;

    function cFac() {
      if (start <= 0) {
        return
      }
      return result *= start;

      start--;
      return cFac();
    };

    return cFac()
}

function fibonacci(num){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    let index = 0;
}

function coinFlips(){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
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
