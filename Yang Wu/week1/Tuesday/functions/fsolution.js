// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
// It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
// It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number,
// and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function (num) {
  let result = (num**2).toFixed(2);
  let text = `The result of squaring the number ${num} is ${result}.`
  console.log (text);
  return result;
}

squareNumber(5.24);

const halfNumber = function (num) {
  let result = (num/2).toFixed(2);
  let text = `Half of ${num} is ${result}.`
  console.log (text);
  return result;
}

const percentOf = function (num1, num2) {
  let percentage = (num1/num2*100).toFixed(2);
  let text = `${num1} is ${percentage}% of ${num2}.`
  console.log (text);
  return percentage;
}

const areaOfCircle = function (radius) {
  let area = (Math.PI*radius*radius).toFixed(2);
  let text = `The area for a circle with radius ${radius} is ${area}.`
  console.log (text);
  return area;
}

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const superhw = function(num) {
  let step1 = halfNumber(num);
  let step2 = squareNumber(step1);
  let step3 = areaOfCircle(step2);
  let result = percentOf(step3,step2);
}
superhw(50);
