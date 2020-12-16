const catWalk = function () {
	const cWalkRight = document.querySelector("#walking-cat-right");
	const cWalkLeft = document.querySelector("#walking-cat-left");
	const moves = 6;
	const edgeOfScreen = window.innerWidth - 296;

	if (cWalkRight) {
		catWalkRight(cWalkRight, moves, edgeOfScreen);
	} else {
		catWalkLeft(cWalkLeft, moves, edgeOfScreen);
	}
};

const catWalkRight = function (data, moves, screen) {
	let oldLeft = parseInt(data.style.left);
	data.style.right = "";
	if (oldLeft > screen) {
		// data.removeAttribute("style");
		// console.log(data.left);
		// document.querySelector("#walking-cat-right").style.left = "";
		data.style.right = "0px";
		data.id = "walking-cat-left";
	}

	const newLeft = oldLeft + moves;
	data.style.left = newLeft + "px";
};

const catWalkLeft = function (data, moves, screen) {
	let oldRight = parseInt(data.style.right);
	data.style.left = "";
	if (oldRight > screen) {
		// data.removeAttribute("style");
		// document.querySelector("#walking-cat-left").style.right = "";
		data.style.left = "0px";
		data.id = "walking-cat-right";
		console.log(document.querySelector("#walking-cat-right"));
	}

	const newRight = oldRight + moves;
	data.style.right = newRight + "px";
};

const walkTimer = setInterval(catWalk, 40);
