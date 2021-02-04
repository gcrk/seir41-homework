$( document ).ready(function() {





  let checkingTotalAmount = 0;

  let savingsTotalAmount = 0;

  let totalBalance = 0;


  //change background color to red if balance is 0
  if (savingsTotalAmount === 0){
    $('#savings-balance').css({'background-color':'red'});
  }
  if (checkingTotalAmount === 0){
    $('#checking-balance').css({'background-color':'red'});
  }




  const numbers = /^[0-9]+$/;

  //Checking Account:

  //Checking Account-Deposit
  const $checkingDepositButton = $('#checking-deposit');

  const checkingDeposit = function(){


    const checkingAmount = parseInt($('#checking-amount').val());

    //Alert "invalid amount" if use entered invalied values entered. e.g. values other than a number
     if ($('#checking-amount').val().match(numbers)===null){
        $('#checking-balance').text(`Invalid amount entered, please enter a valid amount. Current Balance:$${checkingTotalAmount}`);
    //when a valid amount is entered, calculate total amount
      }else{checkingTotalAmount = checkingTotalAmount + checkingAmount;
        totalBalance = checkingTotalAmount + savingsTotalAmount;

        //Display total amount on html Page
     $('#checking-balance').text(`$${checkingTotalAmount}`);
     //Change background back to grey when balance is greater than 0
       $('#checking-balance').css({'background-color':'grey'});
      }

      //Clear HTML input section after each transaction
        $('#checking-amount').val(null);


  };

//Add event handler to the deposite button
$checkingDepositButton.on('click', function(){
  checkingDeposit();
});


 //checking-withdraw
 const $checkingWithdrawButton = $('#checking-withdraw');

 const checkingWithdraw = function(){

 const checkingAmount = parseInt($('#checking-amount').val());

 //Alert "invalid amount" if use entered invalied values entered. e.g. values other than a number
 if ($('#checking-amount').val().match(numbers)===null){
    $('#checking-balance').text(`Invalid amount entered, please enter a valid amount. Current Balance:$${checkingTotalAmount}`);
 }
//Alert "Insufficient fund if the amount entered is greater than total account balance"
 else if (checkingAmount>totalBalance) {
    $('#checking-balance').text(`Insufficient fund, please enter a different amount`);
 }

//if needed, borrow balance from the other account to compelete transaction
  else if (checkingAmount>checkingTotalAmount){
  checkingTotalAmount = 0;
  savingsTotalAmount = totalBalance - checkingAmount;
  totalBalance = savingsTotalAmount + checkingTotalAmount;
  //Display total amount on html Page
  $('#checking-balance').text(`$${checkingTotalAmount}`);
  $('#savings-balance').text(`$${savingsTotalAmount}`);

}

 //when a valid amount is entered, calculate total amount
else if (checkingAmount<=checkingTotalAmount){checkingTotalAmount = checkingTotalAmount - checkingAmount;
  totalBalance = savingsTotalAmount + checkingTotalAmount;
  //Display total amount on html Page
  $('#checking-balance').text(`$${checkingTotalAmount}`);
  $('#savings-balance').text(`$${savingsTotalAmount}`);
}

//change background color to red if balance is 0
if (savingsTotalAmount === 0){
  $('#savings-balance').css({'background-color':'red'});
}
if (checkingTotalAmount === 0){
  $('#checking-balance').css({'background-color':'red'});
}

//Clear HTML input section after each transaction
$('#checking-amount').val(null);



};



//Add event handler to the Withdraw button
$checkingWithdrawButton.on('click', function(){
checkingWithdraw();
});



//Savings Account:

//Savings Account-Deposit
const $savingsDepositButton = $('#savings-deposit');

const savingsDeposit = function(){


  const savingsAmount = parseInt($('#savings-amount').val());

  //Alert "invalid amount" if use entered invalied values entered. e.g. values other than a number
   if ($('#savings-amount').val().match(numbers)===null){
      $('#savings-balance').text(`Invalid amount entered, please enter a valid amount. Current Balance:$${savingsTotalAmount}`);
  //when a valid amount is entered, calculate total amount
    }else{savingsTotalAmount = savingsTotalAmount + savingsAmount;
      totalBalance = checkingTotalAmount + savingsTotalAmount;

  //Display total amount on html Page
$('#savings-balance').text(`$${savingsTotalAmount}`);
//Change background back to grey when balance is greater than 0
  $('#savings-balance').css({'background-color':'grey'});
}

//Clear HTML input section after each transaction
$('#savings-amount').val(null);
};

//Add event handler to the deposite button
$savingsDepositButton.on('click', function(){
savingsDeposit();
});


//savings-withdraw
const $savingsWithdrawButton = $('#savings-withdraw');

const savingsWithdraw = function(){

const savingsAmount = parseInt($('#savings-amount').val());

//Alert "invalid amount" if use entered invalied values entered. e.g. values other than a number
if ($('#savings-amount').val().match(numbers)===null){
   $('#savings-balance').text(`Invalid amount entered, please enter a valid amount. Current Balance:$${savingsTotalAmount}`);
}


//Alert "Insufficient fund if the amount entered is greater than total account balance"
else if (savingsAmount>totalBalance) {
   $('#savings-balance').text(`Insufficient fund, please enter a different amount`);
 }

//if needed, borrow balance from the other account to compelete transaction

else if (savingsAmount>savingsTotalAmount){
   savingsTotalAmount = 0;
   checkingTotalAmount = totalBalance - savingsAmount;
   totalBalance = savingsTotalAmount + checkingTotalAmount;
   //Display total amount on html Page
   $('#savings-balance').text(`$${savingsTotalAmount}`);
   $('#checking-balance').text(`$${checkingTotalAmount}`);

}

//when a valid amount is entered, calculate total amount
else if (savingsAmount<=savingsTotalAmount) {
  savingsTotalAmount = savingsTotalAmount - savingsAmount;
  totalBalance = savingsTotalAmount + checkingTotalAmount;
  //Display total amount on html Page
  $('#savings-balance').text(`$${savingsTotalAmount}`);
  $('#checking-balance').text(`$${checkingTotalAmount}`);

}

//change background color to red if balance is 0
if (savingsTotalAmount === 0){
  $('#savings-balance').css({'background-color':'red'});
}
if (checkingTotalAmount === 0){
  $('#checking-balance').css({'background-color':'red'});
}


//Clear HTML input section after each transaction
$('#savings-amount').val(null);



};



//Add event handler to the Withdraw button
$savingsWithdrawButton.on('click', function(){
savingsWithdraw();
});







//end of code
});
