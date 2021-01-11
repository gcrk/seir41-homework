// Week 1 - Day 3 - Arrays

//Q1. 
const maxOfTwoNumbers = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b
    }
}

// console.log("Q1 - Max of two", maxOfTwoNumbers(1, 4));


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

// console.log("Q2 - Max of three", maxOfThree(1, 2, 3));

//Q3. 
const isVowel = (char) => {

    //Check if the input character contains vowels
    let vowels = char.includes("a", "e", "i", "o", "u");

    //Making sure the expression is case insensitive
    // let re = new RegExp(vowels, 'gi');

    //Conditional
    if (vowels) {
        return true;
    }

}

// console.log("Q3 - Is it a vowel?", isVowel('a'));
// console.log("Q3 - Is it a vowel?", isVowel('10'));



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

// console.log("Q4", multiplyArray(arr));
// console.log("Q4", sumArray(arr));


//Q5. 

const reverseString = (str) => {

    //.split() - using split we can assign the string to an array, and pass in and empty string "" as a value separator
    let a = str.split("");
    console.log(a);

    //.reverse() - as our string is now an array, lets reverse our array at (a)
    let b = a.reverse();
    console.log(b);
    //.join() - join together all of the values of an array and pass in an empty string to have it read like a word.
    let c = b.join('')
    console.log(c);
    return c;

}

// console.log(reverseString("jag testar"));


//Q6. 
const words = ['pollution', 'node', 'pneumonoultramicroscopicsilicovolcanoconiosis']

const findLongestWord = (arr) => {
    //Set longest to an empty string 
    let longestWord = "";
    //Loop through array
    for (i = 0; i < arr.length; i++) {
        //Check which of the array values has the largest length when compared the length of an empty string = 0.
        if (arr[i].length > longestWord.length) {
            //longest word is the one that satisfies the condition.
            longestWord = arr[i];
        }
    }
    //Return the longest word 
    return longestWord;
}

// console.log(findLongestWord(words));


// Q7. Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

const wordList = ['rude', 'unit', 'organic', 'unkempt', 'skillful', 'various', 'grin', 'fortunate', 'bite', 'railway', 'charge', 'squeal'];

//Find all the lengths of the input array words
//Set a new array
//If the word length is greater or equal to n, push to new array
//Return array  
//Else, do nothing

const filterLongWords = (arr, n) => {
    let res = [];
    for (i = 0; i < arr.length; i++) {

        if (arr[i].length > n) {
            res.push(arr[i]);
        }
    }
    console.log(res);
}

console.log(wordList);
filterLongWords(wordList, 8);