
const test = [3, 4, 2, 1, 2]

function findMax(arr) {
    //Create a copy of the array for each recursion as this array is the recursive action, the thing that's being changed towards the base case
    let nums = arr.slice();
    //The base case is the final number is the array after the recursion as the recursion 
    if (nums.length === 1) {
        return nums[0];
    }
    //If the first is larger than the second, remove it from the array.
    if (nums[0] > nums[1]) {
        nums.splice(1, 1);
    } else {
        nums.splice(0, 1)
    }
    return findMax(nums)
}

console.log(findMax(test));



function factorial(num, n = num - 1) {

    if (n === 1) {
        return num;  
    }
    sum = num * n;

    return factorial(sum, n - 1);
    // This function returns the factorial of a given number.
}

console.log(factorial(6));


function fibonacci(num) {
    
    //The first two numbers added together create the next number in the array. So num is the number 

    if (num <= 1) {
        return num;
    }    

    return fibonacci(num - 1) + fibonacci(num - 2);

}

console.log(fibonacci(1));


function coinFlips(flips, arr = ['H', 'T']) {

    let combos = arr.splice()

    if (flips < 0) {
        return;
    }

    




    return flips(flips - 1, )




    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
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