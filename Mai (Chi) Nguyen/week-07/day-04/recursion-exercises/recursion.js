// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

// function findMax(array, index = 0, largest){
//     // This function returns the largest number in a given array.
//   if (index === array.length) {
//     return largest;
//   }
//   // check if the largest has any value, if not, assign the first value
//   if (!largest) {
//     largest = array[index];
//   };
//   if (array[index] > largest) {
//     largest = array[index];
//   }
//   return findMax(array, index + 1, largest);
// }

function findMax(array, largest = array[0]) {
  if (array.length === 0) {
    return largest; // base case
  }

  if (array[0] > largest) {
    largest = array[0]
  }

  const rest = array.slice(1);
  return findMax(rest, largest);
}

function factorial(number, runningResult = 1){
    // This function returns the factorial of a given number.
    if (number === 1) {
      return runningResult;
    }

    runningResult = number * runningResult;
    return factorial(number - 1, runningResult);
}

function fibonacci(number, index = 1, resultArray = [0]){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
  // let lastResult = runningResult[runningResult.length - 1];
  if (index > number) {
    return resultArray[resultArray.length - 1];
  }

  if (index === 1) {
    resultArray.push(1);
    return fibonacci(number, index + 1, resultArray);
  }

  resultArray.push(resultArray[index - 1] + resultArray[index - 2]);
  return fibonacci(number, index + 1, resultArray);
}

// function coinFlips(n){
//   let possibleOutcome = ['H', 'T'];
//   if (n === 1) {
//     return possibleOutcome;
//   }
//
//   let arrayToDuplicate = coinFlips(n - 1);
//   let array1 = arrayToDuplicate;
//   let array2 = arrayToDuplicate;
//
//   array1 = array1.map(posibility => posibility + possibleOutcome[0]);
//   array2 = array2.map(posibility => posibility + possibleOutcome[1]);
//   return array1.concat(array2);
// }

function coinFlips(tosses) { //not recursive
  const combinations = [];

  //Helper: recursive
  const flip = function (soFar="") {
    // console.log('soFar', soFar, soFar.length === tosses);
    if (soFar.length === tosses) {
      combinations.push( soFar ); //base case
    } else {
      flip(soFar + 'H');
      flip(soFar + 'T');
    }
  }

  flip();
  return combinations;
}

function letterCombinations(array){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
  if (array.length === 1) {
    return array;
  }

  let possibleCombinations = letterCombinations(array.slice(0, array.length - 1));
  let characterToCombine = array[array.length - 1];
  let result = [characterToCombine];
  possibleCombinations.forEach((string, i) => {
    result.push(string);
    for ( let i = 0; i <= string.length; i++ ) {
  	   result.push(string.slice(0, i) + characterToCombine + string.slice(i));
    }
  });
  return result;
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
