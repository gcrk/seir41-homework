$(document).ready(function () {


const banking = function () {
  const $checkAsNumber = Number($('#checking-amount').val());
  const $savingsAsNumber = Number($('#savings-amount').val());
  let $checkBankSafe = 0;
  let $savingsBankSafe = 0;

  const checkBank = function () {
      //Function for depositing checks
      const depositChecks = function () {
        $checkBankSafe += $checkAsNumber;
        $('#checking-balance').text(`$` + $checkBankSafe);
        if ($checkBankSafe === 0) {
          $('#checking').css('background-color', 'red');
        } if ($checkBankSafe !== 0) {
          $('#checking').css('background-color', '#6C9A74');
        };
      };
      //Button that deposits checks
      $('#checking-deposit').on('click', depositChecks);


      //Function for withdrawing checks
      const withdrawChecks = function () {
        if ($checkBankSafe < $checkAsNumber) {
          if ($savingsBankSafe < $checkAsNumber || $savingsBankSafe === 0) {
          } if ($savingsBankSafe >= $checkAsNumber) {
            $savingsBankSafe -= $checkAsNumber;
          };
          $('#savings-balance').text(`$` + $savingsBankSafe);
        } else {
            $checkBankSafe -= $checkAsNumber;
        };
        $('#checking-balance').text(`$` + $checkBankSafe);
        if ($checkBankSafe === 0) {
          $('#checking').css('background-color', 'red');
        } if ($checkBankSafe !== 0) {
          $('#checking').css('background-color', '#6C9A74');
        };
      };
      //Button that withdraws checks
      $('#checking-withdraw').on('click', withdrawChecks);

  };

  checkBank();



  const bankSavings = function () {
      //Function for depositing savings
      const depositSavings = function () {
        $savingsBankSafe += $savingsAsNumber;
        $('#savings-balance').text(`$` + $savingsBankSafe);
        if ($savingsBankSafe === 0) {
            $('#savings').css('background-color', 'red');
          } if ($savingsBankSafe !== 0) {
            $('#savings').css('background-color', '#6C9A74');
          };
      };
      //Button that deposits savings
      $('#savings-deposit').on('click', depositSavings);




      //Function for withdrawing savings
      const withdrawSavings = function () {
        if ($savingsBankSafe < $savingsAsNumber) {
          if ($checkBankSafe < $savingsAsNumber || $checkBankSafe === 0) {
          } if ($checkBankSafe >= $savingsAsNumber) {
            $checkBankSafe -= $savingsAsNumber;
          };
          $('#checking-balance').text(`$` + $checkBankSafe);
        } else {
            $savingsBankSafe -= $savingsAsNumber;
        };
        $('#savings-balance').text(`$` + $savingsBankSafe);
        if ($savingsBankSafe === 0) {
            $('#savings').css('background-color', 'red');
          } if ($savingsBankSafe !== 0) {
            $('#savings').css('background-color', '#6C9A74');
          };
      };
      //Button that withdraws checks
      $('#savings-withdraw').on('click', withdrawSavings);

  };

  bankSavings();

};

banking();

});
