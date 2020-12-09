// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (numberToSquare){
  squaredResult = Math.pow(numberToSquare, 2); // square the number
  console.log(`The result of squaring the number ${numberToSquare} is ${squaredResult}.`); // log it to test!
  return squaredResult; // store result
}

squareNumber(8);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (numberToHalve){
  const halvedResult = numberToHalve / 2; // halve the input (number)
  console.log(`Half of ${numberToHalve} is ${halvedResult}.`); // log it to test!
  return halvedResult; // store result
}

halfNumber(5);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2){
  const percentageResult = Math.round((num1 / num2) * 100); // calculate the resultant % of the first argument/value divided by the second argument/value
  console.log(`${num1} is ${percentageResult}% of ${num2}`); // log it to test!
  return `${percentageResult}%`; // return result and append % character to result
}

percentOf(2,4);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function (radius){
  areaOfCircleResult = Math.round(Math.PI * Math.pow(radius, 2) * 100) / 100; // calculate the area of the circle and round the result to 2 decimal places
  console.log(`The area for a circle with radius ${radius}mm is ${areaOfCircleResult}mm².`); // log it to test!
  return areaOfCircleResult; // store result
}

areaOfCircle(2);

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const allFunctionsCombined = function (commonNumber){
   const half = halfNumber(commonNumber); // define new variable with the global halfNumber function using the initial input of the allFunctionsCombined value
   const square = squareNumber(half); // define new variable with the global squareNumber function using the result from half (which uses the initial input)
   const area = areaOfCircle(square); // define new variable with the global areaOfCircle function using the result from square (which uses the result from half)
   const percent = percentOf(area,square); // define new variable with the global percentOf function using the result from area (which uses the result from square)
   console.log(half, square, area, percent); // log it to test!
   return;
}

allFunctionsCombined(12);
