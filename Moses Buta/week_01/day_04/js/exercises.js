console.log("something to look for!")
//
// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

// ```javascript
const rectangleA = {
  length: 4,
  width: 4
};

//isSquare

  //define a function called rectangleTesing
  //and the function takes the rectangle object as an input(parameter)
const isSquare = function(squareValues){
    //if the length = the width from the given input print to the screen "square"
  if(rectangleA.length === rectangleA.width) {
    console.log("square");
  }
  else {
    console.log("not square!")
  }
 };

//area
   //define a function called area which takes the multiply of the length and the width. Then print out to the screen the value in areaIs
  const area = function (areaValues) {
       const areaIs = rectangleA.length*rectangleA.width;
    console.log(areaIs);
  };

//perimeter
    //define a function called perimeter which takes the sum of length and width and multiplies it by 2 then prints it out to the screen
  const perimeter = function (perimeterValues){
  const perimeterIs = 2*(rectangleA.length + rectangleA.width);
   console.log(perimeterIs);
  };

    //the functions havent been called so call them!
isSquare();
area();
perimeter();








// ```
//
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
//```javascript
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

//isEquilateral
    //define a function called isEquilateral
    //the function takes the object triangleA as an input
const isEquilateral = function(triangle) {
     //for equilateral the three sides need to be the same
     // if the values of the properties in the object are equal print out to the screen "equilateral"
      if(triangleA.sideA === triangleA.sideB && triangleA.sideB === triangleA.sideC) {
        console.log("equilateral");
      } else {
        console.log("not equilateral");
      }
    };
//isIsosceles
      // if sideA is the same as sideB || sideC, + if sideB is the same as sideC then print out to the screen "is isosceles"
const isIsosceles = function (isosceles) {
      if(triangleA.sideA === triangleA.sideB || triangleA.sideA === triangleA.sideC || triangleA.sideB === triangleA.sideC ) {
        console.log("is Isosceles");
      } else{
        console.log("not Isosceles");
      }
  };
//area
    //define a function called area that takes the calculated area using the properties of the triangleA
const areaOfTriangle = function(A, B, C ) {
  // Area	=	 √	 p	 (	p	−	a	) 	(	p	−	b	)	 (	p	−	c	)
  //where p is half the perimeter, or
  //(a	+	b	+	c)/2
  // create a varible that will take half of the perimeter as an input
  const h = (triangleA.sideA + triangleA.sideB + triangleA.sideC)/2;
  // calculate the area and print it to the screen
   const areaCalculation = Math.sqrt(h*((h - triangleA.sideA)*(h - triangleA.sideB)*(h - triangleA.sideC)));
   console.log(areaCalculation);
};
// isObtuse
// create a function called isObtuse that will take triangleA as an input and
const isObtuse = function(obtuseInput){
   if ((triangleA.sideA !== triangleA.sideB) && (triangleA.sideA !== triangleA.sideC) && (triangleA.sideB !== triangleA.sideC )) {
     console.log("Obtuse");
   }else{
     console.log("not obtuse");
   }
};
  isEquilateral();
  isIsosceles();
  areaOfTriangle();
  isObtuse();


// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
//define a function called cashRegister that takes

const cashRegister = function (object){
  // store the object array into items
  let items = Object.keys(object);
  // for the item variable iterate to the last index[5] staring at 0 (increment by one)
  for(let i = 0; i < items.length; i++) {
    console.log( (items[i]) );
}
// parse the arguments in object cartForParty and return a floting number which will be stored in variable sum
sum =
Number.parseFloat(cartForParty.banana)+
Number.parseFloat(cartForParty.handkerchief)+
Number.parseFloat(cartForParty.Tshirt)+
Number.parseFloat(cartForParty.apple)+
Number.parseFloat(cartForParty.nalgene)+
Number.parseFloat(cartForParty.proteinShake)
console.log(sum);
};
cashRegister(cartForParty); // 60.55

//
// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
//
// The following credit card numbers are valid:
//
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
//
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
