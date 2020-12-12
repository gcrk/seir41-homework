// MTA Lab
const subway = {
	N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
	L: ["8th", "6th", "Union Square", "3rd", "1st"],
	6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

// main function
const planTrip = function (fromLine, fromStation, toLine, toStation) {
	const isSameLine = fromLine === toLine; // bool check if the trip is on the same line
	const interchange = "Union Square"; // interchange value for central ref point
	const tripSummary = {}; // object to store a report of the processed trip data

	// Two scenarios:
	// 1) Trip is on the same line
	// 2) Trip is on different line
	if (isSameLine) {
		tripSummary.firstPart = stops(fromLine, fromStation, toStation); // stores output from stops function in the firstPart key of tripSummary object
	} else {
		tripSummary.firstPart = stops(fromLine, fromStation, interchange); // stores output from stops function in the firstPart key of tripSummary object
		tripSummary.secondPart = stops(toLine, interchange, toStation); // stores output from stops function in the secondPart key of tripSummary object
	}

	printResult(tripSummary, isSameLine); // prints the result by using the tripSummary object report as input
};

// function to iterate through the arrays and process the data
const stops = function (line, fromStation, toStation) {
	const indexA = subway[line].indexOf(fromStation); // finds the index of array of the fromStation
	const indexB = subway[line].indexOf(toStation); // finds the index of array of the toStation

	// Object to store the processed value and to be returned at the end of function.
	const result = {
		line: line,
		stops: [],
		totalStops: Math.abs(indexA - indexB) // This will calculate the distance between point A to Point B. Math.abs will convert it to an absolute number removing negative values
	};

	// Two scenarios:
	// 1) If the starting point index is greater than the destination point index > slice the array > and reverse it so it will be in the right order
	// 2) If the starting point index is less than the destination point index (meaning: in the right order of the array) > slice the array
	if (indexA > indexB) {
		result.stops = subway[line].slice(indexB, indexA).reverse();
	} else {
		result.stops = subway[line].slice(indexA + 1, indexB + 1); // adding 1 to the slice points to obtain the right values of the array
	}

	return result;
};

// function to print out console logs
const printResult = function (stopsObj, isSameLine) {
	let totalStops = stopsObj.firstPart.totalStops; // stores the total stop travelled value

	console.log(`You must travel through the following stops on the ${stopsObj.firstPart.line} line: ${stopsObj.firstPart.stops.join(", ")}.`);

	if (!isSameLine) {
		console.log("Change at Union Square");
		console.log(`Your journey continues through the following stops on the ${stopsObj.secondPart.line} line: ${stopsObj.secondPart.stops.join(", ")}.`);
		totalStops += stopsObj.secondPart.totalStops;
	}

	console.log(`${totalStops} stops in total.`);
};
