// Week 1 - Day 3 - Word Guesser

//Set global arrays 

const word = ['f', 'o', 'x'];

const guess = [];


const guessLetter = (letter) => {


    guess.push(letter);

    console.log(guess);
}


console.log(guessLetter('f'));
console.log(guessLetter('o'));
console.log(guessLetter('x'));