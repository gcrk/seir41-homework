// MTA LAB CHALLENGE

// SETUP STATION ARRAYS
const trainLines = [`N`, `L`, `6`];

const trainLineStops = [
  [`Times Square`, `34th`, `28th`, `23rd`, `Union Square`, `8th`],
  [`8th`, `6th`, `Union Square`, `3rd`, `1st`],
  [`Grand Central`, `33rd`, `28th`, `23rd`, `Union Square`, `Astor Place`]
];

// DISTANCE FUNCTION ///////////////////////////////////////////////////////////
const distSingleLine = function(pt1, pt2) {
  let dist;
  if (pt1 > pt2){
    dist = (pt1 + 1) - (pt2 + 1);
  }
  else {
    dist = (pt2 + 1) - (pt1 + 1);
  }
  return dist;
}

// "STOP" AND "STOPS" PLURALISATION FACTORING //////////////////////////////////
const stopsTextPlural = function (totalStops) {
  if (totalStops === 1){
    return `stop`;
  }
  else {
    return `stops`;
  }
}

// SETUP MAIN PLANTRIP FUNCTION ////////////////////////////////////////////////

const planTrip = function (curLine, curStop, destLine, destStop) {

// ESTABLISH VARIABLES TO BE USED IN FUNCTION //////////////////////////////////

  let curLineArrayNum = trainLines.indexOf(curLine);
  let destLineArrayNum = trainLines.indexOf(destLine);
  let changeStopCurLine = trainLineStops[curLineArrayNum].indexOf(`Union Square`); // Determine the step in the array on current line for the change stop, Union Square
  let changeStopDestLine = trainLineStops[destLineArrayNum].indexOf(`Union Square`); // Determine the step in the array on destination line for the change stop, Union Square
  let userLocaleArrayNum = trainLineStops[curLineArrayNum].indexOf(curStop); // Find the user's location in the relevant train line array
  let destLocaleArrayNum = trainLineStops[destLineArrayNum].indexOf(destStop); // Determine the destination place in the relevant train line array
  let distTotal; // Variable for total distance whether single line or combined lines involved

// DETERMINING STATIONS TO STOP AT FUNCTION ////////////////////////////////////

  const stopsListCur = function (getOn, getOff){ // Function for current line
    if (getOn > getOff && getOn === (trainLineStops[curLineArrayNum].length - 1)){ // If the getOn stop is at the end of the line
      return trainLineStops[curLineArrayNum].slice((getOff), (getOn)).reverse().join(", ");
    }
    else if (getOff > getOn && getOff === (trainLineStops[curLineArrayNum].length - 1)){ // If the getOn stop is at the end of the line **May not need thsi line**
      return trainLineStops[curLineArrayNum].slice((getOn), (getOff)).reverse().join(", ");
    }
    else if (getOn > getOff){
      return trainLineStops[curLineArrayNum].slice((getOff + 1), (getOn + 1)).join(", "); // If get getOn stop is anywhere else and is greater than the getOff stop
    }
    else {
      return trainLineStops[curLineArrayNum].slice((getOn + 1), (getOff + 1)).join(", "); // If the getOff stop is anywhere but the end and also greater than the getOn stop
    }
  }

  const stopsListDest = function (getOn, getOff){ // Function for current line
    if (getOn > getOff && getOn === (trainLineStops[curLineArrayNum].length - 1)){ // If the getOn stop is at the end of the line
      return trainLineStops[destLineArrayNum].slice((getOff), (getOn)).reverse().join(", ");
    }
    else if (getOff > getOn && getOff === (trainLineStops[curLineArrayNum].length - 1)){ // If the getOn stop is at the end of the line
      return trainLineStops[destLineArrayNum].slice((getOn), (getOff)).reverse().join(", ");
    }
    else if (getOn > getOff){
      return trainLineStops[destLineArrayNum].slice((getOff), (getOn)).reverse().join(", "); // If get getOn stop is anywhere else and is greater than the getOff stop
    }
    else {
      return trainLineStops[destLineArrayNum].slice((getOn + 1), (getOff + 1)).join(", "); // If the getOff stop is anywhere but the end and also greater than the getOn stop
    }
  }

// MAIN STATEMENTS NEEDING TO BE RETURNED //////////////////////////////////////

  let message0 = `You are currently at the ${curStop} stop on the ${curLine} line and you want to go to the ${destStop} stop on the ${destLine} line.`
  let message1 = `You must travel through the following stops on the ${curLine} line: `;
  let message2 = `Change at Union Square to the ${destLine} line.`;
  let message3 = `Your journey continues through the following stops: `;
  let message4 = ` in total.`;

// DETERMINE TOTAL AND MESSAGE FOR USER JOURNEY ////////////////////////////////

  if (destLine === curLine){ // If the destination is within the same line
    distTotal = distSingleLine(userLocaleArrayNum, destLocaleArrayNum);
    return `${message0}\n${message1}${stopsListCur(userLocaleArrayNum, destLocaleArrayNum)}.\n${distTotal} ${stopsTextPlural(distTotal) + message4}`;
  }
  else if (destLine !== curLine){ // If the destination isn't in the same line
    distTotal = distSingleLine(userLocaleArrayNum, changeStopCurLine) + distSingleLine(changeStopDestLine, destLocaleArrayNum);
    return `${message0}\n${message1}${stopsListCur(userLocaleArrayNum, changeStopCurLine)}.\n${message2}\n${message3}${stopsListDest(changeStopDestLine, destLocaleArrayNum)}.\n${distTotal} ${stopsTextPlural(distTotal) + message4}`;
  }
}

// TEST THIS PUPPY /////////////////////////////////////////////////////////////
console.log(planTrip(`6`, `28th`, `N`, `34th`));
