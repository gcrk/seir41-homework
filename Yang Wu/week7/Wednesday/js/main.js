// # AJAX Flickr Lab
//
// - Support infinite scroll to show all results from Flickr (eventually, after a lot of scrolling).
// - **Prevent your code from making too many requests**: only one at a time, please
// - Don't request more images when you reach the last "page" of Flickr results
// - Make sure you go back to the first page when searching for a new term!
// - Make it beautiful
// - Add other features as you see fit
// - Bonus: display larger images in an attractive slideshow
// - Bonus: add links back to each image's own page on Flickr.com

// console.log($.fn.jquery, _.VERSION) //testing whether 3 js are all pluged in.
let pageSum = 0;
let pageMarker = 1;
let requestInProgress = false;

const searchFlickr = function(keywords, page) {
  if(requestInProgress) {
    return;
  }
  requestInProgress = true
  console.log('Searching for', keywords);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'//JSONP
  $.getJSON(flickrURL, { //params
    method: 'flickr.photos.search', //method in object, not http methods like get/post
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json', //tell api
    page: page
  }).done(showImages).done(function(info) {
    pageSum = info.photos.pages;
  }).done(function(info){
    requestInProgress = false;
    console.log(info)//help debugging
  })
}

const showImages = function(results) {
  _(results.photos.photo).each(function(photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL})
    $img.appendTo('#images')
  })
}

const generateURL = function(p) {
  return[
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg'
  ].join('');
}

$(document).ready(function() {
  $('#search').on('submit', function(e) {

    e.preventDefault(); //prevent the form being submitted to 'the server'
    pageMarker = 1;
    const searchTerms = $('#query').val();
    searchFlickr(searchTerms, 1)
  });

  $(window).on('scroll', function() {
    const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
    if(scrollBottom <= 400 && (pageSum-pageMarker) > 0) {
      pageMarker += 1
      const searchTerms = $('#query').val();
      searchFlickr(searchTerms, pageMarker);
    }
  })
})
