// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```

const rectangleA = {
  length: 4,
  width: 4
};
const rectangle = function(geometry){
  let result;
  if(geometry.length === geometry.width){
    result = 'Yes is a Square';
} else{
    result = 'You ain\'t a square mate!';
}
return result;
};

const areaOfRectangle = function (geometry) {
  return (geometry.length * geometry.width);
}
const perimeterOfRectangle = function (geometry) {
  return 2 * (geometry.length + geometry.width);
}

console.log(`Is this a square? ${ rectangle (rectangleA)}`);
console.log(`The area for a rectangle is ${ areaOfRectangle (rectangleA) }.`);
console.log(`The perimeter for a rectangle is ${ perimeterOfRectangle (rectangleA) }.`);


// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
const triangleA = {
  sideA: 4,
  sideB: 3,
  sideC: 4
};
 const isEquilateral = function note (triangle){
let result;
   if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC && triangle.sideA !== null && triangle.sideC !== null){
     result = 'Yess!!! this is an Equilateral triangle';
} else {
     result = 'Ohh!! No, this is not an Equilateral triangle';
}
   return result;
};
const isIsosceles = function attention (triangle){
  let result;
    if (triangle.sideA == triangle.sideB && triangle.sideB !== triangle.sideC && triangle.sideA !== null) {
}
result = 'Yess!!! this is an Isosceles triangle';
    if (triangle.sideA !== triangle.sideB && triangle.sideB == triangle.sideC && triangle.sideA !== null) {

result = 'Yess!!! this is an Isosceles triangle';
}   else {
    result = 'Ohh!! No, this is not an Isosceles triangle';
}
  return result
};
const isObtuse = function alert (triangle){
  let result;
  if
    (triangle.sideA < triangle.sideB || triangle.sideA < triangle.sideC
  || triangle.sideA > triangle.sideB || triangle.sideB > triangle.sideC
  || triangle.sideC >triangle.sideB  || triangle.sideA > triangle.sideC
  && triangle.sideB !== triangle.sideC && triangle.sideC !== triangle.sideA && triangle.sideA !== triangle.sideB ){
    result = 'Yess!!! this is an Obtuse triangle';

} else
    result = 'Ohh!! No, this is not an Obtuse triangle';

  return result;
};

console.log(isEquilateral(triangleA));
console.log(isIsosceles(triangleA));
console.log(isObtuse(triangleA));

//console.log(`${sTriangle(triangleA)}`);


// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
const cashRegister = function (cartAmount){

return (parseFloat(cartAmount.banana) + parseFloat(cartAmount.handkerchief) + parseFloat(cartAmount.Tshirt) + parseFloat(cartAmount.apple) + parseFloat(cartAmount.nalgene) + parseFloat(cartAmount.proteinShake))
};
console.log(`${cashRegister(cartForParty)}`);
