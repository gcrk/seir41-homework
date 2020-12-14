console.log("Hello world.....??");

/*
# The Cash Register

Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
Example
*/

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
//global variable to hold sum total
let sumTotal;

//this function will return the total of all the items in the shopping cart
const cashRegister = function(cartForParty) {
  //local variable to hold sub total
  let subTotal;

  //loop to iterate through the cart and add each price to subtotal
  for (let i = 0; i < this.length; i++) {
    subTotal = subTotal + this.itemPrice;
  }
  return subTotal;
}

//write a function to apply a rounding to the sumTotal
  //if the total of sumTotal ends with <5 round down to nearest 0 Math.round(x)?
  //if the total of sumTotal ends with >5 round up to nearest 0

// Output
cashRegister(); // 60.55
