$(document).ready(function () {});

const bank = {
	accounts: {
		checking: 0,
		savings: 0
	},
	deposit: function (accType, amount) {
		this.accounts[accType] += amount;
	},
	withdraw: function (accType, amount) {
		let overdraftAcc;
		const accBalance = this.accounts[accType];
		const totalBalance = this.accounts.checking + this.accounts.savings;

		if (accType === "checking") overdraftAcc = "savings";
		else overdraftAcc = "checking";

		if (accBalance >= amount) this.accounts[accType] -= amount;
		else if (totalBalance >= amount) {
			this.accounts[accType] -= accBalance;
			this.accounts[overdraftAcc] -= amount - accBalance;
		}
	}
};
