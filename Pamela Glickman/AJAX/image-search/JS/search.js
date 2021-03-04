'use strict';

// Global variables
var pageNum = 1;
var lastPageReached = false;

// Alternate Solution
var state = {
  pageNum: 1,
  requestInProgress: false

  // Function for getting pictures from Flickr
};var searchFlickr = function searchFlickr(keywords, pageNum) {
  // if (state.requestInProgress) {
  //  return;
  //}
  console.log("Hello from search flickr");
  // state.requestInProgress = true;
  if (lastPageReached) {
    return;
  }
  console.log('Searching for ' + keywords);
  var flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to confused with HTTP methods like GET/POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: pageNum
  }).done(showImages).done(function (info) {
    //state.requestInProgress = false;
    console.log(info);
    //console.log(state);
    if (info.photos.pages <= pageNum) {
      lastPageReached = true; // prevents unnecessary requests
    }
  });
};

// Function for displaying images
var showImages = function showImages(results, pageNum) {
  //  if (results.photos.pages >= results.photos.page) { // This was intended to prevent attempts to load images that didn't exist
  _(results.photos.photo).each(function (photo) {
    var thumbnailURL = generateURL(photo);
    var $a = $('<a>', { href: thumbnailURL }); // create a link to the image's flickr page
    var $img = $('<img>', { src: thumbnailURL }); // .attr('src', thumbnailURL)
    $a.append($img); // make the image into a link to it's flickr page
    $a.appendTo('#images');
    var $largeImg = $('<img>', { src: thumbnailURL, class: 'large-image' });
    var $div = $('<div>');
    $div.append($largeImg);
    $div.appendTo('#slideshow');
  });
  // }
};

// Function for creating image URL
var generateURL = function generateURL(p) {
  return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
};

// Function for adding the event listener
$(document).ready(function () {
  searchFlickr('dogs', 1); // Load default pictures of dogs
  // This part was borrowed from https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/
  $("#slideshow div").hide();
  setInterval(function () {
    $('#slideshow > div:first').next().appendTo('#slideshow');
  }, 3000);
  ///////////////////////////////////////////////////////////////////////////////
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disable the form being submitted to "the server".
    pageNum = 1;
    var searchTerms = $('#query').val();
    $('img').remove();
    $('#slideshow div').remove();
    lastPageReached = false;
    window.scrollTo(0, 0);
    searchFlickr(searchTerms, pageNum);
  });
});

var chillSearchFlickr = _.debounce(searchFlickr, 4000, true); // Added after class

// Function to create infinite scrolling
$(window).on('scroll', function () {
  var scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
  if (scrollBottom < 500) {
    // I originally changed the value to less than 1 to prevent the page from loading too many pages
    pageNum++;
    var searchTerms = $('#query').val();
    chillSearchFlickr(searchTerms, pageNum); // Added after class
  }
});