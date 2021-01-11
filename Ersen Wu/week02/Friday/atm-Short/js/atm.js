$( document ).ready(function() {

 let checkingBalance = 0;
 let savingsBalance = 0;
 let totalBalance = 0;

const numbers = /^[0-9]+$/;

///////////////////////////Deposit Function//////////////////////////////////////////////////
  const deposit = function(){
    $(this).css('color','orange');

    const displayId = $(this).attr('data-displayId');
    const inputId = $(this).attr('data-inputId');
    const amount = parseInt($("#"+inputId).val());
    let accountBalance = parseInt($('#'+displayId).text())


  //Alert "invalid amount" if use entered invalied values entered. e.g. values other than a number
     if ($("#"+inputId).val().match(numbers)===null){
     alert('invalid input')

    //when a valid amount is entered, calculate total amount
  }else{accountBalance = accountBalance + amount

//Display total amount on html Page
     $('#'+ displayId).text(`${accountBalance}`);
//update Checking/Saving balance
     checkingBalance = parseInt($('#checking-balance').text())
     savingsBalance = parseInt($('#savings-balance').text())
     totalBalance = checkingBalance + savingsBalance

     if(checkingBalance!==0){$('#checking-balance').css('background-color', 'grey')};
     if(savingsBalance!==0){$('#savings-balance').css('background-color', 'grey')};
     }
};//end of function

//Add event handler to the deposite button

$('.depositButton').click(deposit);  // $('.depositButton').on('click', function(){
//   deposit(); WHY THIS DOESNT WORK???????????????
// })


////////////////////////////withdraw fucntion////////////////////////////////////////////////////

const withdraw = function(){


  const displayId = $(this).attr('data-displayId');
  const inputId = $(this).attr('data-inputId');
  const amount = parseInt($("#"+inputId).val());
  let accountBalance = parseInt($('#'+displayId).text())


//Alert "invalid amount" if use entered invalied values entered. e.g. values other than a number
   if ($("#"+inputId).val().match(numbers)===null){
   alert('invalid input')

  //do nothing if amount to withdraw is greater than total amount of both accounts
}else{ if (totalBalance < amount){
   alert('insufficient fund');
    //withdrawal with sufficient fund
      }else if(totalBalance >= amount && accountBalance >=amount){accountBalance = accountBalance - amount
      //Display total amount on html Page
     $('#'+ displayId).text(`${accountBalance}`);


    //When there is insufficient fund in the account, use the Other account's balance to complete transaction

      }else if (totalBalance >= amount && accountBalance < amount){
        $('#'+ displayId).text('0');
        totalBalance = totalBalance - amount;
            if(parseInt($('#checking-balance').text())===0){
             $('#savings-balance').text(totalBalance)

             }else if (parseInt($('#savings-balance').text())===0){
              $('#checking-balance').text(totalBalance)
             }

        }
//Update balance in each account and total balance
checkingBalance = parseInt($('#checking-balance').text())
savingsBalance = parseInt($('#savings-balance').text())
totalBalance = checkingBalance + savingsBalance
//Make background color red when balance === 0
if(checkingBalance===0){$('#checking-balance').css('background-color', 'red')};
if(savingsBalance===0){$('#savings-balance').css('background-color', 'red')};


}

};//end of funtion

$('.withdrawButton').click(withdraw);

});//end of code
