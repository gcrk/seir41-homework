// // con# MTA Lab
// //
// // ## Objectives:
// // * Apply your knowledge of Javascript to solve a real world problem.
// // * Get really good at array manipulation.
// //
// // #### Activity
// // * Create a program that models a simple subway system.
// //
// // * The program takes the line and stop that a user is getting on at and the line
// // and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
// //
// // ```javascript
// // planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
// //
// // // console.log() shows output similar to this:
// // // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // // "Change at Union Square."
// // // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // // "7 stops in total."
// // ```
// //
// // * There are 3 subway lines:
// //   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// //   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// //   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// //   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// // * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// //
// //
// // #### Hints:
// // * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// // * Get the program to work for a single line before trying to tackle multiple lines.
// // * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// // * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// // * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// // * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
const subwayLineN = ['Timesquare', '34th', '28th', '23rd', 'Union Square'];
const subwayLineL = ['8th', '6th', 'Union Sqaure', '3rd', '1st'];
const subwayLine6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

let intersection = subwayLineN[4];


const firstTrip = function (a, b, c , d) {

      let currentLine = prompt("which line are you on?");
      if ("N" === currentLine) {
        let l =  currentLine;
        console.log(l);
      }

  let currentLocation = prompt("What station at you at?");
  if(subwayLineN.indexOf(currentLocation) > -1) {
         //   for (let i = 0; i < subwayLineN.length; i++) {
    //     //   const trip = subwayLineN[i];
    //     //   //console.log(`You must travel on the following stops on the subwayLineX    subwayLineX[i])``;
    //     // } if(trip = )
     let c = currentLocation;
    console.log(c);
  } else {
      console.log("not on this line");
     }

    let destinationLine = prompt("which line is the destination on?")
    if(6 === destinationLine) {
      let nextDestinationLine = destinationLine;
    }

    let destination = prompt("where do you want to go?");
    if(subwayLineN.indexOf(destination) > -1){
          for (let i = 0; i < subwayLineN.length; i++) {
             const tripN = subwayLineN[i];
      //   //console.log(`You must travel on the following stops on the subwayLineX    subwayLineX[i])``;
                 }
       let n = destination
       console.log(n);
    }
     else {
     console.log( `You must travel through the following stops on the ${currentLine} line: ${currentLocation}, 28th, 23rd, ${intersection}.`);
   };


    if(tripN = intersection) {
     let intersectionSoChange = intersection;
     console.log(`Change at ${intersection}.`);
    }

    for (let i = 0; i < subwayLine6.length; i++) {
       const trip6 = subwayLine6[i];
//   //console.log(`You must travel on the following stops on the subwayLineX    subwayLineX[i])``;
           }
      if (trip6 = intersection) {
        console.log(`Your journey continues through the following stops: 23rd, 28th, 33rd.`)
      }
      if (trip6 = destination) {
        subwayLineN.shift();
         let count1 = subwayLineN.length;

         subwayLine6.shift();
         //subwayLine6.splice(4, 2);
         subwayLine6.pop();
         subwayLine6.pop();
         let count2 = subwayLine6.length
       let total = count1 + count2;
      console.log(`${total} stops in total.`);

      }


};
firstTrip();
