$(document).ready(function() {
    console.log( "ready!" );
    let checkingAccount = 0;
    const deposit = () => {
        const value = $("#checking-amount").attr("value");
        checkingAccount = checkingAccount + Number(value);
        console.log(value);
        $("#checking-balance").html(`$${checkingAccount}`);
        if (checkingAccount > 0) {
            $("#checking-balance").attr("class", "balance");
        }
    
    }
    $(function() {
        $("#checking-deposit").click(deposit);
    })

    const withdraw = () => {
        const value = $("#checking-amount").attr("value");
        if((checkingAccount - value) >= 0) {
            checkingAccount = checkingAccount - Number(value); 
        }
        console.log(value);
        $("#checking-balance").html(`$${checkingAccount}`);
        if(checkingAccount === 0) {
            $("#checking-balance").attr("class", "balance overdrawn");
        }
    }
    $(function() {
        $("#checking-withdraw").click(withdraw);
    })

    let savingsAccount = 0;
    const savingsDeposit = () => {
        const value = $("#savings-amount").attr("value");
        savingsAccount = savingsAccount + Number(value);
        console.log(value);
        $("#savings-balance").html(`$${savingsAccount}`);
        if (savingsAccount > 0) {
            $("#savings-balance").attr("class", "balance");
        }
    }
    $(function() {
        $("#savings-deposit").click(savingsDeposit);
    })

    const savingsWithdraw = () => {
        const value = $("#savings-amount").attr("value");
        if((savingsAccount - value) >= 0) {
            savingsAccount = savingsAccount - Number(value); 
        }
        console.log(value);
        $("#savings-balance").html(`$${savingsAccount}`);
        if(savingsAccount === 0) {
            $("#savings-balance").attr("class", "balance overdrawn");
        }
    }
    $(function() {
        $("#savings-withdraw").click(savingsWithdraw);
    })

});
