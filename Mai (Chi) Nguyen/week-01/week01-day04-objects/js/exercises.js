// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```

const rectangleA = {
  length: 4,
  width: 5,
};
// check if Square
const isSquare = function (rectangle) {
  if (rectangle.length = rectangle.width) {
    return true;
  } else {
    return false;
  };
}

// calculate area
const area = function (rectangle) {
    let result = rectangle.length * rectangle.width;
    return result;
}

//calculate perimeter
const perimeter = function (rectangle) {
  let result = (rectangle.length + rectangle.width) * 2;
  return result;
}




//
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};



const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
    return true;
  } else {
    return false;
  }
}
// console.log(isEquilateral(triangleA));

const isIsosceles = function (triangle) {
  if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC) {
    return true;
  } else {
    return false;
  }
}
// console.log(isIsosceles(triangleA));
//
const areaTri = function (triangle) {
  let halfPeri = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  let result = Math.sqrt(halfPeri * (halfPeri - triangle.sideA) * (halfPeri - triangle.sideB) * (halfPeri - triangle.sideC));
  return result;
}
// console.log(areaTri(triangleA));

const isObtuse = function (triangle) {
  let shorterSides = [];
  let longerSide;
  if (triangle.sideA <= triangle.sideB) {
    shorterSides.push(triangle.sideA);
    if (triangle.sideC <= triangle.sideB) {
      shorterSides.push(triangle.sideC);
      longerSide = triangle.sideB;
    } else {
      shorterSides.push(triangle.sideB);
      longerSide = triangle.sideC;
    }
  } else {
    shorterSides.push(triangle.sideB, triangle.sideC);
    longerSide = triangle.sideA;
  }

  if ((shorterSides[0] * shorterSides[0]) + (shorterSides[1] * shorterSides[1]) < (longerSide * longerSide)) {
    return true;
  } else {
    return false;
  }
}
// console.log(isObtuse(triangleA));

// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55
// ```

const cart1 = {
  instantNoddle: '1.99',
  washingLiquid: '5.59',
  upAndGo: '6.54',
  banana: '2.50'
};

const valueCart1 = Object.values(cart1);

const cashRegister = function (cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += Number(cart[i]);
  }
  console.log(`The total price: ${total}`);
  return total;
}

// cashRegister(valueCart1);
//
// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
// // Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16


const invalidNum = [1111111111111111,
                    2222222222222222,
                    3333333333333333,
                    4444444444444444,
                    5555555555555555,
                    6666666666666666,
                    7777777777777777,
                    8888888888888888,
                    9999999999999999,
                    0000000000000000];

const numTotalFromString = function (numAsString) {
  let numArray = [];
  let numTotal = 0;

  for (let i = 0; i < numAsString.length; i++) {
    numArray.push(numAsString[i]);
    numTotal += Number(numArray[i]);
  }
  return numTotal;
}

// console.log(numTotalFromString('12345'));


// Remove dash from  userinput
const removeDash = function (numAsString) {
  let newString = '';
  for (let i = 0; i < numAsString.length; i++) {
    if (numAsString[i] !== '-') {
      newString += numAsString[i];
    };
  };
  return newString;
}
// console.log(removeDash('9999-9999-8888-0000'));


// ## MAIN FUNCTION
const validateCreditCard = function (userInput) {
  // remove dash from userInput
  const numAsString = removeDash(userInput);
  const num = Number(numAsString);
  let result = false;

// - Number must be 16 digits, all of them must be numbers
  if (Number.isInteger(num) !== true) {
    console.log('Invalid characters');
  } else {
    if (numAsString.length !== 16) {
      console.log('Number of digits must be 16');
    } else {
      // - You must have at least two different digits represented (all of the digits cannot be the same)
      if (invalidNum.includes(num) == true) {
        console.log('All digits cannot be the same');
      } else {
        // - The sum of all the digits must be greater than 16
        if (numTotalFromString(numAsString) <= 16) {
          console.log('The sum of all the digits must be greater than 16');
        } else {
          // - The final digit must be even
          if (num % 2 !== 0) {
            console.log('The final digit must be even');
          } else {
            console.log('This number is valid!');
            result = true;
          }
        }
      }
    }
  }
  return result;
}


console.log(validateCreditCard('4444-4444-4444-4444'));
console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('a923-3211-9c01-1112'));
console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('6666-6666-6666-1666'));



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




// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//

const bank = [
  {currentBalance: 100, name: 'Mai'},
  {currentBalance: 150, name: 'Dom'},
];

let bankSumBalance = function (bank) {
  let sumBalance = 0;
  for (let i = 0; i < bank.length; i++) {
    sumBalance += bank[i].currentBalance;
  }
  console.log(sumBalance);
  return sumBalance;
};

bankSumBalance(bank);

const addAccount = function (newAccount) {
  bank.push(newAccount);
  console.log(bank);
  return bank;
}

addAccount({currentBalance: 200, name: 'Lan'});




// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// ## Additional
//
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.
