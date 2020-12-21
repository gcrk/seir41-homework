// Keep track of the checking and savings balances somewhere
$(document).ready(function () {


    const checkBalance = [];

    // $('#checking-balance').text(`$${total}`);

    const depositCheck = () => {
        const checkInput = parseInt($('#checking-amount').val())

        if (isNaN(checkInput)) {
            $('<div></div>').text('Insert more than 0').prependTo($('#checking'));

            console.log(checkBalance);
        } else {
            checkBalance.push(checkInput);
            //Loop through the array and add all the inputs to the 
            let depositTotal = 0;
            $.each(checkBalance, function () {
                depositTotal += parseInt(this);
            })

            $('#checking-balance').text(`$${depositTotal}`);

            //Log total
            console.log('DEPOSIT TOTAL', depositTotal);

            // Change balance output
            $('#checking-balance').text(`$${depositTotal}`);

            //clear the balance
            $('#checking-amount').val('')

        }


    }


    const withdrawCheck = () => {

        const checkInput = parseInt($('#checking-amount').val());

        let depositTotal = 0;
        $.each(checkBalance, function () {
            depositTotal += parseInt(this);
        })

        let withdrawTotal = depositTotal - checkInput;

        if (withdrawTotal < 0) {
            $('<div></div>').text(`You can't withdraw more than you have`).prependTo($('#checking'));
        } else if (withdrawTotal === 0) {
            $('#checking').addClass('zero');
            $('<div></div>').text(`You're out of money!`).prependTo($('#checking'));
            $('#checking-balance').text(`$${withdrawTotal}`);
        } else {
            $('#checking-balance').text(`$${withdrawTotal}`);

            console.log("WITHDRAWAL TOTAL", withdrawTotal);
        }
    }

    //CE's
    $('#checking-deposit').on('click', depositCheck);
    $('#checking-withdraw').on('click', withdrawCheck);


});




//  if (checkInput === "" || checkInput === NaN) {
//      alert('Do');
//      console.log(checkBalance);
//  } else {

//  }