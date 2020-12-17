// # Exercises: Animation
//
// ## The Cat Walk
//
// Who needs Milan when you have JavaScript?
//
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.

// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

const catImage = document.getElementById("walking-cat");

// This is the code used for the first bonus.
const catWalkBonus1 = function() {
  if (catPosition > 1000) {
     catPosition = 0;
  } else {
    catPosition +=10;
  }
 catImage.style.left = `${ catPosition }px`
 }

// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

//
// - Bonus #4: Pretty much go nuts or whatever.

//These selectors are for the buttons and text that appear at the start. I enabled the user to change the speed of the color change animation to improve accessibility.
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const text = document.querySelector('main');

//These selectors are for the dancing cat effects
const dancingCat = document.getElementById("dancing-cat");
const body = document.querySelector('body');

//I used the linked CSS file to set the cat's original position instead of Javascript, so it's not being set here.

//These are the global variables I needed
let catPosition = 0; //I used the linked CSS file to set the cat's original position instead of Javascript, so it's not being set here.
let clearCode = null; //Clears the walking animations
let backgroundCode = null; //Clear the background color change
let bgRate = 1000; //Controls the rate at which the background color changes (higher value = slower)

//Selects a random color and changes the background to match it
const changeBackground = function () {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const newColor = `rgb(${ red }, ${ green }, ${ blue })`;
  body.style.backgroundColor = newColor;
}

//Stops the dancing cat animations and returns to the cat walking
const endDance = function() {
  clearInterval(backgroundCode); //Ends the background color changing
  body.style.backgroundColor = "white";
  dancingCat.style.display = "none";
  catImage.style.display = "inline";
  if (catPosition === 450) {
    //Calls catWalk so the cat go right if it approach from the left
    catPosition +=10; // Increases cat position to prevent catDance being called constantly
    catImage.style.left = `${ catPosition }px`;
    clearCode = setInterval(catWalk, 50);
  } else {
    //Calls reverseWalk so the cat go left if it approached from the right
    catPosition -=10; // Decreases cat position to prevent catDance being called constantly
    catImage.style.left = `${ catPosition }px`;
    clearCode = setInterval(reverseWalk, 50);
  }
}

//Starts the cat dancing animations and the background changing
const catDance = function() {
  backgroundCode = setInterval(changeBackground, bgRate);
  catImage.style.display = "none";
  dancingCat.style.display = "inline";
  setTimeout( endDance, 10000);
}

//Makes the cat go left until it reaches the middle or right of the screen
const catWalk = function() {
  if (catPosition > 1000) {
    clearInterval(clearCode); // Stop the cat moving right
    catImage.style.transform = "scaleX(-1)"; // Flip the cat
    clearCode = setInterval(reverseWalk, 50); //Cat starts moving left
  } else if (catPosition === 450){
    //Stops the cat when it reaches the middle of the screen and call catDance
    clearInterval(clearCode);
    catDance();
  } else {
    catPosition +=10;
    catImage.style.left = `${ catPosition }px`;
  }
}

//Makes the cat go right until it reaches the middle or right of the screen
const reverseWalk = function() {
  if (catPosition < 0) {
    clearInterval(clearCode); // Stop the cat moving left
    catImage.style.transform = "scaleX(1)"; // Flip the cat
    clearCode = setInterval(catWalk, 50); // Cat starts moving right
  } else if (catPosition === 600) {
    //Stops the cat when it reaches the middle of the screen and call catDance
    clearInterval(clearCode);
    catDance();
  } else {
    catPosition -=10;
    catImage.style.left = `${ catPosition }px`;
  }
}

//Makes the background change faster, in response to a yes click and starts the cat walking
const yesResponse = function() {
  bgRate = 100; // Lower values mean faster changes
  text.style.visibility = "hidden";
  clearCode = setInterval(catWalk, 50);
}

//Makes the background change slower, in response to a yes click and starts the cat walking
const noResponse = function() {
  bgRate = 1500; // Higher values mean slower changes
  text.style.visibility = "hidden";
  clearCode = setInterval(catWalk, 50);
}

//Makes the buttons start the cat walking animation
yes.addEventListener("click", yesResponse);
no.addEventListener("click", noResponse);
