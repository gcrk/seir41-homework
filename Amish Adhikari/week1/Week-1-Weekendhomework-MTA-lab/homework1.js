/*
const lineN = ['Time Square', '34th', '28th', '23rd', 'UnionSquare', '8th'];

console.log(lineN.indexOf('34th'));

console.log(lineN.indexOf('UnionSquare')); */


// function(startingLine, startingStop, endingLine, endingStop)
const planTrip = function(startingLine, startingStop, endingLine, endingStop){


// 34th, 28th, 23rd, UnionSquare, 3rd


// loop until key is UnionSquare


const lineN = ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'];

const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];

const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

if (startingLine === 'N') {
  startLine = lineN;
} else if (startingLine === 'L') {
  startLine = lineL;
} else {
  startLine = line6;
}

if (endingLine === 'N') {
  endLine = lineN;
} else if (endingLine === 'L') {
  endLine = lineL;
} else {
  endLine = line6;
}

startStopNumber = startLine.indexOf(startingStop);
startLineUnionStopNumber = startLine.indexOf('Union Square');

endStopNumber = endLine.indexOf(endingStop);
endLineUnionStopNumber = endLine.indexOf('Union Square');

let totalStop = 0;

let startLineArray = [];

if (startingLine === endingLine) {
  if (startStopNumber < endStopNumber) {
    for (let i = startStopNumber; i <= endStopNumber; i++) {
      startLineArray.push(startLine[i]);
      totalStop++;
    }
  } else {
    for (let i = startStopNumber; i >= endStopNumber; i--) {
      startLineArray.push(startLine[i]);
      totalStop++;
    }
  }

  console.log("You must travel through the following stops on the " + startingLine + " line: " + startLineArray.join(", "));
} else {
  if (startStopNumber < startLineUnionStopNumber) {
    for (let i = startStopNumber; i <= startLineUnionStopNumber; i++) {
      // somearray = startLine[i];
      startLineArray.push(startLine[i]);
      totalStop++;
    }
  } else {
    for (let i = startStopNumber; i >= startLineUnionStopNumber; i--) {
      startLineArray.push(startLine[i]);
      totalStop++;
    }
  }

  console.log("You must travel through the following stops on the " + startingLine + " line: " + startLineArray.join(", "));

  // traverse to next line if starting line is different than ending line


  console.log("Change at Union Square");

  let endLineArray = [];

  if (endLineUnionStopNumber < endStopNumber) {

    for (let i = endLineUnionStopNumber + 1; i <= endStopNumber; i++) {
      endLineArray.push(endLine[i]);
      totalStop++;
    }
  } else {
    for (let i = endLineUnionStopNumber - 1; i >= endStopNumber; i--) {
      endLineArray.push(endLine[i]);
      totalStop++;
    }
  }

  console.log("Your journey continues through the following stops:" + endLineArray.join(", "));
}

console.log(totalStop + " stops in Total");

}

planTrip('L','1st', 'L', '8th');
