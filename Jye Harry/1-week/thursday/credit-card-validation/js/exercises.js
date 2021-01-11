// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
//
// The following credit card numbers are valid:
//
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
//
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```
//
// *Hint*: Remove the dashes from the input string before checking if the input credit card number is valid.

const validateCreditCard = function (card) {
  const newCard = card.split("-").join("");
  return {
    valid: checkLength(newCard)[0] && checkSum(newCard)[0] && checkEven(newCard)[0] && checkSameNumbers(newCard)[0],
    number: card,
    error: checkLength(newCard)[1] + checkSum(newCard)[1] + checkEven(newCard)[1] + checkSameNumbers(newCard)[1],
  }
}

const checkLength = function (card) {
  if (card.length === 16) {
    return [true, ""];
  } else {
    return [false, "wrong length. "];
  }
}

const checkSum = function (card) {
  let sum = 0;
  for (let i = 0; i < card.length; i++) {
    sum += parseInt(card[i]);
  }
  if (sum > 16) {
    return [true, ""];
  } else {
    return [false, "wrong sum. "];
  }
}

const checkEven = function (card) {
  if (parseInt(card[15]) % 2 === 0) {
    return [true, ""];
  } else {
    return [false, "odd final digit. "];
  }
}

const checkSameNumbers = function (card) {
  let sameNumbers = true;
  for (let i = 0; i < card.length; i++) {
    if (sameNumbers) {
      sameNumbers = card[0] === card[i];
    }
  }
  if (!sameNumbers) {
    return [true, ""];
  } else {
    return [false, "all same numbers."];
  }
}

console.log(validateCreditCard("1111-2222-3333-4444"));
console.log(validateCreditCard("1111-2222-3333-4445"));
console.log(validateCreditCard("1010-1010-1010-1010"));
console.log(validateCreditCard("1010-1010-1010-101"));
console.log(validateCreditCard("2222-2222-2222-2222"));
console.log(validateCreditCard("2222-22a2-2222-2222"));

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
