/*
# AJAX Flickr Lab

- Support infinite scroll to show all results from Flickr (eventually, after a lot of scrolling).
- **Prevent your code from making too many requests**: only one at a time, please
- Don't request more images when you reach the last "page" of Flickr results
- Make sure you go back to the first page when searching for a new term!
- Make it beautiful
- Add other features as you see fit
- Bonus: display larger images in an attractive slideshow
- Bonus: add links back to each image's own page on Flickr.com
*/

// console.log('hey', $.fn.jquery, _.VERSION);

const searchFlickr = function (keywords) {
  // console.log('Searching for', keywords);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: newPage,
  }).done(showImages).done(function (info) {
    // console.log(info);
  });
};

let newPage = 1;

const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL});
    $img.appendTo('#images');
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
    '_q.jpg'
  ].join('');
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();
    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });

  $(window).on('scroll', _.throttle(function () {
    const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
    if (scrollBottom < 500) {
      const searchTerms = $('#query').val();
      newPage++;
      searchFlickr(searchTerms);
    };
  }, 200) );
});
