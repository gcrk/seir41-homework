



// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

// ```javascript



 const rectangleA = {
   length: 4,
   width: 4,
 };
const rectangleOrNot = function(shape) {
    if (shape.length === shape.width) {
    return "is square";

}   else if (shape.length > shape.width) {
    return "is rectangle";

}   else if (shape.length < shape.width) 
    return "is rectantle";
};




const rectangleArea = function(area) {

}

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```

// isEquilateral
const isEquilateral = function (t){
    let result;
    if (t.sideA === t.sideB && t.sideA === t.sideC && t.sideA !== null){
      result = `Is Equilateral`;
    }
    else {
      result = `Isn't an Equilateral`
    }
    return result;
  }
  
  // isIsosceles
  const isIsosceles = function (t.sideA, t.sideB, t.sideC) {
    let result;
    if (t.sideA === t.sideB && t.sideA !== t.sideC || t.sideB === t.sideC && t.sideA !== t.sideB || t.sideA === t.sideC && t.sideA !== t.sideB){
      result = `Is Isosceles`;
    }
    else {
      result = `I'snt an Isosceles`
    }
    return result;
  }



// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

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

// // Output
//cashRegister(cartForParty); // 60.55

function cashRegister(trolley){
    const items = Object.keys(trolley);   
    const sum = 0; 
    
    for (let i = 0; i < items.length; i++) {
      const itemName = items[i]; 
      const itemPrice = trolley[itemName]; 
      sum += Number.parseFloat(itemPrice);
    }
     return sum;
  }