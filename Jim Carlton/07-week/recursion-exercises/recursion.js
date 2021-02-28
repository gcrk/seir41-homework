// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array, largest=-Infinity){
    // set a global variable to store the array number we're reviewing each cycle
    // store the result if the number is higher
    // set a base case which would be: stop the recursion when we've reached the end of the array

    // let count = 0 + seq;
    // highestNum;
    //
    // if (count === array.length - 1) {
    //   return highestNum;
    // }
    //
    // else (array[count] > highestNum) {
    //   highestNum = array[count];
    // }
    //
    // return findMax(array, seq + 1, highestNum);

    if (array.length === 0) {
      return largest; // base case
    }

    if (array[0] > largest) {
      largest = array[0];
    }

    const rest = array.slice(1); // everything after array[0]

    return findMax(rest, largest);
}

// -------------------------------

function factorial(num){
    if (num === 0) {
      return 1;
    }
    else {
      return num * factorial(num - 1)
    };
}

// --------------------------------

function fibonacci(num, memo){
    if (num <= 1) {
      return 1;
    }
    else {
    return fibonacci(num - 1) + fibonacci(num - 2);
    }
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips(tosses) { // not recursive

  const combinations = [];

  // Helper: recursive
  const flip = function (soFar = "") {
    // console.log('soFar', soFar, soFar.length === tosses);
    if (soFar.length === tosses) {
      combinations.push( soFar ); // base case
    } else {
      flip(soFar + 'H');
      flip(soFar + 'T');
    }
  }

  flip();
  return combinations;
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations(letters){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
    const combinations = [];

    const pick = function (soFar = "") {
      if (soFar.length === 1) {
        combinations.push( soFar );
      } else {
        letters.forEach((item, i) => {
          combinations.push(item);
          pick(soFar + item);
          console.log('test');
        });
      }
    }

    pick();
    return combinations;
}

console.log(letterCombinations(["a","b","c"]));

// module.exports = {
//     findMax,
//     factorial,
//     fibonacci,
//     coinFlips,
//     letterCombinations
// }
