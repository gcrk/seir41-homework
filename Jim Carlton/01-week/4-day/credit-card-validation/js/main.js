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
//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// // *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

// Establish object for input
let creditCards = [
  {name: `Jeethan Johnson`,
   cCNum: `9999-9999-8888-0000`,
   exp: `11/21`},
  {name: `Pol Philly`,
   cCNum: `6666-6666-6666-1666`,
   exp: `11/20`},
  {name: `Ethan Eggton`,
   cCNum: `a923-3211-9c01-1112`,
   exp: `11/16`},
  {name: `Ben Binstonton`,
   cCNum: `4444-4444-4444-4444`,
   exp: `11/24`},
  {name: `Yelly Yotyat`,
   cCNum: `1111-1111-1111-1110`,
   exp: `11/26`},
  {name: `Canttell Whatchathinkin`,
   cCNum: `6666-6666-6666-6661`,
   exp: `11/29`}
];

const validateCreditCard = function (input){

  let inputRemoveDash = input.replace(/-/g, ""); // remove the dash and keep as string for use later
  let inputArray = inputRemoveDash.split(""); // convert input sans the dash to array for manipulation below
  let cCNumber = Number(inputRemoveDash); // convert the input value to a number after the dash has been removed. This can be used also used to determine if it's a number or not as if it's not, it will return "NaN"
  let lastNum = inputArray[inputArray.length - 1];
  let sumArray = (inputArray.map((i) => Number(i))).reduce(function(a, b){ return a + b}, 0);
  let verdict;

  if (Number.isNaN(cCNumber) === false && inputArray.length === 16 && inputArray[inputArray.length - 1] % 2 === 0 && sumArray > 16){
      verdict = `card is valid`;
  }
  else {
      verdict = `card is not valid`;
  }

  return verdict;
}

console.log(validateCreditCard(`a923-3211-9c01-1112`));




// ATTEMPT AT TRYING TO CREATE THE CREDIT CARD INPUTS AS OBJECTS NESTED WITHIN AN ARRAY

// // Establish object for input
// let creditCards = [
//   {name: `Jeethan Johnson`,
//    cCNum: `9999-9999-8888-0000`,
//    exp: `11/21`},
//   {name: `Pol Philly`,
//    cCNum: `6666-6666-6666-1666`,
//    exp: `11/20`},
//   {name: `Ethan Eggton`,
//    cCNum: `a923-3211-9c01-1112`,
//    exp: `11/16`},
//   {name: `Ben Binstonton`,
//    cCNum: `4444-4444-4444-4444`,
//    exp: `11/24`},
//   {name: `Yelly Yotyat`,
//    cCNum: `1111-1111-1111-1110`,
//    exp: `11/26`},
//   {name: `Canttell Whatchathinkin`,
//    cCNum: `6666-6666-6666-6661`,
//    exp: `11/29`}
// ];
//
// const validateCreditCard = function (input){
//
//   let cCNumArrayNum = Number(creditCards.cCNum.replace(/-/g, "")); // remove the dash and slice string and join to convert to number
//   let cCIsNum = Number.isInteger(cCNumArrayNum)
//
//   for (let i = 0; i < creditCards.length; i++){
//     if (cCIsNum === true){
//     console.log(cCNumArrayNum);
//     }
//   }
// }
