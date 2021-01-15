//Return lets you exit a function, leaves a function at that point to get out of the function
//.text() is a setter and a getter depending on its args

$(document).ready(function () {

  //Checking account
  $("#checking-deposit").on("click", function () {
    const deposit = +$("#checking-amount").val();
    const currentBalance = +$("#checking-balance").text().slice(1);
    const newBalance = currentBalance + deposit;
    $("#checking-balance").text("$" + newBalance);
  });


  //Checking withdraw
  $("#checking-withdraw").on("click", function () {
    const amount = +$("#checking-amount").val();
    const currentBalance = +$("#checking-balance").text().slice(1);

    //overdraft
    const otherBalance = $('#savings-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;


    const newBalance = currentBalance - amount;

    if (newBalance >= 0) {
      $('#checking-balance').text('$' + newBalance);
    } else if (amount <= totalBalance) {
      //enough but not in this account;
      //account to 0; rest from the otherBalance
      $('#checking-balance').text('$0');
      $('#savings-balance').text("$" + otherBalance + newBalance);
    }

    // $("#checking-balance").text("$" + newBalance);
  });

  //Savings account
  $("#savings-deposit").on("click", function () {
    const deposit = +$("#savings-amount").val();
    const currentBalance = +$("#savings-balance").text().slice(1);
   

    const newBalance = currentBalance + deposit;
    $("#savings-balance").text("$" + newBalance);
  });

  //Savings withdraw
  $("#savings-withdraw").on("click", function () {
    const deposit = +$("#savings-amount").val();
    const currentBalance = +$("#savings-balance").text().slice(1);
    
    if (newBalance < 0) {
      return
    }

    const newBalance = currentBalance + deposit;
    $("#savings-balance").text("$" + newBalance);
  });




});