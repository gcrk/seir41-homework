$(document).ready(function() {
  let savingBalance = 0;
  let checkingBalance = 0;

  // checking account
  $('#checking-deposit').on("click", function() {
    let $checkingInput1 = $('#checking-amount').val();
    // let $currentCheckBalance = $('#checking-balance').val();
    if (isNaN(+$checkingInput1) === false) {
      checkingBalance += +$checkingInput1;
      $('#checking-balance').text('$' + checkingBalance);
    };
    $('#checking-amount').val("");
    updateAccount();
  });

  $('#checking-withdraw').on("click", function() {
    let checkingInput2 = $('#checking-amount').val();
    if (isNaN(+checkingInput2) === false) {
      if (checkingInput2 <= savingBalance + checkingBalance) {
        if (checkingInput2 > checkingBalance) {
          savingBalance = savingBalance - (checkingInput2 - checkingBalance);
          $('#savings-balance').text('$' + savingBalance);
          checkingBalance = 0;
        } else {
          checkingBalance = checkingBalance - checkingInput2;
        }
        $('#checking-balance').text('$' + checkingBalance);
      }
    }
    $('#checking-amount').val("");
    updateAccount();
  });

  // savings account
  $('#savings-deposit').on("click", function() {
    let $savingInput1 = $('#savings-amount').val();
    if (isNaN(+$savingInput1) === false) {
      savingBalance += +$savingInput1;
      $('#savings-balance').text('$' + savingBalance);
    };
    $('#savings-amount').val("");
    updateAccount();
  });

  $('#savings-withdraw').on("click", function() {
    let savingInput2 = $('#savings-amount').val();
    if (isNaN(+savingInput2) === false) {
      if (savingInput2 <= savingBalance) {
        savingBalance = savingBalance - savingInput2;
        $('#savings-balance').text('$' + savingBalance);
      }
    }
    $('#savings-amount').val("");
    updateAccount();
  });

  function updateAccount() {
    if (!checkingBalance) {
      $('#checking-balance').css('background-color', 'red');
    } else {
      $('#checking-balance').css('background-color', '#E3E3E3');
    }
    if (!savingBalance) {
      $('#savings-balance').css('background-color', 'red');
    } else {
      $('#savings-balance').css('background-color', '#E3E3E3');
    }
  }
});
