// # Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// ## DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars',
// except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function (num) {
  if (num == 1000000) {
    console.log ("1000000 dollars (pinky)");
  } else {
    console.log (`${num} dollars`);
  }
}

// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings
// (separated by a space)slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp = function (str1, str2) {
  let mix1 = str1.slice(0,2);
  let remain1 = str1.slice(2);
  let mix2 = str2.slice(0,2);
  let remain2 = str2.slice(2);
    let newStr1 = `${mix2}${remain1}`;
    let newStr2 = `${mix1}${remain2}`;
      const result = `${newStr1} ${newStr2}`;
  console.log (result)
}

mixUp ("abstract","meanwhile");
mixUp ("ab","cd");

// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where
// all occurences of its first character have been replaced with '*', except for the first character itself.
// You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixStart = function (str) {
  let newStr = str.replaceAll(str[0],"*");
  let result = str[0]+newStr.slice(1);
  console.log (result);
}

fixStart("character");
fixStart("bubble");
fixStart("dog");


// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3,
// it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = function (str) {
  if (str.length >=3) {
    if (str.slice(-3)=="ing") {
      str = str + "ly";
    }else {
      str = str + "ing";
    }
    console.log (str);
  }else{
    console.log(str);
  }
}

verbing("swim");
verbing("swimming");
verbing("go");

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


const notBad = function (str) {
  const regex = /not [a-z]* bad/;
  const isExisting = regex.test(str);
  if (isExisting == true ){
    str = str.replace(/not [a-z]* bad/, "good");
    console.log (str);
  }else{
    console.log (str);
  }
}
notBad('This dinner is not that bad!')
notBad('This movie is not so bad!')
notBad('This dinner is bad!')
