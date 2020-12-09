// Week 1 - Day 3 - Arrays

//Q1. 
const maxOfTwoNumbers = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b
    }
}

// console.log(maxOfTwoNumbers(1, 4));


//Q2. 
const maxOfThree = (a, b, c) => {

    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

// console.log(maxOfThree(1, 2, 3));

//Q3. 
const isVowel = (char) => {

    //Check if the input character contains vowels
    let vowels = char.includes("a", "e", "i", "o", "u");

    //Making sure the expression is case insensitive
    // let re = new RegExp(vowels, 'gi');

    //Conditional
    if (vowels) {
        return true;
    } else {
        return false;
    }

}

// console.log(isVowel('a'));

//Q4
const arr = [1, 2, 3, 4];

const sumArray = (arr) => {
    //Set a sum variable
    let sum = 0;
    //Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        //For each value, add it to sum and sums 
        sum = sum + arr[i];
    }
    //Return the summed array 
    return sum;
}

//Q4. 
const multiplyArray = (arr) => {
    //Sum var is now 1 to multiply each value by itself
    let sum = 1;
    //Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        //For each value, multiply the array value by itself and update the sum value. 
        sum = sum * arr[i]
    }
    //Return the summed array 
    return sum;
}

// console.log(multiplyArray(arr));
// console.log(sumArray(arr));


//Q5. 

const reverseString = (str) => {

    //.split() - using split we can assign the string to an array, and pass in and empty string "" as a value separator
    let a = str.split("");

    //.reverse() - as our string is now an array, lets reverse our array at (a)
    let b = a.reverse();

    //.join() - join together all of the values of an array and pass in an empty string to have it read like a word.
    let c = b.join('')

    return c;

}

// console.log(reverseString("jag testar"));


//Q6. 
const words = ['pollution', 'node', 'pneumonoultramicroscopicsilicovolcanoconiosis']

// const findLongestWord = (arr) => {
//     //Set longest to an empty string 
//     let longestWord = "";
//     //Loop through array
//     for (i = 0; i < arr.length; i++) {
//         //Check which of the array values has the largest length when compared the length of an empty string = 0.
//         if (arr[i].length > longestWord.length) {
//             //longest word is the one that satisfies the condtion.
//             longestWord = arr[i];
//         }
//     }
//     //Return the longest word 
//     return longestWord;
// }

// console.log(findLongestWord(words));

const findLongestWord = (arr) => {
    //Set longest to an empty string 
    let longestWord = "";
    //Loop through array
    for (i = 0; i = < arr.length; i++) {
        //Check which of the array values has the largest length when compared the length of an empty string = 0.
        console.log(arr[i].length);
    }
    //Return the longest word 
    return longestWord;
}

console.log(findLongestWord(words));



//Q7.

const filterLongWords = (arr, n) => {
    //Set response variable 
    let res = [];
    //Loop array
    for (i = 0; i < arr.length; i++) {
        //For each word, check if their character length is greater than i 
        if (arr[i].length >= n) {
            //true = assign it to res and return
            return res.push(arr[i]);
        }
    }
}

console.log(filterLongWords(words, 46));