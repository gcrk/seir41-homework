// The Calculator
// Part 1

// Function to square a number
const squareNumber = function (num) {
    const result = num ** 2;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
};

// Function to find the half of a number
const halfNumber = function (num) {
    const result = num / 2;
    console.log (`Half of ${num} is ${result}.`);
    return result;
};

// Function to find the percentage of the first value to the second value
const percentOf = function (num1, num2) {
    const result = (num1 / num2 * 100).toFixed(2);
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
};

// Function to calculate the area of a circle
const areaOfCircle = function (radius) {
    const result = (Math.PI * (radius ** 2)).toFixed(2); // Formula: Pi r^2; .toFixed(2): round up to 2 decimal points;
    console.log(`The area for a circle with radius ${radius} is ${result}`);
    return result;
};

// Part 2
const calculateNumber = function (num) {
    const halfOfNumber = halfNumber(num);
    const squareOfNumber = squareNumber(halfOfNumber);
    const areaOfNumber = areaOfCircle(squareOfNumber);
    const percentageOfNumber = percentOf(areaOfNumber, squareOfNumber);
};