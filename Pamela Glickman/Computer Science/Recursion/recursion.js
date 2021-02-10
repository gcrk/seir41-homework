// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array, index = 0, values = []){
   // This function returns the largest number in a given array.
   if (index >= array.length) {
     return Math.max.apply(Math, values);
   }
   values.push(array[index]);
   index++;
   return findMax(array, index, values);
}

// Alternate Version
// function findMax(array, largest=-Infinity) {
//   if (array.length === 0) {
//     return largest; // base case
//   }
//
//   if (array[0] > largest) {
//     largest = array[0]
//   }
//
//   const rest = array.slice(1); // everything after array[0]
//
//   return findMax(rest, largest);
// }

function factorial(num, total = 1){
   if (num <= 0) {
     return total;
   }
   total *=num;
   num--;
   return factorial(num, total);
}

function fibonacci(index, num1 = 1, num2 = 1, total = 1) {
   // This function returns the Nth number in the fibonacci sequence.
   // https://en.wikipedia.org/wiki/Fibonacci_number
   // For this function, the first two fibonacci numbers are 1 and 1
   if (index <= 2) {
     return total;
   }
   total = num1 + num2;
   num1 = num2;
   num2 = total;
   index--;
   return fibonacci(index, num1, num2, total)
}

// Solution borrowed from this forum discussion after a number of failed attempts: https://stackoverflow.com/questions/63570953/how-to-return-all-combinations-of-n-coin-flips-using-recursion
function coinFlips(numFlips) {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  function addFlips(numFlips, array, newResult) {
    if (numFlips === 1) {
      array.push(newResult + "H");
      array.push(newResult + "T");
    } else {
      numFlips--;
      addFlips(numFlips, array, newResult + "H");
      addFlips(numFlips, array, newResult + "T");
    }
  }
  let array = [];
  addFlips(numFlips, array, newResult = '');
  return array;
}

// Alternative Version
// function coinFlips (tosses) { // not recursive
//   const combinations = [];
//
//   // Helper: recursive
//   const flip = function (soFar="") {
//     //console.log('soFar', soFar, soFar.length === tosses);
//     if (soFar.length === tosses) {
//       combinations.push( soFar ); // base case
//     } else {
//       flip(soFar + 'H');
//       flip(soFar + 'T');
//     }
//   }
//
//   flip();
//   return combinations;
// }

//Previous attempt
    // if (comboNum <= 0) {
    //   return array;
    // }
    // if (isHead) {
    //   result += "H";
    //   isHead = false;
    //   numFlipsLeft--;
    //   if (numFlipsLeft <= 0) {
    //     array.push(result);
    //     comboNum--;
    //   }
    //   console.log(result);
    //   console.log(array);
    //   return coinFlips(numFlipsLeft, comboNum, isHead, result, array);
    // } else {
    //   result += "T";
    //   isHead = true;
    //   numFlipsLeft--;
    //   if (numFlipsLeft <= 0) {
    //     array.push(result);
    //     comboNum--;
    //   }
    //   return coinFlips(numFlipsLeft, comboNum, isHead, result, array);
    // }

function letterCombinations(letters){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
    let numLetters = letters.length;
    function addCombos(letters, numLetters, array, newResult) {
      if (numLetters === 1) {
        for (let i = 0; i < letters.length; i++) {
          if (newResult.indexOf(letters[i]) === -1) {
            array.push(newResult + letters[i]);
          }
          else {
            if (array.indexOf(newResult) === -1) {
              array.push(newResult);
            }
          }
        }
      } else {
        numLetters--;
        for (let i = 0; i < letters.length; i++) {
          if (newResult.indexOf(letters[i])) {
            addCombos(letters, numLetters, array, newResult + letters[i]);
          }
        }
      }
    }
    let array = [];
    letters.forEach(function(letter) { // Added to return single results, might be cheating here
      array.push(letter);
    })
    addCombos(letters, numLetters, array, newResult = '');
    return array;
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
