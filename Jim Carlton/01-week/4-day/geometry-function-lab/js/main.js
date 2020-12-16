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

let rectangleA = {
  length: 4,
  width: 4
}

const isSquare = function (length, width) {

// Determine if a square or not
  if (length === width){
    return `You are a square!`;
  }
  else {
    return `You are a rectangle!`;
  }
}

// Find the area via separate function (is it possible to combine them?)
const area = function (length, width) {
  let a = length * width;
  return `Your area is ${a}cm².`;
}

// Find the perimeter via separate function
const perimeter = function (length, width) {
  let a = 2 * (length + width);
  return `Your perimeter is ${a}cm`;
}

// isSquare
console.log(isSquare(rectangleA.length, rectangleA.width));
// area
console.log(area(rectangleA.length, rectangleA.width));
// perimeter
console.log(perimeter(rectangleA.length, rectangleA.width));


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


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
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```

const triangleA = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

// isEquilateral
const isEquilateral = function (t){
  let result;
  if (t.sideA === t.sideB && t.sideA === t.sideC && t.sideA !== null){
    result = `You're an equilateral triangle!`;
  }
  else {
    result = `Are you kidding? You ain't an equilateral triangle mate!`
  }
  return result;
}

// isIsosceles
const isIsosceles = function (t) {
  let result;
  if (t.sideA === t.sideB && t.sideA !== t.sideC || t.sideB === t.sideC && t.sideA !== t.sideB || t.sideA === t.sideC && t.sideA !== t.sideB){
    result = `You're an isosceles triangle cuz!`;
  }
  else {
    result = `R u srs? You ain't an isosceles triangle!`
  }
  return result;
}

// area
const areaT = function (t){
  let s = (t.sideA + t.sideB + t.sideC) / 2;
  let a = Math.sqrt(s * (s - t.sideA) * (s - t.sideB) * (s - t.sideC));
  let result = `Your area is ${a.toFixed(2)}cm².`;
  return result;
}

// isObtuse
const isObtuse = function (t) {
// Determine angles within triangles
  function calcAngle(adjacent, hypotenuse) {
  return Math.acos(adjacent / hypotenuse);
  }

  let angle1 = (calcAngle(t.sideA, t.sideB)) / (Math.PI / 180);
  let angle2 = (calcAngle(t.sideB, t.sideC)) / (Math.PI / 180);
  let angle3 = (calcAngle(t.sideA, t.sideC)) / (Math.PI / 180);

// Conditional statements for if obtuse or not
  let result;
  if (angle1 >= 90 || angle2 > 90 || angle3 > 90){
    let result = `Your triangle is obtuse - huge in fact!`;
  }
  else {
    let result = `Your triangle is unfortunately not obtuse - got tell it to go to BL Burgers!`;
  }
  return result;
}

// isEquilateral
console.log(isEquilateral(triangleA));
// isIsosceles
console.log(isIsosceles(triangleA));
// area
console.log(areaT(triangleA));
// isObtuse
console.log(isObtuse(triangleA));

// First calculation of angles
// let angle1 = (Math.acos((Math.pow(t.sideA, 2) + (Math.pow(t.sideB, 2) - (Math.pow(t.sideC, 2) / (2 * t.sideA * t.sideB))) / (Math.PI / 180);
// let angle2 = (Math.acos((Math.pow(t.sideA, 2) + (Math.pow(t.sideC, 2) - (Math.pow(t.sideB, 2) / (2 * t.sideA * t.sideC))) / (Math.PI / 180);
// let angle3 = (Math.acos((Math.pow(t.sideC, 2) + (Math.pow(t.sideB, 2) - (Math.pow(t.sideA, 2) / (2 * t.sideC * t.sideB))) / (Math.PI / 180);
