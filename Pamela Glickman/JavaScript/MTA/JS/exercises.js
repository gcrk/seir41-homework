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

// Line arrays
// The names of the lines have been added to the start of the array so that they can be referred to in the console.log, I'd be interested in knowing whether there's a better way to achieve this.

const lineN = ["N", "Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const lineL = ["L", "8th", "6th", "Union Square", "3rd", "1st"];
const line6 = ["6", "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

const collectUserInput = function() {
  const selection = prompt("Pick a starting line: N, L or 6");
  if (selection === "N") {
    return lineN;
  }
  else if (selection === "L") {
    return lineL;
  }
  else if (selection === "6") {
    return line6;
  } else {
    console.log ("Invalid Selection");
  }
}

const createJourney = function(line, startNum, tarNum) {
  const journey = {
    passingStations: [],
    numStops: tarNum - startNum
  }
  if (journey.numStops > 0) {
    for ( let i = startNum + 1; i < tarNum + 1; i++ ) { // Add 1 to skip orgin stop and includes target stop
      journey.passingStations.push(line[i]);

    }
  } else if (journey.numStops < 0) {
    for ( let i = startNum - 1; i > tarNum - 1; i-- ) { // Minus one to skip origin stop and include target stop
      journey.passingStations.push(line[i]);
    }
    journey.numStops *=-1;
  }
  return journey;
}

// Plan Trip Function
const planTrip = function () {
  const startLine = collectUserInput();
  const startStation = prompt("Pick a starting station");
  const targetLine = collectUserInput();
  const targetStation = prompt("Pick a target station");
  let firstStopNum = startLine.indexOf(startStation);
  let targetStopNum = targetLine.indexOf(targetStation);
  let numTotal = 0;
  let trip = {};
  if (startLine === targetLine) {
    trip = createJourney(startLine, firstStopNum, targetStopNum);
    numTotal = trip.numStops;
    console.log(`You must travel through the following stops on the ${ startLine[0] } line: ${ trip.passingStations.join(", ") }.`);
  } else {
      targetStopNum = startLine.indexOf("Union Square");
      trip = createJourney(startLine, firstStopNum, targetStopNum);
      numTotal += trip.numStops;
      console.log(`You must travel through the following stops on the ${ startLine[0] } line: ${ trip.passingStations.join(", ") }.`);
      firstStopNum = targetLine.indexOf("Union Square");
      console.log(`Change at Union Square.`);
      targetStopNum = targetLine.indexOf(targetStation);
      trip = createJourney(targetLine, firstStopNum, targetStopNum);
      numTotal += trip.numStops;
      console.log(`You must travel through the following stops on the ${ targetLine[0] } line: ${ trip.passingStations.join(", ") }.`);
    }
  //  console.log(`Your journey continues through the following stops: ${targetLineList }.`);
  console.log(`${ numTotal } stops in total.`);
}

//planTrip("N", "Times Square", "N", "8th")
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
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
