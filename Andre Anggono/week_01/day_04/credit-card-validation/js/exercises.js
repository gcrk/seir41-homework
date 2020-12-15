// Credit Card Validation
const validateCreditCard = function (creditcard) {
	const validNumber = 16;
	let uniqueDigits = [];
	let sum = 0;
	const report = {
		valid: false,
		number: creditcard,
		error: undefined
	};

	// Removing the dashes - from the creditcard input string
	const cc = creditcard.replaceAll("-", "");

	// Running nested checks. Continue to next stage if first check passes , etc.
	// check for valid number and no invalid characters (all numbers)
	if (Number(cc) && cc.length === validNumber) {
		for (let i = 0; i < validNumber; i++) {
			//checking if creditcard number is unique / have seen it before. If not store it in an array
			if (!uniqueDigits.includes(Number(cc[i]))) {
				uniqueDigits.push(Number(cc[i]));
			}
		}

		//Checking atleast two different digits based on the check above
		// if so, continue with the next stage of checks. Otherwise write error message
		if (uniqueDigits.length > 1) {
			// checking if the last digit is an even number.
			// even numbers have 0 remainders when divided by 2
			if (Number(cc.substr(-1)) % 2 === 0) {
				// adding up all the digits of the credit card
				for (let i = 0; i < validNumber; i++) {
					sum += Number(cc[i]);
				}

				//checking if the sum of all digits are greater than 16
				// return true for report.valid if it is as this is the last check.
				// deleted the error key in report object as this is a valid card so it doesn't need an error message
				if (sum > 16) {
					report.valid = true;
					delete report.error;
				} else {
					report.error = "sum_less_than_16";
				}
			} else {
				report.error = "odd_final_digit";
			}
		} else {
			report.error = "not_enough_unique_digits";
		}
	} else {
		report.error = "invalid_number_or_length";
	}

	return report;
};

console.log(validateCreditCard("9999-9999-8888-0000"));
console.log(validateCreditCard("6666-6666-6666-1666"));
console.log(validateCreditCard("a923-3211-9c01-1112"));
console.log(validateCreditCard("4444-4444-4444-4444"));
console.log(validateCreditCard("1111-1111-1111-1110"));
console.log(validateCreditCard("6666-6666-6666-6661"));
