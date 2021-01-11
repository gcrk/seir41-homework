//Store Global Vars
const rectangleA = {
    length: 4,
    width: 4
};

const triangleA = {
    sideA: 7,
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

// isSquare(rectangleA);
// area(rectangleA);
// perimeter(rectangleA);



// Part 2 - Triangle -  TBC 
const triangle = {
    sideA: 3,
    sideB: 3,
    sideC: 3
};


const isIsosceles = t => {
    let res;
    if (t.sideA === t.sideB || t.sideB === t.sideC || t.sideA === t.sideC) {
        res = true;
    } else {
        res = false;
    }
    return res;
}

const isEquilateral = t => {
    let res;
    if (t.sideA === t.sideB && t.sideA === t.sideC && t.sideB === t.sideC) {
        res = true;
    } else {
        res = false;
    }
    return res;
}

const triArea = t => {

    if (isEquilateral(t) === true) {
        const values = Object.values(t);
        const side = Math.max(...values);
        const height = Math.sqrt((side / 2)) + Math.sqrt(side);
        const area = 0.5 * (side * height);
        return `The triangle is Equilateral and has an area of ${area.toFixed(2)}`;
    } else if (isIsosceles(t) === true) {
        const values = Object.values(t);
        const base = Math.min(...values);
        const side = Math.max(...values);
        const height = Math.sqrt((base / 2)) + Math.sqrt(side);
        const area = 0.5 * (base * height);
        return `The triangle is Isosceles and has an area of ${area.toFixed(2)}`;

    } else {
        console.log('Your triangle is scalene');
    }
}

const isObtuse = t => {
    const values = Object.values(t)
    console.log(hyp);
}


// console.log('isObtuse', isObtuse(triangle));
console.log(triArea(triangle));
console.log('iso', isIsosceles(triangle));
console.log('eq', isEquilateral(triangle));