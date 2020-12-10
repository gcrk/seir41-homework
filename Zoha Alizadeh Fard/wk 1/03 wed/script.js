// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

function maxOfTwoNumbers(a, b) {
  let greater;
  if (a < b) {
  greater = b
  } else {
    greater = a
  }
    return greater;
  };
  console.log(maxOfTwoNumbers(3, 66));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

function maxOfThree(n1, n2, n3) {
  let greatest;
if (n1 > n2 && n1 > n3) {
  greatest = n1;
} else if (n2 > n1 && n2 > n3) {
  greatest = n2;
} else {
  greatest = n3;
};
return greatest;
};

console.log(maxOfThree(3, 5, 7))
console.log(maxOfThree(5, 7, 3))
console.log(maxOfThree(7, 5, 3))



// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

//we want a function that would return false if there was no vowel and return true if the arguemnt is a vowel
// const letter = letter.toLowerCase();



function vowelFinder(letter) {
  let l = letter.toLowerCase();
  if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u' || l === 'y' || l === 'w'){
    return true
  } else {
    return false
  }
 
};

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.


function sumArray([n1, n2, n3, n4]) {
  return n1 + n2 + n3 + n4;
}
console.log(sumArray([2, 4, 5, 6]))

function multiplyArray([n1, n2, n3, n4]) {
  return n1 * n2 * n3 * n4;
}
console.log(multiplyArray([2, 4, 5, 6]))


// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.



let a = Str.split();
str.reverse();
str.join();


// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

let wordLetters = ['b', 'e', 'n', 'c', 'h'];

let currentLetters = ['\_', '\_', '\_', '\_', '\_'];

let currentPoint = '';


function theWordGuesser(guessedLetter) {
  for (let i = 0; i <= wordLetters.length; i++) {
    return wordLetter = wordLetters[i]
  };

  if(guessedLetter === wordLetter){
    guessedLetters[i] = wordLetter;
  };

console.log(guessedLetters)

};


// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.