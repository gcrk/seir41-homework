
//Have a single render function to output what we need to output to the dom within one function and call that function to chuck everything into the DOM. 
const render = function () {
    $('#checking-balance').text('$' + accounts.checkingBalance);
    $('#savings-balance').text('$' + accounts.savingsBalance);

    $('.zero').removeClass('zero');

    if (accounts.checkingBalance <= 0) {
        $('#checking-balance').addClass('zero');
    } 
    if (accounts.savingsBalance <= 0) {
        $('#checking-balance').addClass('zero');
    } 
};

$(document).ready(function () {
    //Call the render function
    render();

    //Checking
    $('#checking-deposit').on('click', function () {
        const amount = $('#checking-amount').val();
        accounts.checkingDeposit(amount);
        console.log(accounts);
        render();
    });
    $('#checking-withdraw').on('click', function () {
        const amount = $('#checking-amount').val();
        accounts.checkingWithdraw(amount);
        console.log(accounts);
        render();
    });

    //Savings
    $('#savings-deposit').on('click', function () {
        const amount = $('#savings-amount').val();
        accounts.savingsDeposit(amount);
        console.log(accounts);
        render();
    });

    $('#savings-withdraw').on('click', function () {
        const amount = $('#savings-amount').val();
        accounts.savingsWithdraw(amount);
        console.log(accounts);
        render();
    });

})