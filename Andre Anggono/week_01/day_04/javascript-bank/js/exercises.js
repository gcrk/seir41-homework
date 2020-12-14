// JavaScript Bank
const bank = {
	accounts: [
		{
			accNum: 111111,
			name: "John Smith",
			currentBalance: 500
		},
		{
			accNum: 111112,
			name: "Jane Cooper",
			currentBalance: 5000
		}
	],
	totalBalance: function () {
		let total = 0;

		for (let i = 0; i < this.accounts.length; i++) {
			total += this.accounts[i].currentBalance;
		}

		return total;
	},
	newAccount: function (fName, initialDeposit = 0) {
		// Format: find the next available account number | customer name | initial deposit value. Defaults to 0
		this.accounts.push({ accNum: this.accounts[this.accounts.length - 1].accNum + 1, name: fName, currentBalance: initialDeposit });
	},
	deposit: function (accNum, amount) {
		const accIndex = this.accounts.findIndex((x) => x.accNum === accNum);

		this.accounts[accIndex].currentBalance += amount;
	},
	withdrawal: function (accNum, amount) {
		const accIndex = this.accounts.findIndex((x) => x.accNum === accNum);
		const customerBalance = this.accounts[accIndex].currentBalance;

		if (customerBalance >= amount) {
			this.accounts[accIndex].currentBalance = customerBalance - amount;
		} else {
			console.log(`Insufficient Funds! Your balance is ${customerBalance}`);
		}
	},
	transfer: function (from, to, amount) {
		this.withdrawal(from, amount);
		this.deposit(to, amount);
	}
};
