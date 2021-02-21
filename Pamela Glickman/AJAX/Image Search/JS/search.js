// Global variables
let pageNum = 1;
let lastPageReached = false;

// Alternate Solution
const state = {
  pageNum: 1,
  requestInProgress: false
}

// Function for getting pictures from Flickr
const searchFlickr = function (keywords, pageNum) {
  // if (state.requestInProgress) {
  //  return;
  //}

  // state.requestInProgress = true;
  if (lastPageReached) {
    return;
  }
  console.log('Searching for', keywords);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to confused with HTTP methods like GET/POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: pageNum,
  }).done(showImages).done(function (info) {
    //state.requestInProgress = false;
    console.log(info);
    //console.log(state);
    if (info.photos.pages >= info.photos.pages) {
      lastPageReached = true; // prevents unnecessary requests
    }
  });
};

// Function for displaying images
const showImages = function (results, pageNum) {
//  if (results.photos.pages >= results.photos.page) { // This was intended to prevent attempts to load images that didn't exist
    _(results.photos.photo).each(function (photo) {
        const thumbnailURL = generateURL(photo);
        const $a = $('<a>', {href: thumbnailURL}) // create a link to the image's flickr page
        const $img = $('<img>', {src: thumbnailURL}); // .attr('src', thumbnailURL)
        $a.append($img); // make the image into a link to it's flickr page
        $a.appendTo('#images');
        const $largeImg = $('<img>', {src: thumbnailURL, class: 'large-image'});
        const $div = $('<div>');
        $div.append($largeImg);
        $div.appendTo('#slideshow');
    });
// }
}

// Function for creating image URL
const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
}

// Function for adding the event listener
$(document).ready(function() {
  searchFlickr('dogs', 1); // Load default pictures of dogs
  // This part was borrowed from https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/
  $("#slideshow div").hide();
  setInterval(function() {
    $('#slideshow > div:first')
      .next()
      .appendTo('#slideshow')
  },  3000);
  ///////////////////////////////////////////////////////////////////////////////
  $('#search').on('submit', function(event) {
    event.preventDefault(); // disable the form being submitted to "the server".
    pageNum = 1;
    const searchTerms = $('#query').val();
    $('img').remove();
    $('#slideshow div').remove();
    lastPageReached = false;
    window.scrollTo(0,0);
    searchFlickr(searchTerms, pageNum);
  });
});

const chillSearchFlickr = _.debounce( searchFlickr, 4000, true); // Added after class

// Function to create infinite scrolling
$(window).on('scroll', function() {
  const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
  if (scrollBottom < 500) { // I originally changed the value to less than 1 to prevent the page from loading too many pages
    pageNum++;
    const searchTerms = $('#query').val();
    chillSearchFlickr(searchTerms, pageNum); // Added after class
  }
});
