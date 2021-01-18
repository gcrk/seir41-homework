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

const isSquare = function(rectangle) {
  if (rectangle.length === rectangle.width) {
    return true;
  }
  return false;
}

const rectArea = function(rectangle) {
  const area = rectangle.length * rectangle.width;
  return area;
}

const perimeter = function(rectangle) {
  const p = 2 * (rectangle.length + rectangle.width);
  return p;
}

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
//
const isEquilateral = function(triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
    return true;
  }
  return false;
}

const isIsosceles = function(triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
    console.log("The triangle is equilateral.")
    return false;
  }
  if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideA === triangle.sideC) {
    return true;
  }
  return false;
}

const triArea = function(triangle) {
  //Define constants
  const a = triangle.sideA;
  const b = triangle.sideA;
  const c = triangle.sideA;
  const p = a + b + c;
  //Calculate area
  const area = Math.sqrt( p * ( p - a) * ( p - b) * ( p - c) ); //Heron's formula
  return Math.round(area);
}

//An obtuse triangle has an angle greater than 90 degrees. If the hypotensus
//squared is greater than the squares of the smaller sides added together
//(i.e. C^2 > A^2 + B^2), then an angle greater than 90 degrees must be present
//according to Pythagorus's theorem

//See: https://www.murrieta.k12.ca.us/cms/lib5/CA01000508/Centricity/Domain/1830/T4.5.pdf

const isObtuse = function(triangle) {
  //Work out which side is the hypotensus and which aren't
  let hypo = triangle.sideA;
  const notHypo = [];
  if (triangle.sideB > triangle.sideA) {
    notHypo.push(triangle.sideA);
    hypo = triangle.sideB;
  } else {
    notHypo.push(triangle.sideB);
  }
  if (triangle.sideC > hypo) {
    notHypo.push(hypo);
    hypo = triangle.sideC;
  }  else {
    notHypo.push(triangle.sideC);
  }
  //Determine if the triangle is obtuse using the Pythagorean theorem
  if (hypo**2 > notHypo[0]**2 + notHypo[1]**2) {
    return true;
  }
  return false;
};


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
// cashRegister(cartForParty)); // 60.5
// ```

const cashRegister = function(shoppingCart) {
  const priceList = Object.values(shoppingCart);
  let totalPrice = 0;
  for ( let i=0 ; i < priceList.length ; i++) {
     price = parseFloat(priceList[i], 10);
     totalPrice += price;
  }
  return totalPrice;
}

//
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
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.


const myCard = {
  identity: '2234-5678-9812-3456',
  expiryDate: new Date(2025, 11, 8)
}

const validateCreditCard = function(creditCard) {

  //Define Result Object
  const result = {
    valid: true,
    number: creditCard.identity
  }

  //Remove hyphens
  const numString = creditCard.identity.replace(/-/g, "");

  //Test expiryDate against currentDate
  if (Date() < String(creditCard.expiryDate)) {
    result.valid = false;
    result.error = 'card_expired';
    return result;
  }

  //Test if there are 16 digits
  if (numString.length !== 16) {
    result.valid = false;
    result.error = 'wrong_length';
    return result;
  }

  //Test if all the digits are numbers
  for ( let i =0; i < numString.length; i++) {
      const digit  = parseInt(numString.charAt(i));
      if (Number.isInteger(digit) === false) {
        result.valid = false;
        result.error = 'not_a_number';
        return result;
      }
    }

  //Test if all the digits are the same
  const firstValue = numString[0];
  let allNumsEqual = true;
  for ( let i =0; i < numString.length; i++) {
    if (numString[i] !== firstValue) {
      allNumsEqual = false;
      break;
    }
  }
  if (allNumsEqual) {
      result.valid = false;
      result.error = 'all_nums_the_same';
      return result;
    }

  //Sum up the digits
  let fullTotal = 0;
  for ( let i =0; i < numString.length; i++) {
    const digit = parseInt(numString[i]);
    fullTotal += digit;
  }
    //Check if the sum the digits is greater than 16
  if (fullTotal <= 16) {
    result.valid = false;
    result.error = 'wrong_sum';
    return result;
  }

  //Bonus Condition: Sum up every even number
  let evenPositionTotal = 0;
  for ( let i =1; i < numString.length; i += 2) {
    const digit = parseInt(numString[i]);
    evenPositionTotal += digit;
  }

  //Check if the total is divisble by 10
  if (evenPositionTotal % 10 !== 0) {
    result.valid = false;
    result.error = 'wrong_even_sum';
    return result;
  }

  //Bonus Condition: Sum up every odd number
  let oddPositionTotal = 0;
  for ( let i =0; i < numString.length; i += 2) {
    const digit = parseInt(numString[i]);
    oddPositionTotal += digit;
  }

  //Check if the total is divisble by 7
  if (oddPositionTotal % 7 !== 0) {
    result.valid = false;
    result.error = 'wrong_odd_sum';
    return result;
  }

  //Check if the last digit is even
  if (numString.charAt(15) % 2 !== 0) {
    result.valid = false;
    result.error = 'odd_number';
    return result;
  }
  return result;
}

//
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
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

//Bank array with Accounts
const bank = {
  totalSum: function() {
    let total = 0;
    for (let i=0; i < this.accounts.length; i++) {
      total += this.accounts[i].currentBalance;
    }
    console.log(`The bank has a total of $${ total }.`);
    return total;
  },
  addAccount: function(name, amount) {
    if (amount < 0) {
      console.log("Cannot create a negative balance.");
      return;
    }
    const newAccount = {
      ownerName: name,
      currentBalance: amount,
      deposit: function(amount) {
        this.currentBalance += amount;
        console.log(`${ this.ownerName } deposited $${ amount } and now has a balance of ${ this.currentBalance }.`);
        return this.currentBalance;
      },
      withdraw: function(amount) {
        if (this.currentBalance < amount) {
          console.log("Cannot withraw more than the account balance.");
          return;
        }
        this.currentBalance -= amount;
        console.log(`${ this.ownerName } withdrew $${ amount } and now has a balance of ${ this.currentBalance }.`);
        return this.currentBalance;
      }
    }
    this.accounts.push(newAccount);
    console.log(`${ name } opened an account with $${ amount }.`);
    return this.accounts;
  },
  transfer: function(sender, receiver, amount) {
    const sendingAccount = this.accounts.filter(account => account.ownerName === sender)[0];
    sendingAccount.withdraw(amount);
    const receivingAccount = this.accounts.filter(account => account.ownerName === sender)[0];
    receivingAccount.deposit(amount);
    console.log(`${ sender } has sent $${ amount } to ${ receiver }`);
    return sendingAccount.currentBalance;
  },
  accounts: []
}

//add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
bank.addAccount("Pamela", 4000);
bank.addAccount("Anita", 2000);
bank.totalSum();
bank.accounts[0].withdraw(1000);
bank.accounts[1].deposit(200);
bank.accounts[1].withdraw(500);
bank.accounts[0].deposit(500);
bank.transfer("Pamela", "Anita", 300);
bank.totalSum();

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
