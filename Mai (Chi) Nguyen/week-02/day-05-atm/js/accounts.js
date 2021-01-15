const accounts = {
  checkingBalance: 0,
  savingsBlance: 0,

  total: function () {
    return this.checkingBalance + this.savingsBlance;
  },

  checkingDeposit: function (amount) {
    this.checkingBalance += Number(amount);
  },

  checkingWithdraw: function (amount) {
    amount = Number(amount);
    if (amount <= this.checkingBalance) {
      this.checkingBalance -= amount;
    } else if (amount < this.total()) {
      const difference = amount - this.checkingBalance;
      this.checkingBalance = 0;
      this.savingsBlance -= difference;
    }
  },

  savingsDeposit: function (amount) {
    this.savingsBlance += Number(amount);
  },

  savingsWithdraw: function (amount) {
    amount = Number(amount);
    if (amount <= this.savingsBalance) {
      this.savingsBalance -= amount;
    } else if (amount < this.total()) {
      const difference = amount - this.savingsBalance;
      this.savingsBalance = 0;
      this.checkingBlance -= difference;
    }
  },
}
