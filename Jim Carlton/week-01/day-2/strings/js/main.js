// # Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// ## DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

const DrEvil = function (amount){
  let result = `DrEvil: $${amount} dollars`; // define the sstandard statement for the result
  if (amount === 1000000){
    result = `DrEvil: $${amount} dollars (pinky)`; // return this if 1,000,000
  }
  console.log(result); // log it to test!
  return result; // store result
}

DrEvil(10);
DrEvil(1000000);

// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp = function (word1,word2){
  const sliceAndDice = `${word2.slice(0,2)}${word1.slice(2)} ${word1.slice(0,2)}${word2.slice(2)}`; // use slice string method to cut first 2 characters from each word and stich them in front of alternate word that has first 2 characters removed (using slice also).
  console.log(sliceAndDice); // log it to test!
  return sliceAndDice; // store result
}

mixUp("mix", "pod");
mixUp("dog", "dinner");

// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixStart = function (stringInput){
  const firstLetter = stringInput.slice(0,1); // slice the first letter off
  const restOfString = stringInput.substring(1); // find the rest of the string sans the first letter
  const reg = new RegExp(firstLetter, 'gi'); // find all instances of firstLetter and ignore case
  const altString = firstLetter + restOfString.replaceAll(reg, "*"); // stitch them together to rebuild the string
  console.log(altString); // log it to test!
  return altString; // store result
}

fixStart("Babble");

// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
// in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = function (stringVerb){
  let resultV = stringVerb; // assign StringVerb its own vaariable to use within conditional statements
  if (stringVerb.length >= 3 && stringVerb.endsWith("ing") === true){
    resultV = `${stringVerb}ly`;
  } // if the word is greater than 3 characters and ends with "ing", add a "ly" to the end of the word
  else if (stringVerb.length >= 3 && stringVerb.endsWith("ing") === false){
    resultV = `${stringVerb}ing`;
  } // if the word is greater than 3 characters and doesn't end with "ing", add a "ing" to the end of the word
  else; // any other scenarios don't append or change the string
  console.log(resultV); // log it to test!
  return resultV; // store result
}

verbing('go');

// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```
