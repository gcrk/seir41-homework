console.log('scope');

//If we have a function we can console.log(); variable we declare INSIDE the fucntion but if we try to console.log(); OUTSIDE the function it won't work:

const func = function() {
  var local = true;
  console.log(local); // YES
};

// console.log(local); // NO. Doesn't exist outside the function
console.log(func());

//Good cause you won't have a million variable competing with each other

// GLOBAL - anywhere in your code it can be accessed even at a local level (Note: not true of ALL programming languages)

var global = "I'm available everywhere.";

var func2 = function() {
  var local = "I'm available inside this function.";
  console.log("I'm available inside the function ", global);
};

console.log(global);

//using const can prevent the variables being changed - Global is too risky cause everyone can change it.

var global = "I'm available everywhere.";

var func3 = function() {
  local2 = "I'm available everywhere too";
}; // if you define without var let or const - automatically creates a global variable. Even in a function causing problems. Within function will override the original global variable without putting let, var or const infront.

//PRECEDENCE
var g = "global";

function go() {
  var l = "local";
  var g = "in here!";
  alert(g + " inside go");
} // this local variable called g shadows the global variable called g - it's behind this one. Local one takes priority.

go(); // function uses inside g variable
alert(g + " outside go"); // alert uses global g variable

//Scopes - Global/////
const globalMessage = 'Hello World';

const showGlobalMessage = function () {
  console.log(globalMessage); //globalMessage is in the global scope
}

showGlobalMessage(); // works
console.log('Still in scope', globalMessage); //works

//Function Scopes

const showLocalMsg = function () {
  const localMessage = 'Goodbye cruel world';
  console.log(localMessage); //works
}

showLocalMsg(); //works
// console.log('Still in scope', localMessage); // DOES NOT WORK - outside the function - will get an error. Diff languages have differnt scopes. Return is important - to get stuff outside of functions

//Using a var inside a block//
//A block is a set of {} that isn't a function. E.g. a while loop:
// while () {
//   this is inside the block
// }
// for (var i = 0; i < array.length; i++) {
// this is inside the block
// }
// if () {
//   this is inside the block
// }

if (100 > 1) {
  var hotdogs = 999;
  console.log(hotdogs);
}

//hotdogs would still exist - even if you're hundreds of lines of code down
//This is why they introduced 'let'. The difference is var becomes global inside of blocks outside of functions

//Let is block scoped - only exists within the {} that we define it

if (200 > 1) {
  let goldfish = 777;
  console.log(goldfish);
}

//Let lets you have a temp variable

const greeting = function() {
  const message = 'hello cutie';
  return message;
}

greeting(); //won't show cause there's no console log - but won't show error
// console.log(message); //won't show cause message is local - will produce error

console.log(greeting()); // works - will show 'hello cutie'

const result = greeting ();
console.log(result); // also works


//Note: if you want it to be SECURE don't write it whatsoever cause JS is always visible in the browser.
