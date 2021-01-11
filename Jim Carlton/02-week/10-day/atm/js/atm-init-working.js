$( document ).ready(function() { // Document ready so scripts can be placed at

//////////////////// GLOBAL VARIABLES //////////////////

// CHECKING BALANCE DEFINITION

 let checkingBalance = Number($('#checking-balance').html().substring(1));

// SAVINGS BALANCE DEFINITION

 let savingsBalance = Number($('#savings-balance').html().substring(1));


////// CHECKING ACCOUNT - GET BALANCE AND TAKE INPUT //////

// DEPOSIT - ADD INPUT TO checkingBalance

 $('#checking-deposit').on('click', function () {

    let input = Number($('#checking-amount').val());

    checkingBalance = checkingBalance + input;
    $('#checking-balance').text('$' + checkingBalance);

    if (checkingBalance > 0) {
    $('#checking').removeClass('zero');
    }

    console.log(checkingBalance);

  });

// WITHDRAW - REMOVE INPUT FROM checkingBalance

 $('#checking-withdraw').on('click', function () {

    let input = Number($('#checking-amount').val());

    if (checkingBalance > 0 && checkingBalance >= input) {
      checkingBalance = checkingBalance - input;
      $('#checking-balance').text('$' + checkingBalance);
      console.log(checkingBalance);
    }

    if (input > checkingBalance && (savingsBalance + checkingBalance) >= input) {
      savingsBalance = savingsBalance - (input - checkingBalance);
      checkingBalance = 0;
      $('#savings-balance').text('$' + savingsBalance);
      $('#checking-balance').text('$' + checkingBalance);
    }

    if (input > (savingsBalance + checkingBalance)) {
      checkingBalance = checkingBalance;
      savingsBalance = savingsBalance;
      $('#savings-balance').text('$' + savingsBalance);
      $('#checking-balance').text('$' + checkingBalance);
      console.log('if input is greater than savings + checking balances combined');
    }

    if (checkingBalance <= 0) {
      $('#checking').addClass('zero');
    }

    if (savingsBalance <= 0) {
      $('#savings').addClass('zero');
    }

  });


////// SAVINGS ACCOUNT - GET BALANCE AND TAKE INPUT //////

// DEPOSIT - ADD INPUT TO savingsBalance

 $('#savings-deposit').on('click', function () {

    let input = Number($('#savings-amount').val());

    savingsBalance = savingsBalance + input;
    $('#savings-balance').text('$' + savingsBalance);

    if (savingsBalance > 0) {
      $('#savings').removeClass('zero');
    }

    console.log(savingsBalance);

  });

// WITHDRAW - REMOVE INPUT FROM savingsBalance

 $('#savings-withdraw').on('click', function () {

    let input = Number($('#savings-amount').val());

    if (savingsBalance > 0 && savingsBalance >= input) {
      savingsBalance = savingsBalance - input;
      $('#savings-balance').text('$' + savingsBalance);
    }

    if (input > savingsBalance && (savingsBalance + checkingBalance) >= input) {
      checkingBalance = checkingBalance - (input - savingsBalance);
      savingsBalance = 0;
      $('#savings-balance').text('$' + savingsBalance);
      $('#checking-balance').text('$' + checkingBalance);
      console.log('withdraw from checking as well');
    }

    if (input > (savingsBalance + checkingBalance)) {
      savingsBalance = savingsBalance;
      checkingBalance = checkingBalance;
      $('#savings-balance').text('$' + savingsBalance);
      $('#checking-balance').text('$' + checkingBalance);
      console.log('if input is greater than savings + checking balances combined');
    }

    if (savingsBalance <= 0) {
      $('#savings').addClass('zero');
    }

    if (checkingBalance <= 0) {
      $('#checking').addClass('zero');
    }

  });


});
