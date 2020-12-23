// #Title: ATM App
//
// ###Type:
// - Lab
//
// ###Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.
//
// ###Objectives:
// - DOM selection, appending, removal, updating
//
// ###Specification:
//
// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  formattedBalance() {
    return '$' + this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    return balance;
  }

  withdraw(amount) {
    let amountWithdrew = min(amount, this.balance);
    this.balance -= amountWithdrew
    return amountWithdrew;
  }
}

let checkingAccount = new Account("Checking", 0);
let savingsAccount = new Account("Savings", 0);
const totalBalance = function() {
  let totalBalance = checkingAccount.balance + savingsAccount.balance;
  return totalBalance;
}

// Function to check the input amount
const inputAmount = function (account) {
  let result = 0;

  if (account === checkingAccount) {
    result = parseInt($('#checking-amount').val());

  } else if (account === savingsAccount) {
    result = parseInt($('#savings-amount').val());
  };

  // make sure the input amount is greater than 0
  if (!result || result <= 0) {
    alert('Please enter the amount that is greater than 0.');
    result = 0;
  }

  return result;
}

// Function to log the account balance

const updateAccountBalanceUI = function (account) {

  let component;
  if (account === checkingAccount) {
    component = $('#checking-balance');
  } else if (account === savingsAccount) {
    component = $('#savings-balance');
  }

  if (component) {
    component.html(account.formattedBalance);
  }

  // Update component class to reflect zero value
  if (checkingBalance === 0) { // check for checking account
    component.addClass('zero');
  } else {
    component.removeClass('zero');
  };
}

const updateBalanceUI = function () {
  updateAccountBalanceUI(checkingAccount);
  updateAccountBalanceUI(savingsAccount);
}

  // overdraft functions

  const overdraftFunction = function (account, amount) {
    let overdraft = 0;

    if (account === "checking") {
      overdraft = parseInt(amount) - checkingBalance;
      checkingBalance = 0;
      savingsBalance -= overdraft;

    } else if (account === "savings") {
      overdraft = parseInt(amount) - savingsBalance;
      savingsBalance = 0;
      checkingBalance -= overdraft;
    }

      logAccountBalance("checking");
      logAccountBalance("savings");
  };

  // Function to reset the input form after submitting

  // const formReset = function (account) {
  //   if (account === 'checking') {
  //     $('#checking-amount').reset();
  //   } else if (account === 'savings') {
  //     $('#savings-amount').reset();
  //   }
  // }

/// ## MAIN FUNCTION ##

$(document).ready( function () {

  // CHECKING BOX ---------------------------

  updateBalanceUI();

  // ---- deposit button
  $('#checking-deposit').on("click", function () {

    const depositAmount = inputAmount(checkingAccount); // pass number value

    checkingAccount.deposit(depositAmount);   // add up the deposit to balance
    updateAccountBalanceUI(checkingAccount);
  })

// ------------ withdraw button

  $('#checking-withdraw').on("click", function () {
    const withdraw = inputAmount("checking"); // pass number value

    if (withdraw <= checkingBalance  && withdraw >= 0) { //check the input number in greater 0 and lesser than Balance
      checkingBalance -= withdraw;
      logAccountBalance("checking");
    //check if the input amount is more than current account balance but less than total balance
    } else if (withdraw > checkingBalance && withdraw <= totalBalance) {
      overdraftFunction("checking", withdraw);
    }

    currentTotalBalance();
    checkZero();

  })


  // SAVINGS BOX --------------------------------------------

//--------- deposit button
  $('#savings-deposit').on("click", function () {

    const depositAmount = inputAmount(savingsAccount); // pass number value

    checkingAccount.deposit(depositAmount);   // add up the deposit to balance
    updateAccountBalanceUI(checkingAccount);
  })

// ----------withdraw button
  $('#savings-withdraw').on("click", function () {

    const withdraw = inputAmount("savings"); // pass number value

    if (withdraw <= savingsBalance && withdraw >= 0) { //check the input amount in greater 0 and lesser than Balance
      savingsBalance -= withdraw; // update balance
      logAccountBalance("savings");

      //check if the input amount is more than current account balance but less than total balance
    } else if (withdraw > savingsBalance && withdraw <= totalBalance) {
      overdraftFunction("savings", withdraw);
    };

    currentTotalBalance();
    checkZero();

  })



//--------- end here -----------
});
