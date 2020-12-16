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
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
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
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//

const lines = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

const planTrip = function (line1, stop1, line2, stop2) {
  // line1UC and line2UC will allow people to still use trains without worrying about uppercase line names
  const us = "Union Square", line1UC = line1.toUpperCase(), line2UC = line2.toUpperCase();
  // check that the lines exist and the stops actually exist in those lines
  if (checkExist(line1UC, stop1, line2UC, stop2)) {
    if (line1UC === line2UC) {
      // if the traveller is travelling on the same line...
      const data = getDirection(lines[line1UC], stop1, stop2);
      return `You must travel through the following stops on the ${line1UC} line: ${data[0]}.\n${data[1]} stops in total.`;
    } else {
      // if the traveller must change lines...
      const data1 = getDirection(lines[line1UC], stop1, us), data2 = getDirection(lines[line2UC], us, stop2);
      return `You must travel through the following stops on the ${line1UC} line: ${data1[0]}.\nChange at ${us}.\nContinue through the following stops: ${data2[0]}.\n${data1[1] + data2[1]} stops in total.`;
    }
  }
  return "Sorry, either your lines or your stops do not exist, or they are mixed up.";
}

// check if the input lines and stops actually exist
const checkExist = function (line1, stop1, line2, stop2) {
  return lines.hasOwnProperty(line1) && lines.hasOwnProperty(line2) ? lines[line1].includes(stop1) && lines[line2].includes(stop2) : false;
}

// determine direction the train must move by using indexes of the stops
const getDirection = function (line, stop1, stop2) {
  // if stop1 index is lower than stop2 index, call getStops(), otherwise reverse the array then call getStops()
  return line.indexOf(stop1) < line.indexOf(stop2) ? getStops(line, stop1, stop2) : getStops((line.slice()).reverse(), stop1, stop2)
}

// gets the stops and number of stops for the journey on the given line
const getStops = function (line, stop1, stop2) {
  const stop1Index = line.indexOf(stop1), stop2Index = line.indexOf(stop2);
  const numOfStops = stop2Index - stop1Index;
  let stops = [];
  // starting at the stop after stop1, loop through the lines adding each stop to stops array until stop2 is reached
  for (let i = stop1Index + 1; i <= stop2Index; i++) {
    stops.push(line[i]);
  }
  return [stops.join(", "), numOfStops];
}

console.log(planTrip('N', '23rd', 'N', 'Times Square'));
console.log(planTrip('N', 'Times Square', 'N', '28th'));
console.log(planTrip('6', '23rd', '6', 'Grand Central'));
console.log(planTrip('6', '23rd', 'N', 'Times Square'));
console.log(planTrip('6', '23rd', 'N', 'Times S'));
console.log(planTrip('6', '23rd', 'n', 'Times Square'));
console.log(planTrip('6', '23rd', 'L', 'Times Square'));

//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
