$(document).ready(function () {
	bank.updateBalance(); // Making sure the correct balance is displayed on load.

	// Event Listener on all 4 buttons on click.
	$("#checking-deposit, #checking-withdraw, #savings-deposit, #savings-withdraw").on("click", function () {
		const transaction = this.value.toLowerCase(); // Grabs the value attribute of the button that triggered the event to know if it's a withdrawal or deposit.
		const acc = this.id.replace(`-${transaction}`, ""); // Grabs the Account type that the user is Depositing to / Withdrawing from.
		bank[transaction](acc, Math.abs($(`#${acc}-amount`).val())); // Invoke the Bank Object Method below based on the Account and Transaction type above.
	});
});

const bank = {
	accounts: {
		checking: 0,
		savings: 0
	},
	deposit(accType, amount) {
		this.accounts[accType] += amount;
		this.updateBalance();
	},
	withdraw(accType, amount) {
		let overdraftAcc;
		const accBalance = this.accounts[accType];
		const totalBalance = this.accounts.checking + this.accounts.savings;

		accType === "checking" ? (overdraftAcc = "savings") : (overdraftAcc = "checking"); // Determine what the overdraft account is (should be the opposite of the targeted account).

		if (accBalance >= amount) {
			this.accounts[accType] -= amount; // Allow normal withdrawal if there is sufficient balance.
		} else if (totalBalance >= amount) {
			this.accounts[accType] -= accBalance; // Insufficient balance on current account but total balance on both accounts are sufficient, withdraw everything from current account.
			this.accounts[overdraftAcc] -= amount - accBalance; // Access overdraft account for the rest of the amount being withdrawn.
		}
		this.updateBalance();
	},
	updateBalance() {
		const $checkingBalance = $("#checking-balance"); // Storing jQuery object for div id #checking-balance.
		const $savingsBalance = $("#savings-balance"); // Storing jQuery object for div id #savings-balance.

		// Changing div balance background to Red / Gray by adding / removing .zero class. CSS changes the colour. $0 === Red , Balance in account === Gray.
		bank.accounts.checking === 0 ? $checkingBalance.addClass("zero") : $checkingBalance.removeClass("zero"); // For Checking balance div.
		bank.accounts.savings === 0 ? $savingsBalance.addClass("zero") : $savingsBalance.removeClass("zero"); // For Savings balance div.

		// Update HTML div balance text to reflect the balance of each accounts.
		$checkingBalance.text(`$${bank.accounts.checking}`);
		$savingsBalance.text(`$${bank.accounts.savings}`);
	}
};
