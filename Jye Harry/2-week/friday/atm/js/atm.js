const accounts = {
  checking: 0,
  savings: 0
}

// created these strings to avoid making a spelling mistake when passing the account name as a parameter
const CHECKING = Object.keys(accounts)[0];
const SAVINGS = Object.keys(accounts)[1];

$(document).ready(function () {
  // set account balances to 0 and update the display with class zero and a $ sign
  toggleZeroClass($('#checking-balance').html('$' + accounts.checking), accounts.checking);
  toggleZeroClass($('#savings-balance').html('$' + accounts.savings), accounts.savings);

  $('#checking-deposit').on('click', function () {
    deposit($('#checking-amount'), CHECKING, $('#checking-balance'));
  })

  $('#savings-deposit').on('click', function () {
    deposit($('#savings-amount'), SAVINGS, $('#savings-balance'));
  })

  $('#checking-withdraw').on('click', function () {
    withdraw($('#checking-amount'), CHECKING, SAVINGS, $('#checking-balance'), $('#savings-balance'));
  })

  $('#savings-withdraw').on('click', function () {
    withdraw($('#savings-amount'), SAVINGS, CHECKING, $('#savings-balance'), $('#checking-balance'));
  })
})

// adds the input amount to the specified account and toggles class zero
const deposit = function ($amount, acc, $accountDiv) {
  accounts[acc] += parseInt($($amount).val());
  // updates the account div and calls toggleZeroClass in one line
  toggleZeroClass($($accountDiv).html('$' + accounts[acc]), accounts[acc]);
}

// makes changes to the specified account by subtracting the amount from the account balance, updates the account div and then calls toggleZeroClass.
// does this all in one line even though it is probably easier to read in multiple lines.
const setAccount = function (amount, acc, $accountDiv) {
  toggleZeroClass($($accountDiv).html('$' + (accounts[acc] -= amount)), accounts[acc]);
}

// withdraws specified amount from specified account.
const withdraw = function ($amount, acc1, acc2, $accountDiv1, $accountDiv2) {
  const amount = parseInt($($amount).val());
  // this difference variable is used if the withdraw amount is greater than the account balance
  const difference = amount - accounts[acc1];
  // check if the amount is available in the account, otherwise check if the difference is available in acc2, otherwise do nothing
  if (amount <= accounts[acc1]) {
    setAccount(amount, acc1, $accountDiv1);
  } else if (difference <= accounts[acc2]) {
    setAccount(difference, acc2, $accountDiv2);
    setAccount(accounts[acc1], acc1, $accountDiv1);
  }
}

// checks if account is equal to 0 then toggles zero class accordingly using a ternary operator (sorry joel)
const toggleZeroClass = function ($accountDiv, bal) {
  bal === 0 ? $($accountDiv).addClass('zero') : $($accountDiv).removeClass('zero');
}
