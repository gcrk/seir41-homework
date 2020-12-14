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
    error: "",

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

//1. Test if we have the right input, true = return
const charCheck = (charInput) => {
    const reg = /^\d{4}?[-. ]?\d{4}[-. ]?\d{4}[-. ]?\d{4}$/
    if (!reg.test(charInput)) {
        error("invalid characters", charInput);
        return false;
    } else {
        return charInput;
    }
}

const charSplit = (charChecked) => {
    let numbers = charChecked.split('-').join('');
    if (numbers.includes("-")) {
        error("invalid characters", charInput);
        return false;
    } else {
        return numbers;
    }
}

const charSize = (numbers) => {

    let numArr = numbers.split();

    if (numbers.length === 16) {
        let sum = 0;

        for (i = 0; i < numArr.length; i++) {
            let number = Number(numArr[i]);
            sum = sum + number;
        }

    } else {
        error("wrong_length.", num);
        return false;
    }

}






const swipeTheCard = (customerInput) => {
    let a = charCheck(customerInput);
    let b = charSplit(a);
    return b;
}


console.log(swipeTheCard(c1));
// console.log(swipeTheCard(in1), creditObj);

// const digits = (num) => {

//     } else {
//         
//         //4. Double check if we have 16 
//         if (numArr.length > 16) {
//             //5. No characters? Sweet, add them up but double check that they are a number. We don't want to get sued.
//             

//             //7. Cool, now check if the last number is even if its divisible by 2.
//             if (numArr[numArr.length - 1] % 2 === 0) {

//                 //6. Nice, we're on a roll. Now, is our summed number greater than 16? 
//                 if (sum > 16) {
//                     //8. Glue it back together
//                     success(true, num);
//                     return true;
//                 } else {
//                     //...to major...
//                     error("sum_less_than_16", num);
//                     return false;
//                 }

//             } else {
//                 //Ground control...
//                 error("odd_final_number", num);
//                 return false;
//             }


//         } else {
//             //...Tom.
//             
//         }
//     }
// }

// console.log(digits(c1), creditObj);
// console.log(digits(c2), creditObj);
// console.log(digits(in1), creditObj);
// // console.log(digits(in2), creditObj); TO DO: create a repeating number condition - forgot this
// console.log(digits(in3), creditObj);
// console.log(digits(in4), creditObj);
// console.log(digits(in5), creditObj);