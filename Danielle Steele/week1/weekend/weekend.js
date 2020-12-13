
// ## Objectives:
// * Get really good at array manipulation.

// #### Activity
// * Create a program that models a simple subway system.


const nLineStations = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ]
const lLine = [ "8th", "6th", "Union Square", "3rd", "1st" ]
const sixLine = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]

const allLines = {
    "N": nLineStations,
    "L": lLine,
    "6": sixLine,
}

const calculateStops = (line, startStation, stopStation) => {
    const currentLine = allLines[line];
    const iStartStation = currentLine.indexOf(startStation);
    const iStopStation = currentLine.indexOf(stopStation);
    console.log("You must travel through the following stops on the ", line, "line." );
    if(iStopStation >= iStartStation){
        for(let i=iStartStation+1; i<iStopStation; i++) {
            console.log(currentLine[i]);
        }
    } else {
        for(let i=iStartStation-1; i>iStopStation; i--) {
            console.log(currentLine[i]);
        }
    };
}

const planTrip = (startLine, stopLine, startStation, stopStation) => {
    const changeOver = startLine !== stopLine;
    console.log("Your journey starts at:", startStation, "On line:", startLine);
    if(changeOver) {
        calculateStops(startLine, startStation, "Union Square");
        console.log("Change at Union Square.")
        calculateStops(stopLine, "Union Square", stopStation);
    } else {
        calculateStops(startLine, startStation, stopStation);
    }
    console.log("Your journey ends at", stopStation, "on Line:", stopLine)
}

planTrip("N", "N", "34th", "Union Square");
planTrip("L", "L", "6th", "1st");
planTrip("N", "L", "Times Square", "8th");
planTrip("L", "L", "1st", "6th");



// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops
// for the trip in the console:


// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and
// signature.


// console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd,
// Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."


//   * All 3 subway lines intersect at Union Square, but there are no other intersection
// points. 
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through
// or change at.


// #### Hints:
//   * All 3 subway lines intersect at Union Square, but there are no other intersection
// points. (For example, this means the 28th stop on the N line is different than the 28th
// street stop on the 6 line, so you'll have to differentiate this when you name your stops
// in the arrays.)

// * Work out how you would do it on paper first! Then start to explain that process in
// Javascript.

// * Get the program to work for a single line before trying to tackle multiple lines.


// * Don't worry about prompting the user for input. Hard code some values to get it working. 
// You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and 
// intersection.
// * The key to the lab is finding the index positions of each stop.
//  (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names
// (i.e. 23rd on the N and on the 6 need to be differentiated)