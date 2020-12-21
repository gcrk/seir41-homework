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
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
const sumString = function (str) {
  let sum = 0;
  for (i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  return sum;
}


const validateCreditCard = function(cardNum) {

  let workNum = cardNum.replaceAll("-",""); // remove dashes
  let result = {valid: false, number: cardNum, error: undefined};

  if (workNum.length != 16) { //card length
    result.error = "wrong length";
    console.log (result);
  } else if (isNaN(workNum) != false ) { // if they are all numbers
    result.error = "invalid characters";
    console.log (result);
  } else if (/^(.)\1+$/.test(workNum) === true) { //if same number repeating
    result.error = "only one type of number";
    console.log (result);
  } else if (workNum.slice(-1)%2 != 0){ // check final number
    result.error = "odd final number";
    console.log (result);
  } else if (sumString(workNum) < 16) { // check string sum
    result.error = "sum less than 16";
    console.log (result);
  } else { //valid credit number!
    result.valid = true;
    delete result.error;
    console.log (result);
  }
}

validateCreditCard ('528936');
validateCreditCard ('a923-3211-9c01-1112');
validateCreditCard (`4444-4444-4444-4444`);
validateCreditCard (`6666-6666-6666-6661`);
validateCreditCard (`1111-1111-1111-1110`);
validateCreditCard (`9999-9999-8888-0000`);

//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
