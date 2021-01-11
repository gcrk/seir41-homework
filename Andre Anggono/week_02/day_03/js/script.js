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
		data.style.right = "0px";
		data.id = "walking-cat-left";
	}

	if (oldLeft < screen / 2 || oldLeft > screen / 2 + 5) {
		const newLeft = oldLeft + moves;
		data.style.left = newLeft + "px";
	} else {
		data.style.display = "none";
		clearInterval(walkTimer);
		dancingCat(oldLeft, true);
		setTimeout(function () {
			stopDancingCat(data, moves, oldLeft, true);
		}, 20000);
	}
};

const catWalkLeft = function (data, moves, screen) {
	let oldRight = parseInt(data.style.right);
	data.style.left = "";
	if (oldRight > screen) {
		data.style.left = "0px";
		data.id = "walking-cat-right";
	}

	if (oldRight < screen / 2 || oldRight > screen / 2 + 5) {
		const newRight = oldRight + moves;
		data.style.right = newRight + "px";
	} else {
		data.style.display = "none";
		clearInterval(walkTimer);
		dancingCat(oldRight, false);
		setTimeout(function () {
			stopDancingCat(data, moves, oldRight, false);
		}, 20000);
	}
};

const dancingCat = function (position, isLeft) {
	const dancingCat = document.querySelector("#dancing-cat");
	const music = document.querySelector("#audio");

	dancingCat.style = "";

	if (isLeft) {
		dancingCat.style.left = position + "px";
	} else {
		dancingCat.style.right = position + "px";
	}

	document.body.style.backgroundImage = 'url("img/dance-floor2.jpg")';
	document.body.style.backgroundSize = "cover";
	dancingCat.style.display = "inline";
	music.play();
};

const stopDancingCat = function (data, moves, directionValue, isLeft) {
	const dancingCat = document.querySelector("#dancing-cat");
	const music = document.querySelector("#audio");
	dancingCat.style.display = "none";
	music.pause();
	data.style.display = "inline";

	// cat going right
	if (isLeft) {
		const newLeft = directionValue + moves;
		data.style.left = newLeft + "px";
	} else {
		const newRight = directionValue + moves;
		data.style.right = newRight + "px";
	}

	document.body.style = "";
	walkTimer = setInterval(catWalk, 40);
};

let walkTimer = setInterval(catWalk, 40);
