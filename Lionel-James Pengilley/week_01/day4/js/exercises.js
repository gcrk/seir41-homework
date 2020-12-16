// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
//
// ```javascript
const rectangleA = {
  length: 4,
  width: 4
};
// ```

// const isSquare = function (shape) {
//   let result;
//   if (rectangleA.length !== rectangleA.width) {
//     result = `Your shape is not a square.`
//   } else {
//     result = `Your shape is a square!`
//   } return result;
// };

//or
const isSquare = function (shape) {
  let result;
  for(var i = 0; i < isSquare.length; i++) {
      if(isSquare[i] !== isSquare[i+1]) {
          result = `Your shape is not a square.`;
      } else {
        result = `Your shape is a square!`;
      } return result;
  };
};

console.log(isSquare(rectangleA));

// * area - Returns the area of the rectangle

const area = function (shape) {
  let result = rectangleA.length * rectangleA.width;//WHOOPS. Wrong formula again!
  return result;
};

console.log(area(rectangleA));


// * perimeter - Returns the perimeter of the rectangle

const perimeter = function (shape) {
  let lengthTimes2 = rectangleA.length * 2;
  let widthTimes2 = rectangleA.width * 2;
  let perimeter = lengthTimes2 + widthTimes2;
  return perimeter;
};

console.log(perimeter(rectangleA));


//
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
// ```

const isEquilateral = function (shape) {
  let result;
  if (triangleA.sideA === triangleA.sideB === triangleA.sideC) {
    result = `Your triangle is an equilateral triangle!`
  } else {
    result = ` Your triangle is not an equilateral triangle.`
  } return result;
};

console.log(isEquilateral(triangleA));


// * isIsosceles - Returns whether the triangle is isosceles or not

// const isIsosceles = function (shape) {
//   let result;
//   if (triangleA.sideA === triangleA.sideB && triangleA.sideA !== triangleA.sideC) {
//     result = `Your triangle is an isosceles triangle!`
//   } else {
//     result = ` Your triangle is not an isosceles triangle.`
//   } return result;
// };
//
//
//
// const isIsosceles = function (shape) {
//
//
// };
//
//
// console.log(isIsosceles(triangleA));

//or

// const isIsosceles = function (shape) {
//   let result;
//   for(var i = 0; i < isSquare.length; i++) {
//       if(isSquare[i] !== isSquare[i+1]) {
//           result = `Your shape is not a square.`;
//       } else {
//         result = `Your shape is a square!`;
//       } return result;
//   };
// };













// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
//
// // Output
// cashRegister(cartForParty)); // 60.55
// ```


// let values = Object.values(cartForParty);
//
// console.log(values);
//
//
//
// const cashRegister = function (cart) {
//   for (var i = 0; i < values.length; i++) {
//     values[i];
//     if (typeof values[i] === "string") {
//       cartItem = Number.parseInt(values[i])
//     } else {
//       return undefined;
//     };
//   };
// };

// console.log(cashRegister(values));


let cartForPartyArr = Object.values(cartForParty);//convert obj into arr because for...in loops are bad

const cashRegister = function (cart) {
  let totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
      totalPrice += Number.parseFloat(cart[i]);//the total price of the cart will be added to for each item plugged into the array from the loop
  };
  console.log(`Total price: $${totalPrice}`)
  return totalPrice;
};

cashRegister(cartForPartyArr);


// # Credit Card Validation



const validateCreditCard = function (cardNum) {
  const regex1 = /\D/g;//or [^0-9]? ---- all characters that are not digits (numbers?) globally
  const regex2 = /[^0-9]/g;// all characters that are digits
  let cardNumOnly = cardNum.replace(regex1, '');//removing '-' in card number and saving it to a variable
  cardNumOnlyLength = cardNumOnly.replace(regex2, '').length//Question: How can I find out the length of the occurance of multiple characters in a string?
  console.log(cardNumOnly);
}

validateCreditCard('89u3-123981u23in1-');
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
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
