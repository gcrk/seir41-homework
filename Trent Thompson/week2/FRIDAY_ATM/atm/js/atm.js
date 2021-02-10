const checkForZero = function () {
  $('.zero').removeClass('zero');

  const checkingBalance = + $('#checking-balance').text().slice(1);
  if (checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }

  const savingsBalance = + $('#savings-balance').text().slice(1);
  if (savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }
};

$(document).ready(function () {
  checkForZero();
  $('#checking-deposit').on('click', function () {
    const deposit = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);
    const newBalance = currentBalance + deposit;
    $('#checking-balance').text('$' + newBalance); // setter
    checkForZero();
  });

  $('#checking-withdraw').on('click', function () {
    const amount = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);

    const otherBalance = + $('#savings-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - amount;

    if (newBalance >= 0) {
      $('#checking-balance').text('$' + newBalance);
    } else if (amount <= totalBalance) {
      $('#checking-balance').text('$0');
      // Here, newBalance is the negative money that didn't exist in this account.
      $('#savings-balance').text( '$' + (otherBalance + newBalance) );
    }
    checkForZero();
  });

  $('#savings-deposit').on('click', function () {
    const deposit = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);
    const newBalance = currentBalance + deposit;
    $('#savings-balance').text('$' + newBalance); // setter
    checkForZero();
  });

  $('#savings-withdraw').on('click', function () {
    const amount = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);

    const otherBalance = + $('#checking-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - amount;

    if (newBalance >= 0) {
      $('#savings-balance').text('$' + newBalance);
    } else if (amount <= totalBalance) {
      $('#savings-balance').text('$0');
      // Here, newBalance is the negative money that didn't exist in this account.
      $('#checking-balance').text( '$' + (otherBalance + newBalance) );
    }
    checkForZero();
  });
});






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
