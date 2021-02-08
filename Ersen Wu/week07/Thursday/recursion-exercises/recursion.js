// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

// function findMax(arr){
//     // This function returns the largest number in a given array.
//     let index = 0;
//     let maxNum = arr[index];
//
//     function rMax(){
//       if(index === arr.length){
//         return maxNum
//       }
//
//       if(arr[index]>arr[index-1]){
//         maxNum = arr[index];
//       } else {maxNum = arr[index + 1]
//               }
//       return rMax();
//      }
//       return rMax();
// }

//Joe's solution:

function findMax(arr, largest=arr[0]){
  if(arr.length === 1){
    return largest; //base case
  }

  if (arr[1] > largest) {
    largest = arr [1]
  }

  const rest = arr.slice(1) //chop off the first number

  return findMax(rest, largest);
}

function factorial(n){
    // This function returns the factorial of a given number.
    if (n === 1){
      return 1 ;
    }

     return n * factorial(n-1);
}

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if(n===1||n===2){
      return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

// function coinFlips(n){
//     // This function returns an array of all possible outcomes from flipping a coin N times.
//     // Input type: Integer
//     // For example, coinFlips(2) would return the following:
//     // ["HH", "HT", "TH", "TT"]
//     // H stands for Heads and T stands for tails
//     // Represent the two outcomes of each flip as "H" or "T"
//     if(n===1){
//       return ['H','T']
//     }
//       return coinFlips(n-1).map(function(e){return e + 'H'}).concat(coinFlips(n-1).map(function(e){return e + 'T'}));
// }

// JOEL'S SOLUTION:
function coinFlips(tosses){
 const combinations = [];

 // Helper: resursive
 const flip = function (soFar="") {
   if (soFar.length === tosses) {
     combinations.push(soFar); //base case
   } else {
     flip(soFar + 'H');
     flip(soFar + 'T');
   }
 }
 flip()
 return combinations;
}

function letterCombinations(arr){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
    const combinations = []

   //Helper function
    const combine = function (soFar=""){
      if(soFar.length === arr.length){
      combinations.push (soFar);      //base case
      } else {
       for (let i = 0; i < arr.length; i++){
          if(soFar.split('').indexOf(arr[i]) === -1){          //checks to make sure the combination doesnt have duplicated letters
          combine(soFar + arr[i])
          }else{
          if (combinations.indexOf(soFar === -1)){     //check: e.g. when 'ab' iterating throught ['a', 'b', 'c'], 'ab doesnt get pushed into combination[] twice'
          combinations.push(soFar)
          }
        }
      }
    }
  }
  combine();
  return combinations;
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
