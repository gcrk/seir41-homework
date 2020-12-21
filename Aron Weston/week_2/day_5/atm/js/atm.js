// Keep track of the checking and savings balances somewhere
$(document).ready(function () {

    const output = (account, total) => {
        console.log(`${account}`, total);
        $('#checking-balance').text(`$${total}`);
        $('#checking-amount').val('');
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
        $('#checking-amount').val('');
    }

    const checkBalance = [];

    const depositCheck = () => {
        const checkInput = parseInt($('#checking-amount').val())

        if (isNaN(checkInput)) {
            msg('Insert more than 0', '#checking', true);
        } else if (checkInput > 0) {
            $('#checking').removeClass('zero');
            checkBalance.push(checkInput);
            let depositTotal = 0;
            $.each(checkBalance, function () {
                depositTotal += parseInt(this);
            })
            output('DEPOSIT:', depositTotal);
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
            msg("You can't withdraw more than you have", '#checking', true);
        } else if (withdrawTotal === 0) {
            msg("You're out of money!", '#checking', true);
            output('WITHDRAW:', withdrawTotal)
        } else {
            output('WITHDRAW:', withdrawTotal)
        }
    }

    //CE's
    $('#checking-deposit').on('click', depositCheck);
    $('#checking-withdraw').on('click', withdrawCheck);


});