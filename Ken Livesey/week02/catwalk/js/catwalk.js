console.log("hello, hello world");

/*
# Exercises: Animation

## The Cat Walk

Who needs Milan when you have JavaScript?

Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>Cat Walk</title>
 </head>
 <body>

  <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">

 </body>
</html>
```

- Create a new Javascript file and link to it with a script tag at the bottom.
- Create a variable to store a reference to the img.
- Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
- Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
- Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

- Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

- Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

- Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

- Bonus #4: Pretty much go nuts or whatever.
*/

//this creates a button to change the background color when clicked.
//TO DO make it auto when the cat reaches the midle of the screen


// || This is attempt 1, works but could be better. Straight copy from class
const img = document.getElementById("walkingCat");
img.style.position = 'absolute';
img.style.left = '0px';
img.style.top = '0px';

//This makes the cat walk towards th right
const catWalkRight = function() {
  const oldLeft = parseInt(img.style.left);
  const newLeft = oldLeft + 1;

  img.style.left = newLeft + 'px';
};

//This make the cat walk down the page
const catWalkDown = function() {
  const oldTop = parseInt(img.style.top);
  const newTop = oldTop + 1.5;
  img.style.top = newTop + 'px';
};

//These call the functions & make it start walking
setInterval(catWalkDown, 85);
setInterval(catWalkRight, 35);


const colBtn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
};
/*
colBtn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
*/

//event listener style background color change
colBtn.addEventListener('click', function () {
  let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
});

/* This is modelled prety heavily on one of the previous students. I can't get it working at all. No idea what i was not addressing properly.
const cat = document.getElementById("walkingCat");
const body = document.getElementsByTagName("body")[0];

// Set the starting position and direction of the cat
cat.style.left = '0px';
let direction = "right";

//
const catWalk = function () {

  // Decide the amount the image moves depending on the direction
  let displacement = (direction === "right") ? 5 : -5;

  // Calculate the new value for the image's LEFT style
  let currentLeft = +(cat.style.left);
  let newLeft = currentLeft + 1;
  cat.style.left = newLeft + 'px';

  // Make the cat dance at the halfway point
  // The maths makes sure the halfway point is a multiple of the displacement
  //    so that the condition can be met
  let halfway = Math.ceil(((window.innerWidth/2)-(cat.width/2))/displacement)*displacement;
  if(currentLeft === halfway) {
    window.clearInterval(timer);
    catDance();
  }

  // Turn the cat around at right edge of the screen
  if(currentLeft > window.innerWidth) {
    window.clearInterval(timer);                   // Stop the current animation
    direction = "left";                             // Set the direction
    cat.className = "left-cat";                     // Change the image orientation
    timer = window.setInterval(catWalk, 40);   // Start the new animation
  }

  // Turn the cat around at left edge of the screen
  if(currentLeft < 0-cat.width) {
    window.clearInterval(timer);                 // Stop the current animation
    direction = "right";                         // Set the direction
    cat.className = "right-cat";                 // Change the image orientation
    timer = window.setInterval(catWalk, 40);     // Start the new animation
  }
};

var keepWalking = function() {
  cat.src = "img/cat-walk.gif";
  timer = window.setInterval(catWalk, 40);
};

let timer = window.setInterval(catWalk, 40);
*/
