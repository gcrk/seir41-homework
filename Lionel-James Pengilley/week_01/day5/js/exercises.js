// # MTA Lab
//
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number
// of stops for the trip in the console:
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points.
//   (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
//     so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working.
//   You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

//Creating the arrays
n = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
l = ['8th', '6th', 'Union Square', '3rd', '4th'];
six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

//Creating prompts for user to input values
//first prompt
let p1 = prompt("What train line are you on?");
//The below line takes the string that returns from the prompt and evaluates
//if the string represents a function, expression or statement?
//In this case I want it to represent an array name
let aLine = eval(p1);
//second prompt
let aStop = prompt("What train stop are you on?");
//third prompt
  //Note: should be called p2 for neat code
let p3 = prompt("What train line will you arrive at?");
let bLine = eval(p3);
//fourth prompt
let bStop = prompt("What train stop will you arrive at?");
//Note: should be called p4 for neat code

//Trip Planning function
const planTrip = function (aLine, aStop, bLine, bStop) {
  //saving the indexes to variables
  let a = aLine.indexOf(aStop);
  let b = bLine.indexOf(bStop);
  //half way point as indexes
  let aMidWay = aLine.indexOf('Union Square');
  let bMidWay = bLine.indexOf('Union Square');
  //creating a variable to tell the user how many stops there are
  let numOfStops = 0;
  //Four if statements with a for loop in each
  //The if statments determine if point a or b's index is larger or smaller than the middle point's index
  //Then it will console.log() each array item (or train stop) as it loops towards the middle point

    if (aMidWay < a) {
      for (var i = a; i !== aMidWay; i--) {
        //The initialisation is from the index of point a
        //The loop's condition is that it must stop when it reaches the middle point
          //Note: need to change this part so that the loop prints the middle point on the current train line.
        //and the final-expression will ensure the loop will move in a negative direction through the indexes of each stop
        console.log(`${aLine[i]} on line ${p1}`);
        //I was stuck on this part for half a day... As I knew that you cannot print an array's name...
        //Tried making an object of arrays just to reference the name of the arrays...
        //All I had to do was reference the user's input of what train line they were on or going to finish on
        numOfStops = a - aMidWay;
        //Updating the number of stops
      };
    } if (aMidWay > a) {
    for (var i = a; i !== aMidWay; i++) {
      //Same as first if statement but moves in a positive direction
      console.log(`${aLine[i]} on line ${p1}`);
      numOfStops = aMidWay - a;
    };
  } if (bMidWay < b) {
    for (var i = bMidWay; i < b; i++) {
      //The initialisation starts from the middle point this time
      //The condition is that it will continue to loop until it reaches the final stop
      //Final-expression is that it moves through the array one index at a time in a positive direction
      console.log(`${bLine[i]} on line ${p3}`);
      numOfStops = b - bMidWay;
    };
  } if (bMidWay > b) {
    for (var i = bMidWay; i > b; i--) {
      //Same as the 3rd if statement but moves through the array in a negative direction
      console.log(`${bLine[i]} on line ${p3}`);
      numOfStops = bMidWay - b;
    };
  };
  console.log(`${bStop} on line ${p3}`);
  //The end of the function prints the final stop because I didn't put it in my loop for some reason
  console.log(`Number of stops: ${Math.abs(numOfStops) + 1}`);
  //And it prints the number of stops + 1 (the final stop)
};
//Running the function
 planTrip(aLine, aStop, bLine, bStop);
