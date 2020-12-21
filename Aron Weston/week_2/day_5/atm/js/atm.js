// Keep track of the checking and savings balances somewhere
$(document).ready(function () {

    const output = (id, total, arr) => {
        $(`${id}`).text(`$${total}`);
        console.log(`${id}`, arr);
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
    // SAVINGS
    const savingsBalance = [];

    $('#checking-deposit').on('click', () => {
        const amount = parseInt($('#checking-amount').val())

        if (isNaN(amount) || amount <= 0) {
            msg('Deposit more than $0', '#checking');
        } else {
            checkBalance.push(amount);
            let depositTotal = loop(checkBalance);
            output('#checking-balance', depositTotal, checkBalance);
        }
    });

    //CHECK - Withdraw
    $('#checking-withdraw').on('click', () => {

        const amount = parseInt($('#checking-amount').val());

        const checking = loop(checkBalance);

        const withdrawTotal = checking - amount;
        const debit = withdrawTotal - checking;

        if (isNaN(amount)) {
            msg('You have no more money', '#checking');
        } else {
            if (withdrawTotal < 0) {
                const savings = loop(savingsBalance);
                if (amount > (checking + savings)) {
                    msg("No overdraft available. Insufficient funds.", '#checking');
                } else {
                    if (savings < 0) {
                        msg("No overdraft available, account cannot be negative", '#savings');
                    } else {
                        if (checking > 0) {
                            //Take the checking balance
                            //Subtract the checking balance from the debit 
                            //Push the negative value to the savings balance 
                            let x = checking - amount;

                            savingsBalance.push(x);
                            const newSavings = loop(savingsBalance);
                            output('#savings-balance', newSavings, savingsBalance);

                            x = x + amount;

                            checkBalance.push(-x);
                            const newChecking = loop(checkBalance);
                            output('#checking-balance', newChecking, checkBalance);

                        } else {
                            savingsBalance.push(debit);
                            const newSavings = loop(savingsBalance);
                            output('#savings-balance', newSavings, savingsBalance);
                        }
                    }
                }
            } else if (withdrawTotal === 0) {
                msg("You're out of money!", '#checking');
                checkBalance.push(debit);
                output('#checking-balance', withdrawTotal, checkBalance);
            } else {
                checkBalance.push(debit);
                output('#checking-balance', withdrawTotal, checkBalance);
            }
        }
    });






    $('#savings-deposit').on('click', () => {
        const amount = parseInt($('#savings-amount').val())

        if (isNaN(amount) || amount <= 0) {
            msg('Deposit more than $0.', '#savings');
        } else {
            savingsBalance.push(amount);
            let depositTotal = loop(savingsBalance);
            output('#savings-balance', depositTotal, savingsBalance);
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
                output('#savings-balance', withdrawTotal, savingsBalance);
            } else {
                savingsBalance.push(debit);
                output('#savings-balance', withdrawTotal, savingsBalance);
            }
        }
    });



});