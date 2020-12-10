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
const rectangleA = {
  length: 4,
  width: 4
};
const rectangleB = {
  length: 5,
  width: 8
};
// ```

const isSquare = function (rect) {
  return rect.length === rect.width;
}

const area = function (rect) {
  return rect.width * rect.length;
}

const perimeter = function (rect) {
  return 2 * rect.length + 2 * rect.width;
}

console.log(`Is a square: ${isSquare(rectangleA)}`);
console.log(`The area is: ${area(rectangleA)}`);
console.log(`The perimeter is: ${perimeter(rectangleA)}`);

console.log(`Is a square: ${isSquare(rectangleB)}`);
console.log(`The area is: ${area(rectangleB)}`);
console.log(`The perimeter is: ${perimeter(rectangleB)}`);

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
  sideA: 3,
  sideB: 4,
  sideC: 4
};
const triangleB = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};
// ```

const isEquilateral = function (tri) {
  return tri.sideA === tri.sideB && tri.sideA === tri.sideC;
}

const isIsosceles = function (tri) {
  return (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC) && (tri.sideA !== tri.sideB || tri.sideA !== tri.sideC || tri.sideB !== tri.sideC);
}

const compareSides = function (tri) {
  const sides = Object.values(tri);
  for (var i = 0; i < sides.length; i++) {
    const ii = (i + 1) % 3;
    if (sides[i] === sides[ii]) {
      return sides[(ii + 1) % 3];
    }
  }
}

const triArea = function (tri) {
  const s = (tri.sideA + tri.sideB + tri.sideC) / 2;
  return Math.sqrt(s * (s - tri.sideA) * (s - tri.sideB) * (s - tri.sideC));
}

console.log(isEquilateral(triangleB));
console.log(isIsosceles(triangleA))
console.log(triArea(triangleB));;

// const isObtuse = function (tri) {
//   return (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC) && (tri.sideA !== tri.sideB || tri.sideA !== tri.sideC || tri.sideB !== tri.sideC);
// }
