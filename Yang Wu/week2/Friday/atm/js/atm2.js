//the last solution treat DOM as a database, which is not what DOM is good at or aim at. This solution is building a function to do the instructions without touching DOM. so no need to change everthing between string, number and other things.
const accounts = {
  checkingBalance: 0,
  savingBalance: 0,
  total: function () {
    return this.checkingBalance + this.savingBalance;
  },


  checkingDeposit: function(amount) {
    this.checkingBalance += Number(amount);
  },

  checkingWithdraw: function(amount) {
    if (amount <= this.checkingBalance) {
    this.checkingBalance -= Number(amount);
    } else if (amount <= this.total()) {
    let difference = amount - this.checkingBalance;
    this.checkingBalance = 0;
    this.savingBalance -= difference;
    }
  },

  savingDeposit: function(amount) {
    this.savingbalance += Number(amount);
  },

  savingWithdraw: function(amount) {
    this.savingbalance -= Number(amount);
  }

}
