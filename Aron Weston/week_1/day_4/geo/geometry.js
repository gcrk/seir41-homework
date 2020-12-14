//Store Global Vars
const rectangleA = {
    length: 4,
    width: 4
};

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

// Part 1 - Rectangle

//Square
const isSquare = rect => console.log(!rect.length === rect.width ? "Not square" : "Square");
//Area
const area = rect => console.log(rect.width * rect.length);
//perimeter
const perimeter = rect => console.log(2 * (rect.length + rect.width));

isSquare(rectangleA);
area(rectangleA);
perimeter(rectangleA);



// Part 2 - Triangle -  TBC 

const triMethods = {
    base: tri => {},
    areaTri: tri => 0.5 * (tri.sideA * tri.sideB),
    isIsosceles: tri => {},
    isObtuse: tri => {},
    isEquilateral: tri => Object.values(tri).sort()
}

console.log(triMethods.isEquilateral(triangleA));


// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not