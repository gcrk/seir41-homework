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

const nLine = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const lLine = ["8th", "6th", "Union Square", "3rd", "1st"];
const sLine = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

const listName = function (lineName) {
  let listName = "";

  if (lineName === "N") {
    listName = nLine;
    return listName;
  };

  if (lineName === "L") {
    listName = lLine;
    return listName;
  };

  if (lineName === "6") {
    listName = sLine;
    return listName;
  };
};

const planTrip = function (iLine, iStop, tLine, tStop) {
  let lN1 = listName (iLine);
  let lN2 = listName (tLine); //change line name to list name
  let idI = lN1.indexOf (iStop);

  if (iLine === tLine) { //no change line
    let idT = lN1.indexOf (tStop);
    let stopNum = Math.abs (idT - idI);

    if (idI < idT) { //current order
      let stopList = lN1.slice (idI+1, idT+1);
      console.log (`You must travel through the following stops on the ${iLine} Line: ${stopList.join(", ")}. ${stopNum} stops in total.`); //plural?
    } else { // reverse order
      let stopList = lN1.slice (idT+1, idI+1).reverse();
      console.log (`You must travel through the following stops on the ${iLine} Line: ${stopList.join(", ")}. ${stopNum} stops in total.`);
    }
    
  } else { //change line at US
    let idT = lN2.indexOf (tStop);
    let idU1 = lN1.indexOf ("Union Square"); //find the position of US in different lists
    let idU2 = lN2.indexOf ("Union Square");
    let stopNum1 = Math.abs (idI - idU1);
    let stopNum2 = Math.abs (idT - idU2);

    if (idI < idU1) { //first part of trip
      let stopList1 = lN1.slice (idI+1, idU1+1);
      console.log (`You must travel through the following stops on the ${iLine} Line: ${stopList1.join(", ")}.`);
    } else {
      let stopList1 = lN1.slice (idU1+1, idI+1).reverse();
      console.log (`You must travel through the following stops on the ${iLine} Line: ${stopList1.join(", ")}.`);
    };

    console.log ("Change at Union Square.");

    if (idU2 < idT) { //second part of trip
      let stopList2 = lN2.slice (idU2+1, idT+1);
      console.log (`Your journey continues through the following stops on the ${tLine} Line: ${stopList2.join (", ")}.`);
    } else {
      let stopList2 = lN2.slice (idT+1, idU2+1).reverse();
      console.log (`Your journey continues through the following stops on the ${tLine} Line: ${stopList2.join (", ")}.`);
    };

    console.log (`${stopNum1+stopNum2} stops in total.`);
  }
}

planTrip('N', 'Times Square', '6', '33rd');

//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
