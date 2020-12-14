// Part 1
//





// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (number) {
  const square = number * number;
  console.log(`The result of squaring the number ${number} is ${square}.`);
  return square;
};

squareNumber(100);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (number) {
  const half = number / 2;
  console.log(`Half of ${number} is ${half}.`);
  return half;
};

halfNumber(10);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {
  const percent = (num1 / num2) * 100;
  console.log(`${num1} is ${percent}% of ${num2}.`);
  return percent;
};

percentOf(25, 100);

// Bonus: Round the result so there are only two digits after the decimal.

const roundTwoDigits = function (number) {
  return Number.toFixed(2);
};

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function (radius) {
  const area = 3.14 * radius * radius;
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
  return roundTwoDigits(area);
};

areaOfCircle(2);

// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const mixFunction = function(number) {
  const half = halfNumber(number);
  const square = squareNumber(half);
  const area = areaOfCircle(square);
  const percent = percentOf(area, square);
  return percent;
}

mixFunction(2);

// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function (amount) {
  if (amount === 1000000) {
    console.log(`${amount} dollars (pinky)`);
  } else {
    console.log(`${amount} dollars`);
  };
};
DrEvil(10);
DrEvil(1000000);

// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
