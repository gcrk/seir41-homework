const squareNumber = function (num) {
  const square = num * num;
  console.log(`The result of squaring the number ${num} is ${square}.`);
  return square;
}

squareNumber(5);


const halfNumber = function (num) {
  const half = num / 2;
  console.log(`Half of ${num} is ${half}.`);
  return half;
}

halfNumber(8);


const percentOf = function (num1, num2) {
  const percent = num1 / num2 * 100;
  console.log(`${num1} is ${percent}% of ${num2}.`);
  return percent;
}

percentOf(8, 27);


const areaOfCircle = function (radius) {
  const area = (Math.PI * radius * radius).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
  return area;
}

areaOfCircle(8);


const finalFunction = function (num) {
  const half = halfNumber(num);
  const square = squareNumber(half);
  const area = areaOfCircle(square)
  percentOf(area, square);
}

finalFunction(7);
