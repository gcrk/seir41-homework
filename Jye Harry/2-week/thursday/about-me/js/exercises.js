// ## About Me
//
// Start with this HTML and save it as 'aboutme.html':

// - Create a new Javascript file and link to it with a script tag at the bottom.
// - (In JS) Change the body tag's style so it has a font-family of 'Arial, sans-serif'.
// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// - Iterate through each li and change the class to 'listitem'. Add a style tag that sets a rule for 'listitem' to make the color red.
// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.

// const body = document.body;
// body.style.fontFamily = 'Arial, sans-serif';
// const spans = document.querySelectorAll('span');
// spans[0].innerHTML = 'Boodge';
// spans[1].innerHTML = 'Golf, coding, good food';
// spans[2].innerHTML = 'Kerang';

$('body').css('font-family', 'Arial, sans-serif');

const spanValues = ['Boodge', 'Golf, coding, good food', 'Kerang'];

$('span').each(function (i) {
  $(this).html(spanValues[i]);
});

$('li').addClass('listitem');

$('.listitem').css('color', 'red');

// bill murray is easier than searching for a photo of myself
$('body').append('<img src="http://www.fillmurray.com/100/200">');
