$(document).ready(function () {
	updateBalance(); // Redundant - incase HTML initial value is broken or changed. Just making sure the correct balance is displayed on load
	$("#checking-deposit").on("click", bank.deposit("checking", Number($("#checking-amount").val()))); // Checking - Deposit
	$("#checking-withdraw").on("click", bank.withdraw("checking", Number($("#checking-amount").val()))); // Checking - Withdraw
	$("#savings-deposit").on("click", bank.deposit("savings", Number($("#savings-amount").val()))); // Savings - Deposit
	$("#savings-withdraw").on("click", bank.withdraw("savings", Number($("#savings-amount").val()))); // Savings - Withdraw
});

const bank = {
	accounts: {
		checking: 0,
		savings: 0
	},
	deposit: function (accType, amount) {
		this.accounts[accType] += amount;
		updateBalance();
	},
	withdraw: function (accType, amount) {
		let overdraftAcc;
		const accBalance = this.accounts[accType];
		const totalBalance = this.accounts.checking + this.accounts.savings;

		if (accType === "checking") {
			overdraftAcc = "savings";
		} else overdraftAcc = "checking";

		if (accBalance >= amount) {
			this.accounts[accType] -= amount;
		} else if (totalBalance >= amount) {
			this.accounts[accType] -= accBalance;
			this.accounts[overdraftAcc] -= amount - accBalance;
		}
		updateBalance();
	}
};

const updateBalance = () => {
	$("#checking-balance").text(`$${bank.accounts.checking}`);
	$("#savings-balance").text(`$${bank.accounts.savings}`);
};
