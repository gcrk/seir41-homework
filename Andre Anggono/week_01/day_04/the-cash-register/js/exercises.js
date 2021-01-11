// The Cash Register
const cartForParty = {
	banana: "1.25",
	handkerchief: ".99",
	Tshirt: "25.01",
	apple: "0.60",
	nalgene: "10.34",
	proteinShake: "22.36"
};

const cashRegister = function (cart) {
	const cartValues = Object.values(cart);
	let total = 0;

	for (let i = 0; i < cartValues.length; i++) {
		total += Number(cartValues[i]); // Number() converts string to typeof number
	}

	return total;
};
