console.log("Hello world.....??");

/*
# Geometry Function Lab

### Part 1, Rectangle

Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

* isSquare - Returns whether the rectangle is a square or not
* area - Returns the area of the rectangle
* perimeter - Returns the perimeter of the rectangle
*/

//this creates an object
const rectangleA = {
  length: 8245,
  width: 325
};

//this function will compare length & width to determine if the object is a rectangle
const isSquare = function(length, width) {

  //local result variable
  let result;

  //below is the comparison
  if (rectangleA.length == rectangleA.width) {
    result = "I am a square";
  } else {
    result = "I am NOT a square";
  };
  return result;
};

console.log(isSquare());

//this function will calculate the area of the rectangleA object
const area = function (length, width) {

  //below is the area calculation formula
  let result = rectangleA.length * rectangleA.width;
  return result + " is the area.";
};

console.log(area());

//this function will calculate the perimeter of the object
const perimeter = function (length, width) {

  //below is the formula to calculate the perimeter of the object
  let result = 2 * (rectangleA.length + rectangleA.width);
  return result + " is the perimeter";
};

console.log(perimeter());

/*
### Part 2, Triangle

Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

* isEquilateral - Returns whether the triangle is equilateral or not
* isIsosceles - Returns whether the triangle is isosceles or not
* area - Returns the area of the Triangle
* isObtuse - Returns whether the triangle is obtuse or not
*/

//this creates the triangleA reference object
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

//equilateral
const isEquilateral = function(t) {
  //local variables
  let result;

  // below is the formula to work out if the object is equilateral or not
  if (t.sideA === t.sideB && t.sideA === t.sideC && t.sideA !== null) {
    result = "I am equilateral.";
  } else {
    result = "I am NOT equilateral.";
  };
  return result;
};

console.log(isEquilateral(triangleA));

//isosceles
const isIsosceles = function (t) {
  //local variables
  let result;

  if (t.sideA === t.sideB !== t.sideC || t.sideA === t.sideC !== t.sideB || t.sideB === t.sideC !== sideA) {
    result = "i am an isosceles.";
  } else {
    result = "I am NOT isosceles.";
  };
  return result;
};

//obtuse
console.log(isIsosceles(triangleA));
  //local variable
  let result;

//this creates the obtuse comparison
const isObtuse = function (t){
  if ((t.sideA !== t.sideB) && (t.sideA !== t.sideC) && (t.sideB !== t.sideC)) {
    result = "I am an obtuse triangle."
  } else {
    result = "I am NOT an obtuse triangle."
  };
  return result;
};

console.log(isObtuse(triangleA));

//area
const triArea = function (t){
  //local variable
  let result;
  const s = (t.sideA + t.sideB + t.sideC) / 2;
  result = (Math.sqrt(s * (s - t.sideA) * (s - t.sideB) * (s - t.sideC)));
  return result;
};


console.log(triArea(triangleA));
