// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(a, b, c) {
  let largest = a;
  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  return largest;
}

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function(char) {
  if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
}

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

const multiplyArray = function(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
}
//
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string) {
  let result = '';
  for( let i = string.length - 1; i >= 0; i--) {
    result = result + string[i];
  }
  console.log(result);
}

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function(array) {
  let maxLength = array[0].length;
  for ( let i=1; i < array.length; i++) {
    if (array[i].length > maxLength) {
     maxLength = array[i].length;
    }
  }
  return maxLength;
}

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function(array, i) {
  const longWords = [];
  for ( let n = 0 ; n < array.length; n++) {
    if (array[n].length > i) {
      longWords.push(array[n]);
    }
  }
  return longWords;
}

// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').

const lettersInWord = ['F', 'O', 'X'];
const guessedLetters = ['\_', '\_', '\_'];
let correctGuess = false;

// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const guessLetter = function(guess) {
  //Check for a correct letter
  for ( let i = 0; i < lettersInWord.length; i++) {
    if (guess === lettersInWord[i]) {
      guessedLetters[i] = guess;
      correctGuess = true;
    }
  }
  //Congratulate player
  console.log(guessedLetters);
  if (correctGuess) {
    console.log("You found a letter");
  }
  correctGuess = false;
  //Test if game is over
  let gameWon = true;
  for ( let i = 0; i < lettersInWord.length; i++) {
    if (guessedLetters.includes(lettersInWord[i]) === false) {
       gameWon = false;
      }
    }
  if (gameWon) {
    console.log("You won!");
  }
}

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

let reward = 0;
let bonus = 1;

const wheelOfFortune = function(guess) {
  //Check for a correct letter
  for ( let i = 0; i < lettersInWord.length; i++) {
    if (guess === lettersInWord[i]) {
      guessedLetters[i] = guess;
      correctGuess = true;
      bonus++
    }
  }
  //Reward player is they got a letter correct, penalise wrong answers
  console.log(guessedLetters);
  if (correctGuess) {
    reward += Math.round(Math.random() * 200 * bonus);
    console.log("You found a letter");
  } else {
    reward -= 50;
    console.log("Wrong!")
  }
  correctGuess = false;
  //Test if game is over
  let gameWon = true;
  for ( let i = 0; i < lettersInWord.length; i++) {
    if (guessedLetters.includes(lettersInWord[i]) === false) {
       gameWon = false;
      }
    }
  if (gameWon) {
    console.log("You won!");
    console.log(reward);
  }
}

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

const allGuesses = [];
let hangManState = 0;
let gameWon = false;
let gameLost = false;

const hangMan = function(guess) {
  //Check if the letter has already been guessed
  if (allGuesses.includes(guess) === false && gameWon === false && gameLost === false) {
    allGuesses.push(guess);
    //Check for a correct letter
    for ( let i = 0; i < lettersInWord.length; i++) {
      if (guess === lettersInWord[i]) {
        guessedLetters[i] = guess;
        correctGuess = true;
      }
    }
    //Congratulate player
    console.log(guessedLetters);
    if (correctGuess) {
      console.log("You found a letter");
    } else {
      hangManState++;
      if (hangManState >= 6) {
        gameLost = true;
        console.log("You have lost");
        console.log(" +---+");
        console.log(" |   |");
        console.log(" O   |");
        console.log("/|\\\  |");
        console.log("/ \\\  |");
        console.log("     |");
        console.log("======");
      }
    }
    correctGuess = false;
    //Test if game is over
    gameWon = true;
    for ( let i = 0; i < lettersInWord.length; i++) {
      if (guessedLetters.includes(lettersInWord[i]) === false) {
         gameWon = false;
        }
      }
    if (gameWon) {
      console.log("You won!");
    }
  }
}
