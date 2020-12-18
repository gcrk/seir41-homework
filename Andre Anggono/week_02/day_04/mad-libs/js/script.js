//  Mad Libs refactored in jQuery

// DOM Manipulation
// const makeMadLib = function () {
// 	let result = `${document.getElementById("person").value} really likes ${document.getElementById("adjective").value} ${
// 		document.getElementById("noun").value
// 	}.`;

// 	document.getElementById("story").innerHTML = result;
// };

// const button = document.getElementById("lib-button");
// button.addEventListener("click", makeMadLib);

// jQuery
const makeMadLib = function () {
	const noun = $("#noun").val();
	const adj = $("#adjective").val();
	const name = $("#person").val();

	const result = `${name} really likes ${adj} ${noun}.`;
	$("#story").text(result);
};

$("#lib-button").on("click", makeMadLib);
