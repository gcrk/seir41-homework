
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
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

const lineN = ["TS","34th","28th","23rd","Union Square","8th"];
const lineL = ["8th","6th","Union Square","3rd","1st"];
const line6 = ["GC","33th","28th","23rd","Union Square","AP"];

let indexStart=null;
let indexFinish=null;

let indexUs1 = null;
let indexUs2 = null;



const planTrip = function (firstLine, firstLineStop, secondLine, secondLineStop){


//get the index of starting and finishing station

const getIndex = function(a,b,c,d){
   for (i=0; i<a.length; i++){
     if (b===a[i]){
        indexStart = i;
        }
   }

   for (j=0; j<c.length; j++){
     if (d===c[j]){
        indexFinish = j;
        }
   }
};

getIndex (firstLine, firstLineStop, secondLine, secondLineStop);



//if starting and finishing on the same line, print all stations in between
if (firstLine===secondLine){

    if (indexStart<indexFinish){
    let journey1=''
    for(k=indexStart+1; k<indexFinish; k++){
        journey1 = journey1 + firstLine[k]+ ', '

    }
        journey2 = journey1 + "and " + firstLine[indexFinish]
    console.log(`You will travel through the following stops: ${journey2}`)
    }

    else if (indexStart>indexFinish){
     let journey1=''
    for (k=indexStart-1; k>indexFinish; k--){
        journey1 = journey1 + firstLine[k]+ ', '

    }
      journey2 = journey1 + "and " + firstLine[indexFinish]
        console.log(`You will travel through the following stops: ${journey2}`)
    }


}





//if starting and finishing on 2 different lines
else if (firstLine!==secondLine){
//determine the index of Union Square on firstLine and secondLine
     if (firstLine===lineN){
       indexUs1 = 4;
     }

     if (firstLine===lineL){
       indexUs1 = 2;
     }

     if (firstLine===line6){
       indexUs1 = 4;
     }

     if (secondLine===lineN){
       indexUs2 = 4;
     }

     if (secondLine===lineL){
       indexUs2 = 2;
     }
     if (secondLine===line6){
       indexUs2 = 4;
     }
//if start and finish on 2 different line, there are 4 possibilities

 //Possibility 1) if first Stop is before Union Square && second stop is before Union Square
      if (indexStart<indexUs1 && indexFinish<indexUs2) {


         let journey1a = '';

         for (i=indexStart+1; i<indexUs1; i++){
           journey1a = journey1a + firstLine[i] + ', '

          }
           journey1b = journey1a  + firstLine[indexUs1]
        console.log(`you will travel the following stops: ${journey1b}`);
        console.log (`you will change at Union Square`);



          let journey2a = ''
          for (i=indexUs2-1; i>indexFinish; i--){
            journey2a = journey2a + secondLine[i] + ', '
          }
            journey2b = journey2a  + secondLine[indexFinish]
            console.log (`and continue through: ${journey2b}`)

      let totalStops=(indexUs1-indexStart)+(indexUs2-indexFinish);
      console.log(`Total stops: ${totalStops}`)
}
//Possibility 2) if first stop is before Union Square && second stop is after Union Square
if (indexStart<indexUs1 && indexFinish>indexUs2) {
   let journey1a = ''
   for (i=indexStart+1; i<indexUs1; i++){
     journey1a = journey1a + firstLine[i] + ', '
    }
     journey1b = journey1a  + firstLine[indexUs1]
  console.log(`you will travel the following stops: ${journey1b}`);
  console.log (`you will change at Union Square`);



    let journey2a = ''
    for (i=indexUs2+1; i<indexFinish; i++){
      journey2a = journey2a + secondLine[i] + ', '
    }
      journey2b = journey2a + secondLine[indexFinish]
      console.log (`and continue through: ${journey2b}`)

    totalStops=(indexUs1-indexStart)+(indexFinish-indexUs2);
    console.log(`Total stops: ${totalStops}`)
}
//Possibility 3) if first stop is after Union Square && second stop is before Union Square

if (indexStart>indexUs1 && indexFinish<indexUs2) {
   let journey1a = ''
   for (i=indexStart-1; i>indexUs1; i--){
     journey1a = journey1a + firstLine[i] + ', '
    }
     journey1b = journey1a + firstLine[indexUs1]
  console.log(`you will travel the following stops: ${journey1b}`);
  console.log (`you will change at Union Square`);



    let journey2a = ''
    for (i=indexUs2-1; i>indexFinish; i--){
      journey2a = journey2a + secondLine[i] + ', '
    }
      journey2b = journey2a + secondLine[indexFinish]
      console.log (`and continue through: ${journey2b}`)

    totalStops = (indexStart-indexUs1)+(indexUs2-indexFinish);
    console.log(`Total stops: ${totalStops}`)
}


//Possibility 4) if first stop is after Union Square && second stop is after Union Square

if (indexStart>indexUs1 && indexFinish>indexUs2) {
   let journey1a = ''
   for (i=indexStart-1; i>indexUs1; i--){
     journey1a = journey1a + firstLine[i] + ', '
    }
     journey1b = journey1a + firstLine[indexUs1]
  console.log(`you will travel the following stops: ${journey1b}`);
  console.log (`you will change at Union Square`);



    let journey2a = ''
    for (i=indexUs2+1; i<indexFinish; i++){
      journey2a = journey2a + secondLine[i] + ', '
    }
      journey2b = journey2a + secondLine[indexFinish]
      console.log (`and continue through: ${journey2b}`)

    totalStops = (indexStart-indexUs1)+(indexFinish-indexUs2);
    console.log(`Total stops: ${totalStops}`)
}




}

};

planTrip (lineN, "TS", lineN, "8th");

planTrip (lineN, "TS", lineL, "8th")
planTrip (lineN, "TS", lineL, "3rd")
planTrip (lineN, "8th", lineL, "8th")
planTrip (lineN, "8th", lineL, "1st")







console.log(indexStart);
console.log(indexFinish);
console.log (indexUs1)
