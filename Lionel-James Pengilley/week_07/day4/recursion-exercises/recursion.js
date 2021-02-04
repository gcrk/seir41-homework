// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array, index = 0, max = array[index]) {
  if (index === array.length) {
    return max;
  } else {
    if (array[index] > max) {
      max = array[index];
      return findMax(array, index + 1, max);
    } else {
      return findMax(array, index + 1, max);
    };
  };
};


function factorial(number){
    let product = number;
    // This function returns the factorial of a given number.
    const factorialEq = function () {
      if (number === 1) {
        return product;
      }
      product = product * (number - 1);
      number = number - 1;
      return factorialEq();
    };
    return factorialEq();
};

function fibonacci(num){ // I Do not understand line 38. please explain.
  if(num === 1)
    return 1;
  if (num === 2)
    return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};


function coinFlips(rounds){
  let results = [];
  const headsTailsArr = ["H", "T"];
  const flip = function (result = ""){
    if (result.length === rounds) {
      return results.push(result);
    };
    headsTailsArr.forEach(function (option) {
      flip(result + option);
    });
  };

  flip();

  return results //?
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
};

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
