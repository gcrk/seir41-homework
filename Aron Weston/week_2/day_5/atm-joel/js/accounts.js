//Accounts obj - soley concerened with the rules for bank accounts

//It is the single source of truth for balances; figure it out from accounts object, the object is the bank. It can also do overdraft protection. Never heard of the DOM. No mention of the DOM, just the stuff that manages with the data. Consider seperating out.

//Render function updates every part of the DOM from the accounts object. One single function to do all of the 

const accounts = {
    checkingBalance: 0,
    savingsBalance: 0,
    total: function () {
        this.checkingBalance + this.savingsBalance;
    },
    checkingDeposit: function (amount) {
        this.checkingBalance += Number(amount);
    },
    savingsDeposit: function (amount) {
        this.savingsBalance += Number(amount);
    },
    checkingWithdraw: function (amount) {
        amount = Number(amount)
        if (amount <= this.checkingBalance) {
            this.checkingBalance -= amount;
        } else if (amount < this.total()) {
            const difference = amount - this.checkingBalance;
            this.checkingBalance = 0;
            this.savingsBalance -= difference;
        }
    },
    savingsWithdraw: function (amount) {
        amount = Number(amount)
        if (amount <= this.savingsBalance) {
            this.savingsBalance -= amount;
        } else if (amount < this.total()) {
            const difference = amount - this.savingsBalance;
            this.savingsBalance = 0;
            this.checkingBalance -= difference;
        }
    },
    savingsDeposit: function (amount) {
        this.savingsBalance += Number(amount);
    }
}