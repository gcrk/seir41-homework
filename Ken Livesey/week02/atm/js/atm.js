console.log("Hello world", $.fn.jquery);
/*
###Type:
- Lab

###Summary
- This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
- You'll be selecting elements, manipulating HTML, and manipulating style along
with building out the logic using JavaScript.

###Objectives:
- DOM selection, appending, removal, updating

###Specification:

* Keep track of the checking and savings balances somewhere
* Add functionality so that a user can deposit money into one of the bank accounts.
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Add functionality so that a user can withdraw money from one of the bank accounts.
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Make sure the balance in an account can't go negative. If a user tries to
withdraw more money than exists in the account, ignore the transaction.
* When the balance of the bank account is $0 the background of that bank account
should be red. It should be gray when there is money in the account.
* What happens when the user wants to withdraw more money from the checking
account than is in the account? These accounts have overdraft protection, so if
a withdrawal can be covered by the balances in both accounts, take the checking
balance down to $0 and take the rest of the withdrawal from the savings account.
If the withdrawal amount is more than the combined account balance, ignore it.
* Make sure there is overdraft protection going both ways.
* Are there ways to refactor your code to make it DRYer?
*/

$( document ).ready ( function() {

  const sumTotal = function() {
    //get the previous balance of this account & store it
    let prevBalance = $(this).siblings('div.balance');
    let result = prevBalance.text();

    //remove $ sign
    let currentBalance = parseInt(result.replace('$', '' ) );

    //get the value from the user input & set as the newDeposit
    let newDeposit = parseInt( $(this).siblings('input').val() );

    //add newDeposit to text content of the account
    $(prevBalance).text( function() {
      let total = newDeposit + currentBalance;
      return '$' + total;
    });

    //clear user input from entry field
    $(this).siblings(':text').val('');

    //change colour of background when a deposit is made
    $(this).siblings('div.balance').css('background-color', 'E3E3E3');
  };

  //create the accountBalance
  let accountBalance;
  const sumAccBalance = function (){
    let checkTemp = $( '#checking-balance' ).text();
    let checkingBalance = parseInt( checkTemp.replace('$', '') );
    let savingsTemp = $( '#savings-balance' ).text();
    let savingsBalance = parseInt( savingsTemp.replace('$', '') );
    accountBalance = checkingBalance + savingsBalance;
    return accountBalance;
  };

  //create the withdrawal
  const minusTotal = function () {
    // let accountBalance;

    //get the current balance of the account we are accessing
    let prevBalance = $( this ).siblings( 'div.balance' );
    let result = prevBalance.text();

    //remove the $, turn into an integer
    let currentBalance = parseInt( result.replace( '$', '' ) );

    //get the user value integer to withdraw from account
    let newWithdrawal = parseInt( $( this ).siblings( 'input' ).val() );

    //subtract value of html from div.balance
    $( prevBalance ).text( function() {
      let total = currentBalance - newWithdrawal;
      return '$' + total;
    });

  if ( $( this ) == $( this ).val('Withdraw') ) {

    //if not enough in accountBalance ignore the withdrawl
    if ( accountBalance > 0 ) {
      return '$' + accountBalance;
    } else {
      return '$' + currentBalance;
    }

  //if withdrawal exceeds acc amount, this runs
  } else if ( newWithdrawal > accountBalance ) {
    alert( 'Insufficient funds available' );
  } else {

    //if the total is > 0, display the new total
    if ( accountBalance > 0 ) {
      return '$' + accountBalance;

    //if overdraft, run from here
    } else {
      let confirmOverdraft = confirm( 'Do you want to overdraw your account?' );
      if ( confirmOverdraft == true ) {

        //set the savings balance to the overdraft amount
        $( '#savings-balance' ).text( function (){

          //get the current balance
          let tempBalance = $( '#savings-balance' ).text();
          let currentBalance = parseInt( tempBalance.replace('$', '') );

          //sum balance & total to get new balance
          let overDraft = currentBalance + accountBalance;

          //new savings account balance
          return '$' + overDraft;
        });

        //change checking balance to 0
        $( this ).siblings( 'div.balance' ).css( 'background-color', 'red' );
        return '$' + 0;
      }
    }
  }
  };

  $( '#checking-deposit' ).on( 'click', sumTotal );
  $( '#savings-deposit' ).on( 'click', sumTotal );
  $( '#checking-withdraw' ).on( 'click', minusTotal );
  $( '#savings-withdraw' ).on( 'click', minusTotal );


});
