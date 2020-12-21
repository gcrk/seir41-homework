



// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.



const maxOfTwoNumbers = function(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }

};

console.log(`The greater number of 5 and 10 is ${maxOfTwoNumbers}.`);


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThreeNumbers = function(num1, num2, num3) {

    return Math.max(num1, num2, num3);
           
}  

console.log(`The greatest of three numbers is ${maxOfThreeNumbers}.`);



// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.




const isVowel = function(char) {
    const vowels = ["a", "e", "i", "o", "u"];
        
    return vowels.filter(vowel => char === vowel);
    
    }
    


    // 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.


    const sumArray = [1,2,3,4] 
    








// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.