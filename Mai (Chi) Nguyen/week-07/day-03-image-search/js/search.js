const searchFlickr = function (keywords, page) {
  // console.log('Searching for ', keywords);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like GET/POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',    //this to tell flickr
    page: page
  }).done(showImages).done(function(info) {
    console.log(info);
  });
}
// pages as global variable to track
let currentPage = 1;
let pages = 0;

const showImages = function (results) {
  // console.log(results.photos.page);
  pages = results.photos.pages;
  _(results.photos.photo).each(function(photo) {
    // generate a URL
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL}); //.attr('src', thumbnailURL);
    $img.appendTo('#images'); // $('#images').append($img);
    // create a <img> with that URL
    // display the image
  });
}

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
    '_q.jpg' // TODO: change 'q to sth else for different sizes (see docs)'
  ].join('');
};

const resetSearch = function(newKeywords) {
  currentPage = 1;
  $('#images').html('');
}

$(document).ready(function(event) {
  //on form submit

  $('#search').on('submit', function(event) {
    event.preventDefault();
    const searchTerms = $('#query').val();
    resetSearch(searchTerms);
    searchFlickr(searchTerms, currentPage);

  })
    // find the search terms
    // get results from flickr
    // display results

    // Very twitchy
  $(window).on('scroll', _.throttle(function () {

    //calculate the scrollbottom
    const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
    // console.log(scrollBottom);
    // if the scrollbottom is beneath some threshold
    if (scrollBottom < 500) {
      console.log('near the bottom');
      if (currentPage < pages) {
        const searchTerms = $('#query').val();
        currentPage += 1;
        searchFlickr(searchTerms, currentPage); // getting page 1 again ##TODO: HW
      }
      // if have 1 page, stop asking
      // get rid of the photos of last search
    }
      // search Flickr again
  }, 500))
})


// DIVIDE AND CONQUER
