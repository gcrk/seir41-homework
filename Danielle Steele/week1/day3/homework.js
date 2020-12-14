//Array and Functions Bonus Material

//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = (num1, num2) => {
    if (num1 < num2) {
        return num2;
    }
    return num1;
}
// < eating the bigger one

console.log(maxOfTwoNumbers(150, 10));
console.log(maxOfTwoNumbers(50, 90));
console.log(maxOfTwoNumbers(1500, 150));


//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThreeNumbers = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    if (num2 > num1 && num2 > num3) {
        return num2;
    }
    return num3;
}

console.log(maxOfThreeNumbers(150, 10, 80));
console.log(maxOfThreeNumbers(50, 90, 60));
console.log(maxOfThreeNumbers(10, 20, 30));

//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isAVowel = (letter) => {
    if (letter === "a" || 
        letter === "e" || 
        letter === "i" ||
        letter === "o" ||
        letter === "u") {
            return true;
        }
    return false;
}

console.log(isAVowel('g'));
console.log(isAVowel('a'));
console.log(isAVowel('e'));
console.log(isAVowel('i'));
console.log(isAVowel('o'));
console.log(isAVowel('u'));

//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total;
}

const multiplyArray = (array) => {
    let total = 1;
    for (let i = 0; i < array.length; i++) {
        total = total * array[i];
    }
    return total;
}

console.log(sumArray([1,2,3,4]));
console.log(multiplyArray([1,2,3,4]));


//Homework: The Word Guesser

//You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//


//Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would //start with '_', '_', '_' and end with 'F', 'O', 'X').
//Write a function called guessLetter that will:

//Take one argument, the guessed letter.

//Iterate through the word letters and see if the guessed letter is in there.

//If the guessed letter matches a word letter, changed the guessed letters array to reflect that.

//When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
//It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the //game.
//Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

