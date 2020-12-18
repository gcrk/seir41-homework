$(document).ready(function () {});

const bank = {
	checking: 0,
	savings: 0,
	deposit: function (account, amount) {
		bank.account += amount;
	},
	withdraw: function (account, amount) {
		if (bank.account >= amount) {
			bank.account -= amount;
		}
	}
};
