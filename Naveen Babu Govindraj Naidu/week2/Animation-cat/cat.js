console.log("hello");

var cat_image = document.querySelector("img");  //selecting img
cat_image.style.left = "0px";
var half;

var id = setInterval(catWalk, 50);         //calling catWalk after 50ms

function catWalk() {
  var temp = parseInt(cat_image.style.left);
  cat_image.style.left = (temp + 10) + "px";   //adding 10 to current position so that cat moves 10px
  half = (screen.width / 4);    //finding half of screen. I have used 3 instead of 2 because div by 2 was more than half in my laptop screen
  if (temp > half) {   //to make it look like half I have used 3. You can use 2 itself
    clearInterval(id);   //stopping setInterval
    cat_image.src = "https://media.tenor.com/images/ede4656fcfd986d84ecee21a90b0f134/tenor.gif"; //changing source to dancing cat gif
    var id1 = setTimeout(startForward, 5000);   //after 10 seconds startForward is called that means for 10 seconds cat dances
  }       //instead of calling startForward you can call catWalk fn here again but it was not working in my laptop(I was getting cat dance instead of cat walk) so I called another fn startForward
}

function startForward() {
  cat_image.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"; //src is changed to cat walk again
  setInterval(function() {   //cat starts walking again
    var temp = parseInt(cat_image.style.left);
    cat_image.style.left = (temp + 10) + "px";
  }, 50);
}
