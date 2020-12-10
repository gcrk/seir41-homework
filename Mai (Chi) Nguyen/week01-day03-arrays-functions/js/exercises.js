// Array and Functions Bonus Material
//



// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwo = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}
// console.log(maxOfTwo(10, 5));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a, b, c) {
  if (maxOfTwo(a, b) > c) {
    return maxOfTwo(a, b);
  } else {
    return c;
  }
}

// console.log(maxOfThree(10, 5, 12));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// ANSWER #1
const vowels = ["a", "e", "u", "i", "o"];

const vowelCheck = function (letter) {
  for (let i = 0; i < vowels.length; i++) {
    if (letter === vowels[i]) {
      return true;
    }
  }
  return false;
};

// ANSWER #2
// const vowelCheck = function (letter) {
//   for (let i = 0; i < vowels.length; i++) {
//     let result = false;
//     if (letter === vowels[i]) {
//       result = true;
//       break;
//     }
//   }
//   return result;
// };

// ANSWER #3
// let vowels = new Set(["a", "e", "u", "i", "o"]);
//
// const vowelCheck = function (letter) {
//   if (vowels.has(letter) === true) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(vowelCheck("o"));
// console.log(vowelCheck(10));

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (text) {
  let textLetter = "";
    for (let i = (text.length - 1); i >= 0; i--) {
      textLetter += text[i];
  }
  return textLetter;
}

//can also use array.reverse();

// console.log(reverseString("Mai xinh"));
// console.log(reverseString("jag testar"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function (words) {
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// console.log(findLongestWord(["air", "harry porter", "taylor swiftttttt"]));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function (words, num) {
  let longWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > num) {
      longWords.push(words[i]);
    }
  }
  return longWords;
}

// console.log(filterLongWords(["milk", "dish washer", "friends"], 4));

// /# Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
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
//

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// const words = ['p', 'i', 'n', 'k', 'i'];
// const currentGuess = ['_', '_', '_', '_', '_'];
//
// // - Start with a reward amount of $0
// let currentReward = 0;
//
// const wheelOfFortune = function (guess) {
//   let letterFound = 0;
//
// // - Iterate through the word letters and see if the guessed letter is in there.
//   for (let i = 0; i < words.length; i++) {
//     if (guess === words[i]) {
//       currentGuess[i] = words[i];
//       letterFound += 1;
//     }
//   }
//
//   // - When it's done iterating, it should log the current guessed letters ('F__')
//   console.log(currentGuess);
//
// // - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
//   if (letterFound === 0) {  //generate reward
//     currentReward -= Number((Math.random()*100).toFixed(2));
//     console.log(`Sorry, "${guess}" is not the right letter!`)
//     currentReward = maxOfTwo(currentReward, 0);
//   } else {
//     currentReward += Number((Math.random()*100*letterFound).toFixed(2));
//     // and congratulate the user if they found a new letter.
//     console.log(`Congratulation! Number of letter "${guess}" found: ${letterFound}`);
//   }
//
//   let leftOver = 0; //count leftover letters from current guess.
//   for (let i = 0; i < currentGuess.length; i++) {
//     if (currentGuess[i] === '_') {  //count '_' from current guess
//       leftOver += 1;
//     }
//   }
//
//   // - It should also figure out if there are any more letters that need to be guessed,
//   // and if not, it should congratulate the user for winning the game.
//   if (leftOver > 0) {
//     console.log(`Letters left: ${leftOver}`);
//   } else {
//     // - When they guess the word, log their final reward amount.
//     console.log(`You have won ${currentReward}!`);
//
//   }
// }


// wheelOfFortune("p");
// wheelOfFortune("a");
// wheelOfFortune("n");
// wheelOfFortune("i");
// wheelOfFortune("k");


// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
//
const words = ['p', 'i', 'n', 'k', 'i'];
const currentGuess = ['_', '_', '_', '_', '_'];

// - Start with a reward amount of $0
let currentReward = 0;

const letterCount = new Set();
let numberOfGuesses = function () {
  return letterCount.size;
}
// Keep track of the state of the hangman as a number (starting at 0),
let hangmanNumber = 0;

//## MAIN FUNCTION
const wheelOfFortune = function (guess) {

// If they guess a letter twice, do nothing.
  if (letterCount.has(guess)) {
    console.log(`You have guessed "${guess}" before!`);
    return;
  }

  // - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once.
  let letterFound = 0;
  letterCount.add(guess);
  console.log(`Number of times you guess: ${numberOfGuesses()}`);

// - Iterate through the word letters and see if the guessed letter is in there.
  for (let i = 0; i < words.length; i++) {
    if (guess === words[i]) {
      currentGuess[i] = words[i];
      letterFound += 1;
    }
  }
  // - When it's done iterating, it should log the current guessed letters ('F__')
  console.log(currentGuess);
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
  if (letterFound === 0) {  //generate reward
    currentReward -= Number((Math.random()*100).toFixed(2));
    console.log(`Sorry, "${guess}" is not the right letter!`)
    currentReward = maxOfTwo(currentReward, 0);
//and subtract or add to that number every time they make a wrong guess.
    hangmanNumber += 1;
  } else {
    currentReward += Number((Math.random()*100*letterFound).toFixed(2));
    // and congratulate the user if they found a new letter.
    console.log(`Congratulation! Number of letter "${guess}" found: ${letterFound}`);
    hangmanNumber -= 1;
    hangmanNumber = maxOfTwo(hangmanNumber, 0);
  }
  console.log(`HANGMAN: ${hangmanNumber}`)
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

  if (hangmanNumber >= 6) {
    console.log("Sorry you have lost!");
    return;
  }

  let leftOver = 0; //count leftover letters from current guess.
  for (let i = 0; i < currentGuess.length; i++) {
    if (currentGuess[i] === '_') {  //count '_' from current guess
      leftOver += 1;
    }
  }

  // - It should also figure out if there are any more letters that need to be guessed,
  // and if not, it should congratulate the user for winning the game.
  if (leftOver > 0) {
    console.log(`Letters left: ${leftOver}`);
  } else {
    // - When they guess the word, log their final reward amount.
    console.log(`You have won ${currentReward}!`);

  }
}

//
// wheelOfFortune("c");
// wheelOfFortune("e");
// wheelOfFortune("s");
// wheelOfFortune("9");
// wheelOfFortune("m");
// wheelOfFortune("b");
// wheelOfFortune("f");
// wheelOfFortune("g");
