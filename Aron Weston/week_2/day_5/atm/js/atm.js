// Keep track of the checking and savings balances somewhere
$(document).ready(function () {

    const output = (account, total) => {
        console.log(`${account}`, total);
        $('#checking-balance').text(`$${total}`);

        console.log(checkBalance);
    }

    const msg = (msg, element, zero) => {
        $('<div id="alert"></div>').text(`${msg}`).prependTo($(`${element}`));
        if (zero) {
            $('#checking').addClass('zero');
        } else {
            $('#checking').removeClass('zero');
        }
        setTimeout(clearMsg, 3000);
    }

    const clearMsg = () => {
        $('#alert').remove();
        $('#checking').removeClass('zero');

    }

    const loop = () => {
        let depositTotal = 0;
        $.each(checkBalance, function () {
            depositTotal += parseInt(this);
        })
        return depositTotal;
    }


    //CHECKING 

    const checkBalance = [];
    $('#checking-deposit').on('click', () => {
        const checkInput = parseInt($('#checking-amount').val())

        if (isNaN(checkInput) || checkInput <= 0) {
            msg('Insert more than 0', '#checking', true);
        } else {
            checkBalance.push(checkInput);
            let depositTotal = loop();
            output('DEPOSIT:', depositTotal);
        }

    });

    //Checking - Withdraw 
    $('#checking-withdraw').on('click', () => {

        const checkInput = parseInt($('#checking-amount').val());

        let depositTotal = loop();

        const withdrawTotal = depositTotal - checkInput;
        const debit = withdrawTotal - depositTotal;

        if (isNaN(checkInput)) {
            msg('You have no more money', '#checking', true);
        } else {
            if (withdrawTotal < 0) {
                msg("You can't withdraw more than you have!", '#checking', true);
            } else if (withdrawTotal === 0) {
                msg("You're out of money!", '#checking', true);
                checkBalance.push(debit);
                output('WITHDRAW:', withdrawTotal)
            } else {
                checkBalance.push(debit);
                output('WITHDRAW:', withdrawTotal)
            }
        }

    });


    $('#checking-deposit').on('click', () => {
        const checkInput = parseInt($('#checking-amount').val())

        if (isNaN(checkInput) || checkInput <= 0) {
            msg('Insert more than 0', '#checking', true);
        } else {
            checkBalance.push(checkInput);
            let depositTotal = loop();
            output('DEPOSIT:', depositTotal);
        }

    });


    //Checking - Withdraw 
    $('#checking-withdraw').on('click', () => {

        const checkInput = parseInt($('#checking-amount').val());

        let depositTotal = loop();

        const withdrawTotal = depositTotal - checkInput;
        const debit = withdrawTotal - depositTotal;

        if (isNaN(checkInput)) {
            msg('You have no more money', '#checking', true);
        } else {
            if (withdrawTotal < 0) {
                msg("You can't withdraw more than you have!", '#checking', true);
            } else if (withdrawTotal === 0) {
                msg("You're out of money!", '#checking', true);
                checkBalance.push(debit);
                output('WITHDRAW:', withdrawTotal)
            } else {
                checkBalance.push(debit);
                output('WITHDRAW:', withdrawTotal)
            }
        }

    });



});