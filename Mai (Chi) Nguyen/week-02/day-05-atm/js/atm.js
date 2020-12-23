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

let checkingBalance = 0;
let savingsBalance = 0;
let totalBalance = 0;

// Function to check input amount
const inputAmount = function (account) {
  let result = 0;

  if (account === checking) {
    result = parseInt($('#checking-amount').val());
  } else if (account === savings) {
    result = parseInt($('#savings-amount').val());
  }

  return result;
}

// Function to check current total balance
const checkTotalBalance = function () {
  totalBalance = checkingBalance + savingsBalance;
  return totalBalance;
};

// Function that check if balance is Zero
  const checkZero = function (account) {
    if (account === checking) {
      if (checkingBalance === 0) {
        $('#checking-balance').addClass('zero');
      } else {
        $('#checking-balance').removeClass('zero');
      };
    } else if (account === savings) {
      if (savingsBalance === 0) {
        $('#savings-balance').addClass('zero');
      } else {
        $('#savings-balance').removeClass('zero');
      };
    }
  }

  // Function to log the account balance

  const logAccountBalance = function (account) {
    if (account === checking) {
      $('#checking-balance').html('$' + checkingBalance);
    } else if (account === savings) {
      $('#savings-balance').html('$' + savingsBalance);
    }
  }

  // overdraft functions

  const overdraftFunction = function (amount) {
      let overdraft = parseInt(amount) - checkingBalance;
      savingsBalance -= overdraft;
      checkingBalance = 0;
      logAccountBalance(checking);
      logAccountBalance(savings);
  };

$(document).ready( function () {
  // const zeroBalance = function (num) {
  //   if (num === 0) {
  //     $()
  //   }
  // }

  // CHECKING BOX ---------------------------


  checkZero(checking);
  checkZero(savings);


  // ---- deposit button
  $('#checking-deposit').on("click", function () {

    let deposit = inputAmount(checking); // pass number value


    if (deposit && deposit >= 0) { //check whether there is a number in the input and greater 0
      checkingBalance += deposit;   // add up the deposit to balance
      logAccountBalance(checking); // put the output to UI
    }
    checkTotalBalance();
    checkZero(checking);
  })

// ------------ withdraw button
  $('#checking-withdraw').on("click", function () {
    let withdraw = inputAmount(checking); // pass number value

    if (withdraw <= checkingBalance  && withdraw >= 0) { //check the input number in greater 0 and lesser than Balance
      checkingBalance -= withdraw;
      logAccountBalance(checking);

    } else if (withdraw > checkingBalance && withdraw <= totalBalance) {
      overdraftFunction();
    }
    checkTotalBalance();
    checkZero(checking);
  })


  // SAVINGS BOX --------------------------------------------



//--------- deposit button
  $('#savings-deposit').on("click", function () {
    let deposit = inputAmount(savings); // pass number value

    if (deposit && deposit >= 0) { //check whether there is a number in the input and greater 0
      savingsBalance += deposit;   // add up the deposit to balance
      logAccountBalance(savings); // log current balance to UI
    }
    checkTotalBalance();
    checkZero(savings);
  })

// ----------withdraw button
  $('#savings-withdraw').on("click", function () {

    let withdraw = inputAmount(savings); // pass number value

    if (withdraw <= savingsBalance && withdraw >= 0) { //check the input number in greater 0 and lesser than Balance
      savingsBalance -= withdraw;
      logAccountBalance(savings);
    } else if (withdraw > savingsBalance && withdraw <= totalBalance) {
      overdraftFunction();
    };
    checkTotalBalance();
    checkZero(savings);
  })

  //-----------------overdraft----------





//--------- end here -----------
});
