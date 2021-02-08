const state = {//tidy up gloable variables in an o
  nextPage: 1,
  requestInProgress: false,//stops multiple requests if true
  lastPageReached: false
};


const searchFlickr = function (keywords) {
  if (state.requestInProgress) {
    return;//get out
  }

  state.requestInProgress = true
  console.log('Searching for', keywords);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like GET/POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: state.nextPage++,//if you dont mention this you always get page one. and ++ is adding to the counter to get the next page
    //nextPage is POST INCREMENT so it send s off for page 1 and then next time it will send off for page 2
  }).done(showImages).done(function (info) {
    state.requestInProgress = false;
    console.log(info);
    console.console.log(state);
  });
};

const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    //console.log(results)
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL}); // .attr('src', thumbnailURL);
    $img.appendTo('#images'); // $('#images').append($img);
  });
};

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
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {//submit is when we know thers a new search happening
    event.preventDefault(); // disable the form being submitted to "the server".
    //Reset:
    nextPage = 1;
    $('#images').empty(); //empties out the div...ready for new images on new search
    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });

  // Very twitchy:
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
    if (scrollBottom < 500) {
      const searchTerms = $('#query').val();
      searchFlickr(searchTerms); // getting page 1 again.
    }
  });
});


//_.debounce is a higher order functions
//
