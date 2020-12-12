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
// const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
//
// const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
//
// const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];
//


// console.log(lineAll1[0]);

// const wayToUS = function (line, stop) {
//   let lineIndex = lineAll.indexOf(line);
//   let lineArray = lineAll[lineIndex];
//   let stopIndex = lineArray.indexOf(stop);
//   let usIndex = lineArray.indexOf('Union Square');
//
//   let fromStopToUS = [];
//   let numOfStop = 0;
//   let result = [];
//
//   if (stopIndex < usIndex) {
//     for (let i = stopIndex; i <= usIndex; i++) {
//       fromStopToUS.push(lineArray[i]);
//     }
//   } else {
//     for (let i = stopIndex; i >= usIndex; i--) {
//       fromStopToUS.push(lineArray[i]);
//     }
//   }
//   result.push(fromStopToUS.join(', '));
//
//   numOfStop = fromStopToUS.length;
//   result.push(numOfStop);
//
//   console.log(result);
//   return result;
// }
let indexOfLine = ['N', 'L', '6'];
const lineAll = [
  {lineName: 'N',
  stop: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']}, {lineName: 'L',
  stop: ['8th', '6th', 'Union Square', '3rd', '1st']},
  {lineName: '6',
  stop: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']}
];
// let a = index.indexOf('N');
// console.log(a);
// console.log(lineAll[0].stop)


const wayToUS = function (line, stop) {
  let lineIndex = indexOfLine.indexOf(line);
  let stopArray = lineAll[lineIndex].stop;
  let stopIndex = stopArray.indexOf(stop);
  let usIndex = stopArray.indexOf('Union Square');

  let fromStopToUS = [];
  let numOfStop = 0;
  let result = [];

  if (stopIndex < usIndex) {
    for (let i = stopIndex; i <= usIndex; i++) {
      fromStopToUS.push(stopArray[i]);
    }
  } else {
    for (let i = stopIndex; i >= usIndex; i--) {
      fromStopToUS.push(stopArray[i]);
    }
  }
  result.push(fromStopToUS.join(', '));

  numOfStop = fromStopToUS.length;
  result.push(numOfStop);

  return result;
}



// wayToUS(lineN, '34th');

const wayFromUS = function (line, stop) {
  //access index of the line
  let lineIndex = indexOfLine.indexOf(line);
  let stopArray = lineAll[lineIndex].stop;
  //access the stop index
  let stopIndex = stopArray.indexOf(stop);
  let usIndex = stopArray.indexOf('Union Square');

  let fromUSToStop = [];
  let numOfStop = 0;
  let result = [];

  if (stopIndex > usIndex) {
    for (let i = (usIndex + 1); i <= stopIndex; i++) {
      fromUSToStop.push(stopArray[i]);
    }
  } else {
    for (let i = (usIndex - 1); i >= stopIndex; i--) {
      fromUSToStop.push(stopArray[i]);
    }
  }
  result.push(fromUSToStop.join(', '));

  numOfStop = fromUSToStop.length;
  result.push(numOfStop);

  return result;
}
// wayFromUS(lineN, '34th');
// const convertName = function (name) {
//   let nameList = {
//     'N': N,
//     'L': L,
//     '6': 6,
//   };
//   let result;
//   result = nameList[name];
//   console.log(nameList[name]);
// };
//
// convertName('6');

const fromS1ToS2 = function (line, s1, s2) {
  let lineIndex = indexOfLine.indexOf(line);
  let stopArray = lineAll[lineIndex].stop;
  let stopIndex1 = stopArray.indexOf(s1);
  let stopIndex2 = stopArray.indexOf(s2);

  let fromS1ToS2 = [];
  let numOfStop = 0;
  let result = [];

  if (stopIndex1 < stopIndex2) {
    for (let i = stopIndex1; i <= stopIndex2; i++) {
      fromS1ToS2.push(stopArray[i]);
    }
  } else {
    for (let i = stopIndex1; i >= stopIndex2; i--) {
      fromS1ToS2.push(stopArray[i]);
    }
  }
  result.push(fromS1ToS2.join(', '));

  numOfStop = fromS1ToS2.length;
  result.push(numOfStop);

  return result;
}


// ### MAIN FUNCTION
const planTrip = function (l1, s1, l2, s2) {
  if (l1 !== l2) {
    let toUS = wayToUS(l1, s1);

    let fromUS = wayFromUS(l2, s2);

    console.log(`You must travel through the following stops on the ${l1} line: ${  toUS[0] }.`);
    console.log('Change at Union Square.');
    console.log(`Your journey continues on ${l2} line through the following stops: ${ fromUS[0] }.`)
    console.log(`${toUS[1] + fromUS[1]} stops in total.`)

  } else {

    let trip = fromS1ToS2(l1, s1, s2);
    console.log(`You must travel through the following stops on the same ${l1} line: ${ trip[0] }.`);
    console.log(`${ trip[1] } stops in total.`)
  }
}

planTrip('N', '34th', '6', 'Grand Central');
planTrip('N', '34th', 'N', '23rd');
planTrip('N', '34th', '6', 'Astor Place');
planTrip('6', '33rd', 'L', '8th');



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
