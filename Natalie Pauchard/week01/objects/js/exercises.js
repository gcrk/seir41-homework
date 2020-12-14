console.log("thurs_HW");

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
//
const rectangleA = {
   length: 4,
   width: 4
 }

const isSquare = function(objectR) {
  if (objectR.length === objectR.width) {
    return "square";
  } else {
    return "not a sqaure";
  }
};

const areaR = function(objectR) {
  return objectR.length * objectR.width;
}

const perimeter = function(objectR) {
  return 2 * (objectR.length + objectR.width);
}

console.log(isSquare(rectangleA));
console.log(areaR(rectangleA));
console.log(perimeter(rectangleA));


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
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleB = {
  sideA: 8,
  sideB: 8,
  sideC: 8
};


const isEquilateral = function(objectT) {
  if ((objectT.sideA === objectT.sideB) && (objectT.sideA === objectT.sideC)) {
    return "Equilateral";
  } else {
    return "not Equilateral";
  }
};

const isIsosceles = function(objectT) {
  if (objectT.sideA === objectT.sideB || objectT.sideA === objectT.sideC || objectT.sideB === objectT.sideC) {
    return "Isosceles";
  } else {
    return "not Isosceles";
  }
};

const isObtuse = function(objectT) {
  if ((objectT.sideA !== objectT.sideB) && (objectT.sideA !== objectT.sideC) && (objectT.sideB !== objectT.sideC)) {
    return "Obtuse";
  } else {
    return "not Obtuse";
  }
};

const areaT = function(objectT) {
  const s = (objectT.sideA + objectT.sideB + objectT.sideC) / 2;
  return (Math.sqrt(s * (s - objectT.sideA) * (s - objectT.sideB) * (s - objectT.sideC)));
};

console.log(areaT(triangleA));
console.log(isEquilateral(triangleA));
console.log(isIsosceles(triangleA));
console.log(isObtuse(triangleA));

console.log(areaT(triangleB));
console.log(isEquilateral(triangleB));
console.log(isIsosceles(triangleB));
console.log(isObtuse(triangleB));
