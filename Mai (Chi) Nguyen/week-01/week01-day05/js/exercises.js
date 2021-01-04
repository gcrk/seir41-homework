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

//

const lineAll = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

// function plan a single trip on the same line
const singleTrip = function (line, stop1, stop2) {
  let stopIndex1 = lineAll[line].indexOf(stop1); //log the index of stop1
  let stopIndex2 = lineAll[line].indexOf(stop2); //log the index of stop2
  let stopsInLine = lineAll[line];

  let result = {
    listOfStops: [],
    numOfStops: 0,
  };

  if (stopIndex1 < stopIndex2) {
    result.listOfStops = stopsInLine.slice(stopIndex1 + 1, stopIndex2 + 1);
    result.numOfStops += stopIndex2 - stopIndex1;
  } else {
    result.listOfStops = stopsInLine.slice(stopIndex2, stopIndex1).reverse();
    result.numOfStops += stopIndex1 - stopIndex2;
  }
  return result;
};

// console.log(sameLineTrip('N', '34th', '8th'));
// console.log(sameLineTrip('N', 'Union Square', '34th'));

// FUNCTION to avoid case sensitivity
const capitalizeFirstLetter = function (string) {
  let result = string[0].toUpperCase() + string.slice(1).toLowerCase();
  return result;
};


// ### MAIN FUNCTION
const planTrip = function (line1, stop1, line2, stop2) {

  line1 = prompt('Starting line: ').toUpperCase(); //avoid case sensitivity of user input
  stop1 = capitalizeFirstLetter(prompt(`Starting station on ${line1} line: `));
  line2 = prompt('Destination line: ').toUpperCase();
  stop2 = capitalizeFirstLetter(prompt(`Destination station on ${line2} line: `));



  if (line1 !== line2) {
    let tripToUS = singleTrip(line1, stop1, 'Union Square');

    let tripFromUS = singleTrip(line2, 'Union Square', stop2);

    console.log(`You want to travel from stop ${stop1} of ${line1} line to stop ${stop2} of ${line2} line.`)

    console.log(`You must travel through the following stops on the ${line1} line: ${  tripToUS.listOfStops.join(", ") }.`);
    console.log('Change at Union Square.');
    console.log(`Your journey continues on ${line2} line through the following stops: ${ tripFromUS.listOfStops.join(", ") }.`)
    console.log(`${tripToUS.numOfStops + tripFromUS.numOfStops } stops in total.`)

  } else {

    let trip = singleTrip(line1, stop1, stop2);

    console.log(`You want to travel from stop ${stop1} to stop ${stop2} of ${line1} line.`)
    console.log(`You must travel through the following stops on the same ${line1} line: ${ trip.listOfStops.join(", ") }.`);
    console.log(`${ trip.numOfStops } stops in total.`)
  }
}


planTrip();
// planTrip('N', '34th', '6', 'Grand Central');
// planTrip('N', '34th', 'N', '23rd');
// planTrip('N', '34th', '6', 'Astor Place');
// planTrip('6', '33rd', 'L', '8th');
// planTrip('L', '1st', 'N', '34th');



// console.log(journey('Union Square', '34th'));
// console.log(journey('Times Square', '8th'));

//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
