let pageCounter = 1;

const searchFlickr = function (keywords, page) {
  console.log('Search for', keywords);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, { // this is our request to flickr - asking what we want from them
    method: 'flickr.photos.search', // not to be confused with HTTP methods like GET and POST. This is like a method, rather.
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    text: keywords,
    page: page,
    format: 'json'
  }).done(showImages).done(function (info) {
    console.log(info);
  });
};

const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    // generate a flickrURL
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL}); // .attr('src', thumbnailURL);
    $img.appendTo('#images');
    // create a <img> with that URL
    // display that <img>
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

  $('#search').on('submit', function (event) {
    event.preventDefault();

    const searchTerms = $('#query').val();

    $('#images').html('');

    searchFlickr(searchTerms, pageCounter);

  });

  // on form submit
    // find the search terms
    // get results from flickr
    // display results

  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
    if (scrollBottom < 500 && $.active == 0){
      pageCounter++;
      const searchTerms = $('#query').val();
      searchFlickr(searchTerms, pageCounter); // get pages 1 again.
    }

  });

});
