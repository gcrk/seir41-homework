const N = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const L = ['8th', '6th', 'Union Square', '3rd', '1st'];
const Six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];


N.forEach(station => document.getElementById('line-N').innerHTML += `<td>${station}</td`);
L.forEach(station => document.getElementById('line-L').innerHTML += `<td>${station}</td`);
Six.forEach(station => document.getElementById('line-six').innerHTML += `<td>${station}</td`);


//Global set of regrex for use over two functions
const regN = /^(n|n line)$/i;
const regSix = /^(6|six|6 line|six line)$/i;
const regL = /^(l|line)$/i;
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
    const a = `To get from the ${oS.toUpperCase()} on the ${oL.toUpperCase()} LINE, to ${dS.toUpperCase()} on the ${dL.toUpperCase()} LINE, you must travel through the following stops on the ${oL.toUpperCase()} LINE: `;
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
        // console.log("Departure Line", oL, departureLine);
        // console.log("Destination Line", dL, destinationLine);

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

        //Output table to DOM
        const trainMap = document.querySelector('#train-map')
        const mapDepartureLine = document.querySelector('#departure-line');

        mapDepartureLine.innerHTML += `<td><strong>${oL.toUpperCase()} Line </strong></td>`;
        departureJourney.forEach(station => mapDepartureLine.innerHTML += `<td>${station}</td`);


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

        //Output table to DOM
        const mapDestinationLine = document.querySelector('#destination-line');
        mapDestinationLine.innerHTML += `<td><strong>${dL.toUpperCase()} Line </strong></td>`;
        destinationJourney.forEach(station => mapDestinationLine.innerHTML += `<td>${station}</td`);

        //Output small message to the DOM
        let title = document.createElement('p');
        title.innerHTML += `<h5>Your New York Map.</h5> <p>${a} <strong>${departureJourney.join(', ')}</strong>. <br><br> ${change}. <br><br>${b} <strong>${destinationJourney.join(', ')}.</strong><br><br>${totalStops} stops in total.</p>`;
        trainMap.insertBefore(title, mapDepartureLine);


        //SAME LINE?
        if (departureLine === destinationLine) {

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
                console.log(`${a} ${departureJourney.join(', ')}.`);
                console.log(change);
            }
            //Destination Line
            if (destination === departureUS) {
                console.log(`You are at Union Square, change here for the ${dL} line`);
            } else if (destination > destinationUS) {
                console.log(`${b} ${destinationJourney}.`);
                console.log(`${totalStops} stops in total.`);
            } else {
                console.log(`${b} ${destinationJourney.reverse().join(', ')}.`);
                console.log(`${totalStops} stops in total.`);
            }
        }
    }
}

const getTicket = document.querySelector('#get-ticket');
const container = document.querySelector('.container');

getTicket.addEventListener('click', () => {
    const oL = prompt("Enter your train line");
    const oS = prompt(`You've chosen ${oL} Line. Enter your departure stop. `);
    const dL = prompt(`You're entering at ${oS} on ${oL} Line. Enter your destination line`);
    const dS = prompt(`You've chosen ${dL} Line. Enter your departure stop.`);

    // let p = document.createElement('h5');
    // p.innerHTML = `Check the console for your directions.`;
    // container.insertBefore(p, getTicket);

    originDestination(oL, oS, dL, dS);


})

// originDestination("N", "Times Square", '6', "Grand Central");
// originDestination("N", "Times Square", '6', "Grand Central");