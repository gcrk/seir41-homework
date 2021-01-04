$( document ).ready(function() { // Document ready so scripts can be placed at

// BALANCE DEFINITIONS

  let checkingBalance;
  let savingsBalance;

// DEPOSIT FUNCTION

  let depositFunc = function (type1, balance1) {

    let input = Number($(`#${type1}-amount`).val()); // define input variable with selected account type input value

    balance1 = balance1 + input; // add input to balance
    $(`#${type1}-balance`).text('$' + balance1); // write updated balance to page

    if (balance1 > 0) {
    $(`#${type1}`).removeClass('zero'); // remove alert class styling if user inputs value from 0 balance
    }

  };

// WITHDRAW FUNCTION

  let withdrawFunc = function (type1, balance1, type2, balance2) {

    let input = Number($(`#${type1}-amount`).val()); // define input variable with selected account type input value

    if (balance1 > 0 && balance1 >= input) { // if balance is greater than 0 as well as the input (or equal to input), subtract input value from balance.
      balance1 = balance1 - input;
      $(`#${type1}-balance`).text('$' + balance1);
    }

    if (input > balance1 && (balance1 + balance2) >= input) { // if input is greater than balance and combined account total is greater than or equal to the input value, subtract total amount from first account then remove remaining value left to withdraw from other account and subtract this remaining value from this account balance.
      balance2 = balance2 - (input - balance1);
      balance1 = 0;
      $(`#${type1}-balance`).text('$' + balance1);
      $(`#${type2}-balance`).text('$' + balance2);
    }

    // conditions above mean that if input is greater than the total of all accounts, don't to a thing.

    if (balance1 <= 0) { // if balance is 0, add zero class to show alert to user
      $(`#${type1}`).addClass('zero');
    }

    if (balance2 <= 0) { // if balance is 0, add zero class to show alert to user
      $(`#${type2}`).addClass('zero');
    }

  };


////// CHECKING ACCOUNT - DEPOSIT AND WITHDRAW FUNCTIONS //////

  $(`#checking-deposit`).on('click', function () {

    checkingBalance = Number($('#checking-balance').html().substring(1));

    depositFunc('checking', checkingBalance);

  });

  $('#checking-withdraw').on('click', function () {

    checkingBalance = Number($('#checking-balance').html().substring(1));

    savingsBalance = Number($('#savings-balance').html().substring(1));

    withdrawFunc('checking', checkingBalance, 'savings', savingsBalance);

  });

////// SAVINGS ACCOUNT - DEPOSIT AND WITHDRAW FUNCTIONS //////

// DEPOSIT

  $('#savings-deposit').on('click', function () {

    savingsBalance = Number($('#savings-balance').html().substring(1));

    depositFunc('savings', savingsBalance);

  });

// WITHDRAW - REMOVE INPUT FROM savingsBalance

  $('#savings-withdraw').on('click', function () {

    checkingBalance = Number($('#checking-balance').html().substring(1));

    savingsBalance = Number($('#savings-balance').html().substring(1));

    withdrawFunc('savings', savingsBalance, 'checking', checkingBalance);

  });

});

// IDEAS
// 1. Make the savings and checking id's an array where the values of the array (1 for each savings and checking) are the ID names of the buttons, input fields and balance elements. Make them relative to each other so that we can dynamically populate 1 set of conditions that we inject the relevant IDs in there.

// Note that we may need to create a loop to cycle through buttons/fields.

// First - I tried to add another click function to define the value of a variable to assign either 0 or 1 to a dynamic array callout, which would be either savings or checking that could then

// Second - I tried to remove the functions from the click tracking so that I could wreit them only once and populate the different aspects of the function that are unique to the each savings or checking account functions. Therefore the idea is to write them out as individual functions and pass in the unique variables to each account this way.

// TO DO

// - Pull out the 2 common functions for withdrawing and depositing money. In each of these functions determine the changing elements and represent these as arguments within the function
// - Call all buttons beneath these definitions to each of the 4 buttons and call the functions with relevant arguments accordingly.
