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


$(document).ready( function () {
  // const zeroBalance = function (num) {
  //   if (num === 0) {
  //     $()
  //   }
  // }

  // checking box
  let checkingBalance = 0;

  const checkZero = function () {
    if (checkingBalance === 0) {
      $('#checking-balance').addClass('zero');
    }
  }
  checkZero();

  // ---- deposit button
  $('#checking-deposit').on("click", function () {
    let deposit = parseInt($('#checking-amount').val()); // pass number value

    if (deposit && deposit >= 0) { //check whether there is a number in the input and greater 0
      checkingBalance += deposit;   // add up the deposit to balance
      $('#checking-balance').html('$' + checkingBalance); // put the output to UI

      if (checkingBalance === 0) {
        $('#checking-balance').addClass('zero');
      } else {
        $('#checking-balance').removeClass('zero');
      };
    }
  })
// ------------ withdraw button
  $('#checking-withdraw').on("click", function () {
    let withdraw = parseInt($('#checking-amount').val()); // pass number value
    let totalBalance = checkingBalance + savingsBalance;

    if (checkingBalance >= withdraw && withdraw >= 0) { //check the input number in greater 0 and lesser than Balance
      checkingBalance -= withdraw;
      $('#checking-balance').html('$' + checkingBalance);
      if (checkingBalance === 0) {
        $('#checking-balance').addClass('zero');
      } else {
        $('#checking-balance').removeClass('zero');
      }
    } else if (withdraw > checkingBalance && withdraw <= totalBalance) {
      savingsBalance = totalBalance - (withdraw - checkingBalance);
      checkingBalance = 0;
      $('#checking-balance').html('$' + checkingBalance);
      $('#savings-balance').html('$' + savingsBalance);
    }
  })


  // savings box

  let savingsBalance = 0;

  if (savingsBalance === 0) {
    $('#savings-balance').addClass('zero');
  }

//--------- deposit
  $('#savings-deposit').on("click", function () {
    let deposit = parseInt($('#savings-amount').val()); // pass number value

    if (deposit && deposit >= 0) { //check whether there is a number in the input and greater 0
      savingsBalance += deposit;   // add up the deposit to balance
      $('#savings-balance').html('$' + savingsBalance); // put the output to UI
      if (savingsBalance === 0) {
        $('#savings-balance').addClass('zero');
      } else {
        $('#savings-balance').removeClass('zero');
      }
    }
  })

// ----------withdraw button
  $('#savings-withdraw').on("click", function () {
    let withdraw = parseInt($('#savings-amount').val()); // pass number value

    if (savingsBalance >= withdraw && withdraw >= 0) { //check the input number in greater 0 and lesser than Balance
      savingsBalance -= withdraw;
      $('#savings-balance').html('$' + savingsBalance);
      if (savingsBalance === 0) {
        $('#savings-balance').addClass('zero');
      } else {
        $('#savings-balance').removeClass('zero');
      }
    }
  })

  //-----------------overdraft----------





//--------- end here -----------
});
