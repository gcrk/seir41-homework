//Week 1 - Day 2 - Calculator

const halfNumber = (num) => {
    let half = num / 2;
    console.log(`HALF: Half of ${num} is ${half}`);
    return half;
}

const squareNumber = (num) => {
    let square = Math.sqrt(num).toFixed(2);
    console.log(`SQUARE: The result of squaring the number ${num} is ${square}`)
    return square;
}

const percentOf = (num1, num2) => {
    let percentage = Math.ceil((num1 / num2) * 100)
    console.log(`PERCENT: ${num1} is ${percentage}% of ${num2}`);
    return percentage;
}


const areaOfCircle = (r) => {
    let area = ((Math.PI * r), 2).toFixed(2);
    console.log(`AREA: The area for a circle with radius ${r} is ${area}`);
    return area;
}

const calculateMe = (num) => {
    let half = halfNumber(num);
    let square = squareNumber(half);
    let area = areaOfCircle(square);
    percentOf(area, square);
}

calculateMe(2);