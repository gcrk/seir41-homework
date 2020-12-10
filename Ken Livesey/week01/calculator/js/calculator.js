// # The Calculator

// ## Part 1
/* - Write a function called squareNumber that will take one argument
(a number), square that number, and return the result. It should also log a
string like "The result of squaring the number 3 is 9." */

//the following function takes one value input & returns the square value of itself
const squareNum = function (num) {
  const squaredNum = num * num;
  console.log(`The result of squaring the number ${ num } is ${ squaredNum }.`);
  return squaredNum;
};

squareNum (3);


/*- Write a function called halfNumber that will take one argument (a number), divide it by 2, and
return the result. It should also log a string like "Half of 5 is 2.5.". */

//the following function takes one value input, divides it by 2 & returns it
const halfNum = function (num) {
  const halvedNum = num / 2;
  console.log(`Half of ${ num } is ${ halvedNum }.`);
  return halvedNum;
};

halfNum (5);


/* Write a function called percentOf that will take two numbers, figure out what
percent the first number represents of the second number, and return the result.
It should also log a string like "2 is 50% of 4."*/

/* the following function takes 2 value inputs & calculates the percentage the
first number is of the second number */
const percentOf = function (num3, num4) {
  const percentResult = (num3 / num4) * 100;
  console.log(`${ num3 } is ${ percentResult }% of ${ num4 }.`);
  return percentResult;
};

percentOf (5, 10);


/*- Write a function called areaOfCircle that will take one argument (the radius), calculate the
area based on that, and return the result. It should also log a string like
"The area for a circle with radius 2 is 12.566370614359172."*/

/* the following function that takes in 1 argument, calculates the area of a circle
based on that value & returns the result */
const radiusNum = function (radius) {
  const areaOfCircle = Math.PI * squareNum (radius);
  console.log(`The area for a circle with a radius of ${ radius } is ${ areaOfCircle }.`);
  return areaOfCircle;
};

radiusNum (2);


//- Bonus: Round the result so there are only two digits after the decimal.



// ## Part 2
/* Write a function that will take one argument (a number) and perform
the following operations, using the functions you wrote earlier:
- Take half of the number and store the result.
- Square the result of #1 and store that result.
- Calculate the area of a circle with the result of #2 as the radius.
- Calculate what percentage that area is of the squared result (#3). */

/*the following function takes one argument & uses the halfNumber, squaredNumber,
radiusNum and percentOf functions to calculate another number */

const iAmSmart = function (num) {
  const halvedNumber = halfNum (num);
  const squaredNumber = squareNum(halvedNumber);
  const area = radiusNum(squaredNumber);
  const result = percentOf(squaredNumber, area);
  return percentOf;
};

iAmSmart (5);
