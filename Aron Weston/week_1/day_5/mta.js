const N = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const L = ['8th', '6th', 'Union Square', '3rd', '1st'];
const Six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];


//Global set of regrex for use over two functions
const regN = /n/i;
const regSix = /^(6|six)$/i;
const regL = /l/i;
const ny = 'The city of NY wishes to advise that you are not on a MTA train line';


const originLine = (oL) => {
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


const destLine = (dL) => {
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

const originDestination = (oL, oS, dL, dS) => {
    //Get the lines arrays
    const ogL = originLine(oL);
    const desL = destLine(dL);

    //Index of origin stop on origin line  
    const ogStopIndex = ogL.indexOf(oS);
    //Index of destination stop on destination line 
    const destStopIndex = desL.indexOf(dS);

    console.log("Origin Line", oL, ogL);
    console.log("Destination Line", dL, desL);


    //If the stop they've entered is not on the line, tell them its not 
    if (ogStopIndex === -1) {
        console.log(`This is not a stop. Please change your stop on the origin line.`);
    } else if (destStopIndex === -1) {
        console.log(`This is not a stop. Please change your stop on the destination line.`);
    } else if (ogStopIndex === -1 && destStopIndex === -1)
        console.log(`Neither are stops. Please change your stop on BOTH your origin AND destination line.`);
    else {


        let a = `You must travel through the following stops on the ${oL} line:`;
        let b = `Your journey continues through the following stops on the ${dL} line:`
        let change = 'Change at Union Square'

        //Origin situation
        const unionOG = ogL.indexOf('Union Square');
        const ogDiff = unionOG - ogStopIndex;
        const originStops = Math.abs(ogDiff);

        //Destination
        const unionDest = desL.indexOf('Union Square');
        const destDiff = unionDest - destStopIndex;
        const destStops = Math.abs(destDiff);
        let ogSplice;
        let destSplice;

        //ORIGIN CONDITIONALS
        //Conditions to create the to go stops
        if (ogStopIndex === unionOG) {
            console.log(`You are at Union Square, change here for the ${dL} line`);
        } else if (ogStopIndex < unionOG) {
            //Set splice to start at the stop index in the array, then cut out the difference values, then add +1 to get Union Square back in.
            ogSplice = ogL.splice(ogStopIndex, ogDiff + 1);
            //Tell them where they need to go
            console.log(`${a} ${ogSplice}`);
            console.log(change);
        } else {
            //Same as above, but here we're getting rid of Union Square because we've told them to switch lines
            ogSplice = ogL.splice(ogDiff - 1, ogStopIndex);
            console.log(`${a} ${ogSplice}`);
            console.log(change);
        }

        //DESTINATION CONDITIONALS
        if (destStopIndex === unionDest) {
            console.log(`You are at Union Square, change here for the ${dL} line`);
        } else if (destStopIndex < unionDest) {

            //Lets flip shit around
            let destRev = desL.reverse();

            console.log(destRev);

            destSplice = destRev.splice(destStopIndex + 1, destDiff);

            console.log(`${b} ${destSplice}`);

        } else {
            destSplice = desL.splice(destDiff, destStopIndex);
            console.log(`${b} ${destSplice}`);
        }

        // Total stops
        const totalStops = `${originStops + destStops} stops in total`
        console.log(totalStops);

        // } else {
        //     //SAME LINES
        //     console.log('SAME LINES');
        //     //Stops remaining 
        //     let diff = (ogStopIndex - destStopIndex);
        //     let stops = Math.abs(diff)
        //     console.log(`The distance between ${oS} & ${dS} is ${stops} stops`);


        //     //TODO: this won't handle negative values for some reason: try N8th and N28th - it should show 3 stops but only shows 8th. Might need a less than or 

        //     // List the remaining stops given a index value 
        //     let toGo = ogL.splice(ogStopIndex, destStopIndex);
        //     console.log(`You must travel through the following stops on the ${oL} line: ${toGo}`);
        // }
    }
}


originDestination('N', 'Times Square', 'N', '8th')