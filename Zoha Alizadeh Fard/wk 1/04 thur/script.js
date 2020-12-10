// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:


const rectangle2 = {
  length: 4,
  width: 4,
};


const rectangle1 = {
  length: 4,
  width: 5,
};

// * isSquare - Returns whether the rectangle is a square or not

function isSquare (width, length) {
if (length === width){
  console.log(`${true}, this rectangle is a square!`)
} else {
  console.log(`${false}, this rectangle is a square!`)
}
};

isSquare(rectangle1.width, rectangle1.length);
isSquare(rectangle2.width, rectangle2.length);


// * area - Returns the area of the rectangle

function area (width, length) {
  console.log(width * length)
  };


area(rectangle1.width, rectangle1.length);
area(rectangle2.width, rectangle2.length);
    
// * perimeter - Returns the perimeter of the rectangle

function perimeter (width, length){
  console.log((2 * width) + (2 * length))
};

perimeter(rectangle1.width, rectangle1.length);
perimeter(rectangle2.width, rectangle2.length);
  

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

const triangle1 = {
  sideA: 4,
  sideB: 7,
  sideC: 3,
};

const triangle2 = {
  sideA: 4,
  sideB: 4,
  sideC: 8,
};
const triangle3 = {
  sideA: 3,
  sideB: 3,
  sideC: 3,
};

function isEquilateral(sideA, sideB, sideC) {
if ( sideA === sideB && sideA === sideC ) {
  console.log(`yep - this triangle is Eq u i l a t er a l`)
} else {
  console.log(`nope - this triangle is not equilateral you idiot!`)
}
};

isEquilateral(triangle1.sideA, triangle1.sideB, triangle1.sideC);

function isIsosceles(sideA, sideB, sideC) {
  if ( sideA === sideB || sideB === sideC || sideA === sideC) {
  console.log(`yep - this triangle is Iso-sceles`)
} else {
  console.log(`nope - this triangle is not isosceles - you sure you know what isosceles means?!`)
}
};


isIsosceles(triangle2.sideA, triangle2.sideB, triangle2.sideC);


function area(sideA, sideB, sideC){
  return sideA * sideB * sideC
};
console.log(area(triangle3.sideA, triangle3.sideB, triangle3.sideC));

function isObtuse(sideA, sideB, sideC){
  if(sideA > Math.abs(sideB - sideC) && sideA < (sideB + sideC)) {
    console.log('interesting - this triangle is an obtuse triange!')
  } 
  else if(sideB > Math.abs(sideA - sideC) && sideB < (sideA + sideC)) {
    console.log('interesting - this triangle is an obtuse triange!')
  }
  else if(sideC > Math.abs(sideA - sideC) && sideC < (sideA + sideC)) {
    console.log('interesting - this triangle is an obtuse triange!')
  } else {
    console.log('nope - this triange is not an obtuse triangle!')
  }
};

isObtuse(triangle3.sideA, triangle3.sideB, triangle3.sideC);
isObtuse(triangle2.sideA, triangle2.sideB, triangle2.sideC);
isObtuse(triangle1.sideA, triangle1.sideB, triangle1.sideC);