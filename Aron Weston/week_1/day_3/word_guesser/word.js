// Week 1 - Day 3 - Word Guesser

//Set global arrays 

const fox = ['f', 'o', 'x'];

const guess = ['', '', '', 'f', 'o', 'x'];


const guessLetter = (input) => {

    // Loop through guess and see if 
    for (i = 0; i < guess.length; i++) {

        let correct = `Good job, you're answer is correct`;
        let incorrect = `Sorry, try again`

        //Check for F
        for (i = 0; i < guess.length; i++) {
            if (input === "f") {
                guess.splice(0, 1, input);
                console.log(correct);
            } else {
                console.log(incorrect);
            }




            // if (input.contains("o")) {
            //     guess.splice(1, 1, input);
            //     return correct
            // } else {
            //     return incorrect;
            // }
        }

        //Check for O
        for (i = 0; i < guess.length; i++) {

        }

        //Check for X
        for (i = 0; i < guess.length; i++) {
            if (input === "x") {
                guess.splice(2, 1, input);
                console.log(guess);
                return correct;
            } else {
                return incorrect;
            }
        }
    }
}


console.log(guessLetter('f'));
console.log(guessLetter('o'));
console.log(guessLetter('x'));



// //Conditional for the winner
// if (winner) {
//     guess.splice(0, 1, input);
//     console.log(guess);
//     break
// } else {
//     console.log("No");
//     break
// }