const N = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const L = ['8th', '6th', 'Union Square', '3rd', '1st'];
const Six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

const trainLines = document.getElementById('train-lines');

trainLines.innerHTML += `<p>N Line: ${N.join(', ')}.</p><p>L Line:${L}</p><p>Six Line: ${Six}</p>`


//Global set of regrex for use over two functions
const regN = /^n$/i;
const regSix = /^(6|six)$/i;
const regL = /^l$/i;
const ny = 'The city of NY wishes to advise that you are not on a MTA train line';


const allAboard = (oL) => {
    if (regN.test(oL)) {
        return N;
    } else if (regL.test(oL)) {
        return L;
    } else if (regSix.test(oL)) {
        return Six;
    } else {
        return ny
    }
}

const endOfTheLine = (dL) => {
    if (regN.test(dL)) {
        return N;
    } else if (regL.test(dL)) {
        return L;
    } else if (regSix.test(dL)) {
        return Six;
    } else {
        return ny
    }
}

//oL = origin line, oS = 

const originDestination = (oL, oS, dL, dS) => {

    //Get the lines arrays
    const departureLine = allAboard(oL);
    const destinationLine = endOfTheLine(dL);

    //Index of origin stop on origin line  
    const departure = departureLine.indexOf(oS);
    const destination = destinationLine.indexOf(dS);

    //Messages
    const a = `You must travel through the following stops on the ${oL} line:`;
    const b = `Your journey continues through the following stops on the ${dL} line:`
    const change = 'Change at Union Square'
    const changeDepartureLine = `This is not a stop. Please change your stop on the departure line.`
    const changeDestinationLine = `This is not a stop. Please change your stop on the departure line.`
    const noLine = `Neither are stops. Please change your stop on BOTH your origin AND destination line.`
    const noGo = `You've chosen the same stop on the same line. Pick a different stop or line.`

    const departureUS = departureLine.indexOf('Union Square');
    const destinationUS = destinationLine.indexOf('Union Square');


    //If the stop they've entered is not on the line, tell them its not
    if (departureLine === ny || destinationLine === ny) {
        console.log(ny);
    } else if (departure === -1) {
        console.log(changeDepartureLine);
    } else if (destination === -1) {
        console.log(changeDestinationLine);
    } else if (departure === -1 && destination === -1)
        console.log(noLine);
    else {
        // Show the lines
        console.log("Departure Line", oL, departureLine);
        console.log("Destination Line", dL, destinationLine);

        //Departure Line - filter through the departure line array 
        const departureJourney = departureLine.filter(function (stops) {
            let stopsIndex = departureLine.indexOf(stops);
            if (stopsIndex > departure && stopsIndex <= departureUS) {
                return true;
            } else if (stopsIndex < departure && stopsIndex >= departureUS) {
                return true;
            } else {
                return false;
            }
        });

        //Destination Line
        const destinationJourney = destinationLine.filter(function (stops) {
            let stopsIndex = destinationLine.indexOf(stops);
            if (stopsIndex >= destination && stopsIndex < destinationUS) {
                return true;
            } else if (stopsIndex <= destination && stopsIndex > destinationUS) {
                return true;
            } else {
                return false;
            }
        });

        //Total Stops
        const totalStops = departureJourney.length + destinationJourney.length;

        //SAME LINE?
        if (departureLine === destinationLine) {

            // console.log("depart", departure, oS);
            // console.log("dest", destination, dS);

            //Set a result variable 
            let singleLine;
            if (departure === destination) {
                console.log(noGo);
            } else if (departure < destination) {
                singleLine = departureLine.splice(departure + 1, destination);
                console.log(`${a} ${singleLine.join(', ')}.`);
                console.log(`${singleLine.length} stops in total`);
            } else {
                singleLine = departureLine.splice(destination, departure);
                singleLine.reverse()
                console.log(`${a} ${singleLine.join(', ')}.`);
                console.log(`${singleLine.length} stops in total`);
            }

        } else {
            //DIFFERENT LINES & SWITCHING TRAINS

            //Departure Line
            if (departure === departureUS) {
                console.log(`You are at Union Square, change here for the ${dL} line`);
            } else if (departure > departureUS) {
                console.log(`${a} ${departureJourney.reverse().join(', ')}`);
                console.log(change);
            } else {
                console.log(`${a} ${departureJourney}`);
                console.log(change);
            }
            //Destination Line
            if (destination === departureUS) {
                console.log(`You are at Union Square, change here for the ${dL} line`);
            } else if (destination > destinationUS) {
                console.log(`${b} ${destinationJourney.join(', ')}.`);
                console.log(`${totalStops} stops in total.`);
            } else {
                console.log(`${b} ${destinationJourney.reverse().join(', ')}.`);
                console.log(`${totalStops} stops in total.`);
            }
        }
    }
}



document.getElementById('get-ticket').addEventListener('click', () => {
    // const oL = prompt("Enter your train line");
    // const oS = prompt(`You've chosen ${oL} Line. Enter your departure stop. `);
    // const dL = prompt(`You're entering at ${oS} on ${oL} Line. Enter your destination line`);
    // const dS = prompt(`You've chosen ${dL} Line. Enter your departure stop.`);

    originDestination(oL, oS, dL, dS);
})


originDestination('N', '23rd', 'N', 'Times Square');











// //DESTINATION CONDITIONALS
// if (destination === destinationUS) {
//     console.log(`You are at Union Square, change here for the ${dL} line`);
// } else if (destination < destinationUS) {


//     // destinationJourney = reverseLine.splice(destinationStops + 1, destination);

//     // console.log(`${b} ${destinationJourney}`);

// } else {

//     console.log('Going to', dS);
//     // destinationJourney = destinationLine.splice(destinationStops - 1, destination);
//     // console.log(`${b} ${destinationJourney}`);

// }

// //Log total stops
// console.log(totalStops);