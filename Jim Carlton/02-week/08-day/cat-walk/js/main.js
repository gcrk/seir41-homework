let img = document.getElementsByTagName('img')[0];
img.style.left = '0px'; // set the left attribute value to begin and be eligible for first condition
img.style.transform = 'scaleX(1)'; // set transform style to be the right way around to start to be eligible for first condition
let limitNum = (window.innerWidth - 270); // find window width - the cat image width (approximate, accunting for whitespace around cat)

const walkThisWay = function() {

  let locationNum = 0; // create location variable which is kept as a number to use in conditional statements

  if (locationNum <= limitNum && img.style.transform === 'scaleX(1)') {
    locationNum = Number((img.style.left).split('px')[0]) + 1; // splitting the string to get the number
    img.style.left = locationNum + 'px'; // stitching it back up to be a string for input into the DOM for the img object attribute, left
    if (locationNum === limitNum) { // if the cat's position is at the limit aka the left-most part of screen, turn it back around and send it to the left
      img.style.transform = 'scaleX(-1)'; // flip orientation of cat
    }
  }

  else if (locationNum <= limitNum && img.style.transform === 'scaleX(-1)'){
    locationNum = Number((img.style.left).split('px')[0]) - 1;
    img.style.left = locationNum + 'px';
    if (locationNum === 0) { // if the cat's position is at 0 aka the left-most part of screen, turn it back around and send it to the right
      img.style.transform = 'scaleX(1)';
    }
  }

  else {
    clearInterval(catWalk);
  }
}

let catWalk = setInterval(walkThisWay, 10);
