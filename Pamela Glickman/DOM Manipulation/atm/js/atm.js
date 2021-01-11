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
    balances.checking +=parseInt($("#checking-amount").val());
    $("#checking-balance").text(`$${ balances.checking }`)
  } else {
    //Deposits in savings account
    balances.savings +=parseInt($("#savings-amount").val());
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
  const amount = parseInt($("#checking-amount").val());
    if (balances.checking >= amount) {
      balances.checking -=parseInt($("#checking-amount").val());
    } else if (totalBalance > amount) {
      balances.savings-=amount-balances.checking;
      balances.checking = 0;
      }
    }  else {
    //Withdraws from savings accounts
    const amount = parseInt($("#savings-amount").val());
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
      $(this).css("background-color", "#c00");
    } else {
      $(this).css("background-color", "#e3e3e3");
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
