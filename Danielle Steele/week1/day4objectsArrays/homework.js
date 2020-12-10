// # Geometry Function Lab
// ### Part 1, Rectangle



// Given the following a `rectangle` object like the one below,
// write the following functions which accept a `rectangle`
// object as an argument:

//Object below//
const rectangleA = {
   length: 4,
   width: 4
 };

 const rectangleB = {
    length: 8,
    width: 4
  };


// * isSquare - Returns whether the rectangle is a square or not
const isSquare = (arg1) => {
    if (arg1.length === arg1.width) {
     return true;
    }
    return false;
}

console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));
// To find the area of a rectangle, multiply it's height by it's width.
// To find the area of a square, length of one side multiplied by 2.



// // // * area - Returns the area of the rectangle
//  const areaOfX = (rectangleA) => {
//      if (XXXXX) {
//       return ???
//      }
 //}



// // * perimeter - Returns the perimeter of the rectangle
// const isSquare = () => {
//     if (rectangle is Sqaure) {
//      return true
//     }
// }






















// ### Part 2, Triangle

// Given the following a `triangle` object like the one below,
// write the following functions which accept a `triangle`
// object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral
// or not

// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };