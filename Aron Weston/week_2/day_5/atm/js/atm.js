// Keep track of the checking and savings balances somewhere
$(document).ready(function () {

    const output = (id, total, arr) => {
        $(`${id}`).text(`$${total.toLocaleString()}`);
        console.log(`${id}`, arr);
    }

    const msg = (msg, element, className) => {
        $('<div id="alert"></div>').text(`${msg}`).prependTo($(`${element}`).addClass(`${className}`));
        setTimeout(function () {
            $('#alert').remove();
            $(`${element}`).removeClass(`${className}`);
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
            msg('Deposit more than $0', '#checking', 'zero');
        } else {
            checkBalance.push(amount);
            let depositTotal = loop(checkBalance);
            output('#checking-balance', depositTotal, checkBalance);
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




    //CHECK - Withdraw
    $('#checking-withdraw').on('click', () => {

        const amount = parseInt($('#checking-amount').val());

        const checking = loop(checkBalance);

        const withdrawTotal = checking - amount;
        const debit = withdrawTotal - checking;

        if (isNaN(amount)) {
            msg('You have no more money', '#checking', 'zero');
        } else {
            if (withdrawTotal < 0) {
                const savings = loop(savingsBalance);
                if (amount > (checking + savings)) {
                    msg("No overdraft available. Insufficient funds.", '#checking', 'zero');
                } else {
                    if (savings < 0) {
                        msg("No overdraft available, account cannot be negative", '#savings', 'zero');
                    } else {
                        if (checking > 0) {
                            msg("Overdraft approved", '#checking', 'approved');
                            //Savings
                            let overdraft = checking - amount;

                            savingsBalance.push(overdraft);
                            const newSavings = loop(savingsBalance);
                            output('#savings-balance', newSavings, savingsBalance);

                            //Checking 
                            overdraft = overdraft + amount;

                            checkBalance.push(-overdraft);
                            const newChecking = loop(checkBalance);
                            output('#checking-balance', newChecking, checkBalance);

                        } else {
                            msg("Overdraft approved", '#checking', 'approved');
                            savingsBalance.push(debit);
                            const newSavings = loop(savingsBalance);
                            output('#savings-balance', newSavings, savingsBalance);
                        }
                    }
                }
            } else if (withdrawTotal === 0) {
                msg("You're out of money!", '#checking', 'zero');
                checkBalance.push(debit);
                output('#checking-balance', withdrawTotal, checkBalance);
            } else {
                msg(`Withdrawal successful: $${debit} `, '#checking', 'approved');
                checkBalance.push(debit);
                output('#checking-balance', withdrawTotal, checkBalance);
            }
        }
    });




    //Savings - Withdraw 
    $('#savings-withdraw').on('click', () => {

        const amount = parseInt($('#savings-amount').val());

        let savings = loop(savingsBalance);

        const withdrawTotal = savings - amount;
        const debit = withdrawTotal - savings;

        if (isNaN(amount)) {
            msg('You have no more money', '#checking', 'zero');
        } else {
            if (withdrawTotal < 0) {
                const checking = loop(checkBalance);
                if (amount > (checking + savings)) {
                    msg("No overdraft available. Insufficient funds.", '#savings', 'zero');
                } else {
                    if (checking < 0) {
                        msg("No overdraft available, account cannot be negative", '#savings', 'zero');
                    } else {
                        if (savings > 0) {
                            msg("Overdraft approved", '#savings', 'approved');
                            //Savings
                            let overdraft = savings - amount;
                            checkBalance.push(overdraft);
                            const newChecking = loop(checkBalance);
                            output('#checking-balance', newChecking, checkBalance);
                            console.log(-overdraft);

                            //Checking 
                            overdraft = overdraft + amount;
                            savingsBalance.push(-overdraft);
                            const newSavings = loop(savingsBalance);
                            output('#savings-balance', newSavings, savingsBalance);
                            console.log(-overdraft);

                        } else {
                            msg("Overdraft approved", '#savings', 'approved');
                            checkBalance.push(debit);
                            const newCheck = loop(checkBalance);
                            output('#checking-balance', newCheck, checkBalance);
                        }
                    }
                }
            } else if (withdrawTotal === 0) {
                msg("You're out of money!", '#savings', "zero");
                savingsBalance.push(debit);
                output('#savings-balance', withdrawTotal, savingsBalance);
            } else {
                msg(`Withdrawal successful: $${debit} `, '#savings', 'approved');
                savingsBalance.push(debit);
                output('#savings-balance', withdrawTotal, savingsBalance);
            }
        }
    });


});