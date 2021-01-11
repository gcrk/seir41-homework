


// Add a script tag to the bottom of the HTML body.

//done

// (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
$("body").css({"font-family": "Arial, sans-serif"});

// (In the JavaScript) Replace each of the spans (nickname, favorites, hometown) with your own information.
$("#nickname").text("Leo");

$("#favorites").text("Guitars and Dogs");

$("#hometown").text("Sydney");

// Iterate through each li and change the class to "list-item".

// $("li").each(function() {
//   $("this").addClass("list-item");
// });

// much better is:

$("li").addClass("list-item");

// (In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.

//not done

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const $me = $("<img src=images/goof.jpg></img>");

$("body").append($me);

// or

//$("<img src=images/goof.jpg></img>").appendTo("body")

$("h1").funText(33, 'candy');
