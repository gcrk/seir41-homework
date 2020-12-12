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

const rectangleX = {
  length: 8,
  width: 3,
}

const isSquare = function (rectangle) {
  if (rectangle.length === rectangle.width) {
    return true;
  } else {
    return false;
  }
}

const areaRec = function (rectangle) {
  recArea = rectangle.length * rectangle.width;
  console.log (`The area of the rectangle is ${recArea}.`)
}

const perimeter = function (rectangle) {
  recPerimeter = 2 * (rectangle.length + rectangle.width);
  console.log (`The perimeter of the rectangle is ${recPerimeter}.`)
}

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
// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```
const triangleX = {
  sideA: 3,
  sideB: 3,
  sideC: 3,
}

const triangleY = {
  sideA: 5,
  sideB: 4,
  sideC: 6,
}

const triangleZ = {
  sideA: 3,
  sideB: 4,
  sideC: 5,
}

const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
    return true;
  } else {
    return false;
  }
}

const isIsosceles = function (triangle) {
  if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC) {
    return true;
  } else {
    return false;
  }
}

const areaTri = function (triangle) {
  let s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  triArea = Math.sqrt(s * (s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC));
  console.log (`The area of the triangle is ${triArea.toFixed(2)}.`)
}


const isObtuse = function (triangle) {
  let sideArray = Object.values (triangle);
  let longest = 0;

  for (i = 0; i < sideArray.length; i++) { //find the longest side
    if (sideArray[i] > longest) {
      longest = sideArray [i];
    }
  }

  for (j = 0; j < sideArray.length; j++) { //get the other two elements
    if (longest === sideArray[j]) {
      delete sideArray[j];
    }
  }

  let shortSquare = sideArray[0] * sideArray[0] + sideArray[1] * sideArray[1];
  if (longest * longest < shortSquare) {
    console.log ("This triangle is an obtuse triangle.")
  } else {
    console.log ("This triangle is not an obtuse triangle.")
  }

}

isObtuse(triangleY);
isObtuse(triangleZ);
