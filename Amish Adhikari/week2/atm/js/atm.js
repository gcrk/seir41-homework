

$(document).ready(function(){


const button1 = $('#checking-deposit')
const button2 = $('#checking-withdraw')
const button3 = $('#savings-deposit')
const button4 = $('#savings-withdraw')

const checkingBalance = $('#checking-balance');
const savingBalance = $('#savings-balance');


// checking deposite
button1.on("click", function(){
    let deposit = parseInt($("#checking-amount").val())

    let balance = parseInt($("#checking-balance").text().replace("$", ""))

    // console.log(balance);
    let newBalance = (balance + deposit)

    $("#checking-balance").text("$" + newBalance);

    if(newBalance > 0){
      $("#checking-balance").removeClass('zero');
    }
  });

  // checking withdrawl
  button2.on("click", function(){
      let deposit = parseInt($("#checking-amount").val())


      let balance = parseInt($("#checking-balance").text().replace("$", ""))

      // console.log(balance);
      let newBalance = (balance - deposit)

      if (newBalance >=0){
        $("#checking-balance").text('$' + newBalance);
      }

      // overdraft starts here
      if (newBalance < 0){
        let savingBalance = parseInt($("#savings-balance").text().replace("$", ""))
        // 30 - (10 +10)
        let remainingBalance = (balance + savingBalance) - deposit;

        if(remainingBalance >= 0){
          // withdraw from Checkings
          newBalance = 0;
          let remainingBalance = (balance + checkingBalance) - deposit;

          $("#checking-balance").text('$' + newBalance);
          $("#savings-balance").text('$' + savingBalance);

          if(savingBalance === 0){
            $("#savings-balance").addClass('zero');
          }

        }
      }
      // overdraft ends here

      // if newBalance = 0, append class "zero" to #checking-balance

      if(newBalance === 0){
        $("#checking-balance").addClass('zero');
      }

    });

  // Savings deposite
  button3.on("click", function(){
      let deposit = parseInt($("#savings-amount").val())
      // console.log($("#checking-balance").text().replace("$", ""));

      let balance = parseInt($("#savings-balance").text().replace("$", ""))

      // console.log(balance);
      let newBalance = (balance + deposit)

      $("#savings-balance").text('$' + newBalance);

      if(newBalance > 0){
        $("#savings-balance").removeClass('zero');
      }
    });

    // Savings withdrawl
    button4.on("click", function(){
        let deposit = parseInt($("#savings-amount").val())

        let balance = parseInt($("#savings-balance").text().replace("$", ""))

        // console.log(balance);
        let newBalance = (balance - deposit)

        console.log('newBalance ' + newBalance);

        if (newBalance >=0){
          $("#savings-balance").text('$' + newBalance);
        }


      // overdraft starts here
      if (newBalance < 0){
        let checkingBalance = parseInt($("#checking-balance").text().replace("$", ""))

        console.log('CB' + checkingBalance);

        // 0 + 20 - 10
        let remainingBalance = (balance + checkingBalance) - deposit;

        console.log('RB ' + remainingBalance);

        if(remainingBalance >= 0){
          // withdraw from Checkings
          newBalance = 0;

          // 10 - (20+0)
          checkingBalance = (checkingBalance + balance) - deposit;

          $("#savings-balance").text('$' + newBalance);
          $("#checking-balance").text('$' + checkingBalance);

          if(checkingBalance === 0){
            $("#checking-balance").addClass('zero');
          }

        }
      }
        if(newBalance === 0){
          $("#savings-balance").addClass('zero');
        }
      // overdraft ends here
});
});
