// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion
function findMax(arr) {
  let index = 0;
  let largest = arr[index];
  function returnMax() {
    if (index >= arr.length - 1) return largest;
    largest = largest > arr[index + 1] ? largest : arr[index + 1];
    index++;
    return returnMax();
  }
  return returnMax();
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
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["H", "T"]
  // ["HH", "HT", "TH", "TT"]
  // ["HHH", "HHT", "HTH", "HTT", "TTT", "TTH", "THT", "THH"]
  // ["HHHH", "HHHT", "HHTH", "HHTT", "HTHH", "HTHT", "HTTH", "HTTT", "THHH", "THHT", "THTH", "THTT", "TTHH", "TTHT", "TTTH", "TTTT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  const outcomes = [];
  const letters = ['H', 'T'];
  function flip(lettersIndex) {
    if (outcomes.length === 2 ** n) return outcomes;
    // each letter is in the ith position of a string 2 ** n-1 times
    let outcome = [];
    function updateOutcome(lettersIndex) {
      if (outcome.length >= n) return outcome.join('');

      return updateOutcome();
    }
    outcomes.push(flip(0));
    outcomes.push(flip(1));
  }
  return flip();
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
