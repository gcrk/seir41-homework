$(document).ready(function () {

const $checkAsNumber = Number($('#checking-amount').val());
const $savingsAsNumber = Number($('#savings-amount').val());
let $checkAsNumber = 0;

//Saving the deposit and letting the user add to it
let $checkBankSafe = 0;
//Function for depositing checks
const depositChecks = function () {
  $checkBankSafe += $checkAsNumber;
  $('#checking-balance').text(`$` + $checkBankSafe);
};
//Button that deposits checks
$('#checking-deposit').on('click', depositChecks);

//Saving the deposit and letting the user add to it
  let $savingsBankSafe = 0;
//Function for depositing savings
const depositSavings = function () {
  $savingsBankSafe += $savingsAsNumber;
  $('#savings-balance').text(`$` + $savingsBankSafe);
};
//Button that deposits savings
$('#savings-deposit').on('click', depositSavings);






//Function for withdrawing checks
const withdrawChecks = function () {
  if ($checkBankSafe < $checkAsNumber) {
  } else {
      $checkBankSafe -= $checkAsNumber;
  };
  $('#checking-balance').text(`$` + $checkBankSafe);
};
//Button that withdraws checks
$('#checking-withdraw').on('click', withdrawChecks);


//Function for withdrawing savings
const withdrawSavings = function () {
  if ($savingsBankSafe < $savingsAsNumber) {
  } else {
      $savingsBankSafe -= $savingsAsNumber;
  };
  $('#savings-balance').text(`$` + $savingsBankSafe);
};
//Button that withdraws checks
$('#savings-withdraw').on('click', withdrawSavings);


const zeroSavings = function () {
  if ($savingsAsNumber === 0) {
      $('#savings').css('background-color', 'red');
    } else {
      $('#savings').css('background-color', '#6C9A74');
    };
};

zeroSavings();

const zeroChecks = function () {
  if ($checkAsNumber === 0) {
    $('#checking').css('background-color', 'red');
  } else {
    $('#checking').css('background-color', '#6C9A74');
  };
};

zeroChecks();



});
