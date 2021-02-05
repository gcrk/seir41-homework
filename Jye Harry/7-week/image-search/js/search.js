let pageCounter = 1;
let maxPages = 1;

$(document).ready(function() {
  $('#search').on('submit', function() {
    event.preventDefault();
    pageCounter = 1;
    searchFlickr();
  });

  $(window).on('scroll', _.throttle(function() {
    const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
    if (scrollBottom < 1000) {
      searchFlickr();
    }
  }, 400));
});

const searchFlickr = function() {
  if (pageCounter <= maxPages) {
    const query = $('#query').val();
    console.log('Searching for', query);
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    $.getJSON(flickrURL, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: query,
      format: 'json',
      page: pageCounter
    }).done(showImages).done(updatePages);
  }
}

const updatePages = function(info) {
  pageCounter++;
  maxPages = info.photos.pages;
}

const showImages = function(results) {
  _(results.photos.photo).each(function(photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL});
    $img.appendTo('#images');
  });
}

const generateURL = function(p) {
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
}
