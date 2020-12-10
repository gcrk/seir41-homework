// # Homework: The Word Guesser
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

const answer = ["l","i","g","h","t"];
const guessed = ["_","_","_","_","_"];

const countRemain = function (array) {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === "_") {
      count++;
    }
  }
  return (count);
}

const guessLetter = function (letter) {
  let right = "";
  for (i = 0; i < answer.length; i++) {
    if (letter === answer[i]) {
      right = true;
      guessed[i] = letter;
      console.log (guessed + " Congratulations! You find a new letter!");
      if (countRemain (guessed) != 0) {
        console.log (`${countRemain(guessed)} remaining to be guessed!`);
      } else {
        console.log ("You have won the game!");
        }
      }
    }
    if (right != true) {
      console.log ("Wrong guess! This letter does not belong to this word.");
      console.log (`${countRemain(guessed)} remaining to be guessed!`);
  }
}


// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.
//
const rewardList = [];

const countReward = function (array) {
  let count = 0
  for (i = 0; i < array.length; i++) {
    count += array[i];
  }
  return (count);
}

const wheelFortune = function (letter) {
  let right = "";
  for (i = 0; i < answer.length; i++) {
    if (letter === answer[i]) {
      right = true;
      guessed[i] = letter;
      rewardList.push (Math.random() * (answer.length - countRemain(guessed)));
      console.log (guessed + " Congratulations! You find a new letter!");
      if (countRemain (guessed) != 0) {
        console.log (`${countRemain(guessed)} remaining to be guessed!`);
      } else {
        let finalReward = countReward(rewardList);
        console.log (`You have won the game! You have gained ${finalReward} rewards!`);
        }
      }
    }
    if (right != true) {
      rewardList.push (-Math.random());
      console.log ("Wrong guess! This letter does not belong to this word.");
      console.log (`${countRemain(guessed)} remaining to be guessed!`);
  }
}

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

let hangNum = 0;
const guessedList = [""];

const hangman = function (letter) {
  for (j = 0; j < guessedList.length; j++) {
    if (letter != guessedList[j]) {
      let right = "";
      for (i = 0; i < answer.length; i++) {
        if (letter === answer[i]) {
          right = true;
          guessed[i] = letter;
          hangNum = hangNum - 1;
          console.log (guessed + " Congratulations! You find a new letter!");
          if (countRemain (guessed) != 0) {
            console.log (`${countRemain(guessed)} remaining to be guessed!`);
          } else {
            console.log ("You have won the game!");
            }
          }
        }
        if (right != true) {
          hangNum = hangNum + 1;
          console.log ("Wrong guess! This letter does not belong to this word.");
          console.log (`${countRemain(guessed)} remaining to be guessed!`);
      }
      if (hangNum === 6) {
        console.log ("Hangman Game: You have failed!");
        return
      }
    }
  }
}

hangman ("a");
hangman ("b");
hangman ("c");
hangman ("d");
hangman ("e");
hangman ("f");
