//Possible Improvements
//1. Prevent null inputs
//2. Split up the massive withdraw function

// * Keep track of the checking and savings balances somewhere

const balances = {
  checking: 0,
  savings: 0
}

// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.

//Refactored Deposit function (was originally one function for each account)
const deposit = function(event) {
  if (event.currentTarget.id === "checking-deposit"){
    //Deposits in checking account
    balances.checking +=Number($("#checking-amount").val());
    $("#checking-balance").text(`$${ balances.checking }`)
  } else {
    //Deposits in savings account
    balances.savings +=Number($("#savings-amount").val());
    $("#savings-balance").text(`$${ balances.savings }`)
  }
  setBkg();
}

// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.

//Refactored Withdraw function (was originally one function for each account)
//Probably needs to be split into more functions
const withdraw = function(event) {
  const totalBalance = balances.checking + balances.savings;
  if (event.currentTarget.id === "checking-withdraw"){
  //Withdraws from checking account
  const amount = Number($("#checking-amount").val());
    if (balances.checking >= amount) {
      balances.checking -=Number($("#checking-amount").val());
    } else if (totalBalance > amount) {
      balances.savings-=amount-balances.checking;
      balances.checking = 0;
      }
    }  else {
    //Withdraws from savings accounts
    const amount = Number($("#savings-amount").val());
    if (balances.savings >= amount) {
      balances.savings-=amount;
    } else if (totalBalance > amount) {
      balances.checking-=amount-balances.savings;
      balances.savings = 0;
    }
  }
  $("#checking-balance").text(`$${ balances.checking }`);
  $("#savings-balance").text(`$${ balances.savings }`);
  setBkg();
}

// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account

//Controls the background colors of the accounts (originally one function for each account)
const setBkg = function() {
  $('.balance').each( function(i) {
    if (Object.values(balances)[i] <= 0) {
      $(this).addClass("zero");
    } else {
      $(this).removeClass("zero");
    }
  })
}

// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.

// * Are there ways to refactor your code to make it DRYer?

$(document).ready( function() {
  setBkg();
  $("input[value='Deposit']").on("click", deposit);
  $("input[value='Withdraw']").on("click", withdraw);
})

//Joel's Version 1

// const checkForZero = function() {
//   $('.zero').removeClass('zero');
//
//   const checkingBalance = + $('#checking-balance').text().slice(1);
//   if (checkingBalance <= 0) {
//     $('#checking-balance').addClass('zero');
//   }
//
//   const savingsBalance = + $('#savings-balance').text().slice(1);
//   if (savingsBalance <= 0) {
//     $('#savings-balance').addClass('zero');
//   }
// }
//
// $(document).ready( function() {
//   $('#checking-deposit').on('click', function() {
//       const deposit = $('#checking-amount').val();
//       const currentBalance = + $('#checking-balance').text().slice(1);
//       const newBalance = currentBalance + deposit;
//       $('#checking-balance').text('$' + newBalance); //setter
//       checkForZero();
//   });
//
//   $('#checking-withdraw').on('click', function() {
//     const amount = + $('#checking-amount').val();
//     const currentBalance = + $('#checking-balance').text().slice(1);
//
//     const otherBalance = + $('#savings-balance').text().slice(1);
//     const totalBalance = currentBalance + otherBalance;
//
//     const newBalance = currentBalance - amount;
//
//     if (newBalance >= 0) {
//       $('#checking-balance').text('$' + newBalance);
//     } else if (amount <= totalBalance) {
//       $('#checking-balance').text('$0');
//       // Here newBalance is the negative money that didn't exist in the this account.
//       $('#savings-balance').text( otherBalance + newBalance);
//     }
//     $('#checking-balance').text('$' + newBalance);
//      checkForZero();
//   });
//
//   $('#savings-deposit').on('click', function() {
//       const deposit = $('#savings-amount').val();
//       const currentBalance = + $('#savings-balance').text().slice(1);
//       const newBalance = currentBalance + deposit;
//       $('#savings-balance').text('$' + newBalance);
//        checkForZero();
//   });
//
//   $('#savings-withdraw').on('click', function() {
//     const amount = + $('#savings-amount').val();
//     const currentBalance = + $('#savings-balance').text().slice(1);
//
//     const otherBalance = + $('#checking-balance').text().slice(1);
//     const totalBalance = currentBalance + otherBalance;
//
//     const newBalance = currentBalance - amount;
//
//     if (newBalance >= 0) {
//       $('#savings-balance').text('$' + newBalance);
//     } else if (amount <= totalBalance) {
//       $('#savings-balance').text('$0');
//       // Here newBalance is the negative money that didn't exist in the this account.
//       $('#checking-balance').text( otherBalance + newBalance);
//     }
//     $('#savings-balance').text('$' + newBalance);
//      checkForZero();
//   });
//
// });

// Joel's Version 2

// accounts.js

// Our accounts object is solely concerned with rules for bank accounts

// It is the single source of truth for balances.

// It knows how to handle overdraft protection

// This code has never heard of the DOM

// const accounts = {
//   checkingBalance: 0,
//   savingsBalance: 0,
//
//   total: function() {
//     return this.checkingBalance + this.savingsBalance;
//   }
//
//   checkingDeposit: function (amount) {
//     this.checkingBalance += Number(amount);
//   },
//
//   checkingWithdraw: function (amount) {
//     amount = Number(amount);
//     if (amount <= this.checkingBalance) {
//       this.checkingBalance -= amount;
//     } else if (amount < this.total()) {
//       const difference = amount - this.checkingBalance;
//       this.checkingBalance = 0;
//       this.savingsBalance -= difference;
//     }
//   },
//
//   savingsDeposit: function (amount) {
//     this.savingsBalance += Number(amount);
//   },
//
//   savingsDeposit: function (amount) {
//     this.savingBalance -= Number(amount);
//   }
// }
//
// atm.js

// This code knows nothing about overdraft protection or negative balances.

// It simply connects DOM elements to logical/business functions defined elsewhere.

// Our handy render() function updates every single part of the DOM with the
// latest values from our accounts oject.

// const render = function() {
//     $('#checkingBalance').text('$' + accounts.checkingBalance);
//     $('#savingBalance').text('$' + accounts.savingBalance);
//
//     $('.zero').removeClass('zero');
//
//     if (accounts.checkingBalance <= 0) {
//       $('#checking-balance').addClass('zero');
//     }
//
//     if (accounts.savingsBalance <= 0) {
//       $('#savings-balance').addClass('zero');
//     }
// }
//
// $(document).ready(function () {
//   render();
//
//   $('#checking-deposit').on('click', function() {
//     const amount = $('#checking-amount').val();
//     accounts.checkingDeposit(amount);
//     render();
//   });
//
//   $('#checking-withdraw').on('click', function() {
//     const amount = $('#checking-amount').val();
//     accounts.checkingWithdraw(amount);
//     render();
//   });
//
//   $('#savings-deposit').on('click', function() {
//     const amount = $('#savings-amount').val();
//     accounts.savingsDeposit(amount);
//     render();
//   });
//
//   $('#savings-withdraw').on('click', function() {
//     const amount = $('#savings-withdraw').val();
//     accounts.savingsWithdraw(amount);
//     render();
//   });
// })
