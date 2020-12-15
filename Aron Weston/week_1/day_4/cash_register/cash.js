// Cash Register

const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

const cashRegister = (purchase) => {

    //Set the values to an array
    let values = Object.values(purchase);

    //Loop through our new values array, adding them up.
    let sum = 0;
    for (i = 0; i < values.length; i++) {
        //We use parseFloat here because we want to keep our values to two decimal places to get the right sum. 
        sum = sum + parseFloat(values[i]);
    }

    console.log(sum);
}

cashRegister(cartForParty)