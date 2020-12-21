// Keep track of the checking and savings balances somewhere
$(document).ready(function () {

    const output = (id, account, total, arr) => {
        console.log(`${account}`, total);
        $(`${id}`).text(`$${total}`);
        console.log(arr);
    }

    const msg = (msg, element) => {
        $('<div id="alert"></div>').text(`${msg}`).prependTo($(`${element}`).addClass('zero'));
        setTimeout(function () {
            $('#alert').remove();
            $(`${element}`).removeClass('zero');
        }, 2000);
    }

    const loop = (account) => {
        let sum = 0;
        $.each(account, function () {
            sum += parseInt(this);
        })
        return sum;
    }


    //CHECKING 

    //CHECK - Deposit
    const checkBalance = [];
    $('#checking-deposit').on('click', () => {
        const amount = parseInt($('#checking-amount').val())

        if (isNaN(amount) || amount <= 0) {
            msg('Insert more than 0', '#checking');
        } else {
            checkBalance.push(amount);
            let depositTotal = loop(checkBalance);
            output('#checking-balance', 'DEPOSIT:', depositTotal, checkBalance);
        }
    });

    //CHECK - Withdraw
    $('#checking-withdraw').on('click', () => {

        const amount = parseInt($('#checking-amount').val());

        let depositTotal = loop(checkBalance);

        const withdrawTotal = depositTotal - amount;
        const debit = withdrawTotal - depositTotal;

        if (isNaN(amount)) {
            msg('You have no more money', '#checking');
        } else {
            if (withdrawTotal < 0) {
                msg("You can't withdraw more than you have!", '#checking', true);
            } else if (withdrawTotal === 0) {
                msg("You're out of money!", '#checking');
                checkBalance.push(debit);
                output('#checking-balance', 'WITHDRAW:', withdrawTotal, checkBalance);
            } else {
                checkBalance.push(debit);
                output('#checking-balance', 'WITHDRAW:', withdrawTotal, checkBalance);
            }
        }
    });




    // SAVINGS
    const savingsBalance = [];

    $('#savings-deposit').on('click', () => {
        const amount = parseInt($('#savings-amount').val())

        if (isNaN(amount) || amount <= 0) {
            msg('Deposit more than $0.', '#savings');
        } else {
            savingsBalance.push(amount);
            let depositTotal = loop(savingsBalance);
            output('#savings-balance', 'SAVE DEPOSIT:', depositTotal, savingsBalance);
        }
    });


    //Savings - Withdraw 
    $('#savings-withdraw').on('click', () => {

        const amount = parseInt($('#savings-amount').val());

        let depositTotal = loop(savingsBalance);

        const withdrawTotal = depositTotal - amount;
        const debit = withdrawTotal - depositTotal;

        if (isNaN(amount)) {
            msg('You have no more money', '#savings', true);
        } else {
            if (withdrawTotal < 0) {
                msg("You can't withdraw more than you have!", '#savings', true);
            } else if (withdrawTotal === 0) {
                msg("You're out of money!", '#savings', true);
                savingsBalance.push(debit);
                output('#savings-balance', 'SAVE WITHDRAW:', withdrawTotal, savingsBalance);
            } else {
                savingsBalance.push(debit);
                output('#savings-balance', 'SAVE WITHDRAW:', withdrawTotal, savingsBalance);
            }
        }
    });



});