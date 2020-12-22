$(document).ready(function () {

    const bank = {
        checking: [],
        savings: [],
        deposit: (account, debit, id) => {
            account.push(debit)
            bank.output(`${id}`, bank.totalBalance(account), account);
        },
        withdraw: (account, credit, id) => {
            const x = bank.totalBalance(account) - credit;
            if (x > 0) {
                account.push(-credit);
            } else if (x === 0) {
                console.log('You have no more money');
            } else if (x < 0) {
                console.log('You cant withdraw.');
            }
        },
        totalBalance: (account) => {
            let sum = 0;
            $.each(account, function () {
                sum += parseInt(this);
            })
            return sum;
        },
        output: (id, total, arr) => {
            $(`${id}`).text(`$${total.toLocaleString()}`);
            console.log(`${id}`, arr);
        },
        message: (msg, element, className) => {
            $('<div id="alert"></div>').text(`${msg}`).prependTo($(`${element}`).addClass(`${className}`));
            setTimeout(function () {
                $('#alert').remove();
                $(`${element}`).removeClass(`${className}`);
            }, 2000);
        }
    }

    //CHECKING - DEPOSIT
    $('#checking-deposit').on('click', () => {
        const amount = parseInt($('#checking-amount').val());
        if (isNaN(amount) || amount <= 0) {
            bank.message('Deposit more than $0', '#checking', 'zero');
        } else {
            bank.deposit(bank.checking, amount, '#checking-balance');
        }
    });

    //SAVINGS - DEPOSIT
    $('#savings-deposit').on('click', () => {
        const amount = parseInt($('#savings-amount').val());
        if (isNaN(amount) || amount <= 0) {
            bank.message('Deposit more than $0', '#savings', 'zero');
        } else {
            bank.deposit(bank.savings, amount, '#savings-balance');
        }
    });


    //CHECKING - WITHDRAW
    $('#checking-withdraw').on('click', () => {
        const amount = parseInt($('#checking-amount').val());
        bank.withdraw(bank.checking, amount)
    });

    // //SAVINGS - WITHDRAW
    // $('#savings-withdraw').on('click', () => {


    // });












});