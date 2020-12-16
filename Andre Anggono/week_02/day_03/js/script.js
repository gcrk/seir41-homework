const cWalk = document.querySelector("#walking-cat");

const catWalk = function () {
	const edgeOfScreen = window.innerWidth - 296;
	let oldLeft = parseInt(cWalk.style.left);

	if (oldLeft > edgeOfScreen) {
		console.log(`this is the end cWalk left is ${cWalk.style.left}`);
		oldLeft = 0;
	}

	const newLeft = oldLeft + 6;
	cWalk.style.left = newLeft + "px";
	// cWalk.style.left = edgeOfScreen + "px";
};

// const walkTimer = setInterval(catWalk, 40);
