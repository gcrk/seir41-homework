//Correct inputs
const c1 = '9999-9999-9888-8002';
const c2 = '6666-6666-6666-1666';

//Incorrect input
const in1 = "a923-3211-9c01-1112"
//TO DO: Create the repeating number condition
const in2 = "4444-4444-4444-4444";
//Sum less that 16
const in3 = "1111-1111-1111-1110";
//Odd final number
const in4 = "6666-6666-6666-6661";
//Odd final number
const in5 = "6666-6666-6666-6663331";

const creditObj = {
    valid: "",
    number: "",
    error: ""
}

const error = (err, num) => {
    creditObj.valid = false;
    creditObj.error = err;
    creditObj.number = num;
}

const success = (isValid, num) => {
    creditObj.number = num;
    isValid ? creditObj.valid = true : false;
    delete creditObj.error;
}

const digits = (num) => {
    const reg = /^\d{4}?[-. ]?\d{4}[-. ]?\d{4}[-. ]?\d{4}$/

    //1. Do we have all numbers 
    if (!reg.test(num)) {
        //1.1 Niet? Okay, tell the console and the creditObj. They're not going to be happy.  
        error("invalid characters", num);
        return false;
    } else {
        //2. We want to get rid of the space, . or -, so lets split the array and separate it all out
        const splitNum = num.split('');

        //3. Loop through the array and find all of the numbers. All numbers are divisible by 1, so push all of these numbers to a new array and lets party.
        let numArr = [];
        for (i = 0; i < splitNum.length; i++) {
            if (splitNum[i] % 1 === 0) {
                numArr.push(splitNum[i])
            }
        }
        //4. Double check if we have 16 
        if (numArr.length > 16) {
            //5. No characters? Sweet, add them up but double check that they are a number. We don't want to get sued.
            let sum = 0;
            for (i = 0; i < numArr.length; i++) {
                let number = Number(numArr[i]);
                sum = sum + number;
            }

            //7. Cool, now check if the last number is even if its divisible by 2.
            if (numArr[numArr.length - 1] % 2 === 0) {

                //6. Nice, we're on a roll. Now, is our summed number greater than 16? 
                if (sum > 16) {
                    //8. Glue it back together
                    success(true, num);
                    return true;
                } else {
                    //...to major...
                    error("sum_less_than_16", num);
                    return false;
                }

            } else {
                //Ground control...
                error("odd_final_number", num);
                return false;
            }
        } else {
            //...Tom.
            error("wrong_length.", num);
            return false;
        }
    }
}

console.log(digits(c1), creditObj);
console.log(digits(c2), creditObj);
console.log(digits(in1), creditObj);
// console.log(digits(in2), creditObj); TO DO: create a repeating number condition - forgot this
console.log(digits(in3), creditObj);
console.log(digits(in4), creditObj);
console.log(digits(in5), creditObj);