const state = {
  nextPage: 1,
  lastPageReached: false
};

$(document).ready(function() {
  $('#search').on('submit', function() {
    event.preventDefault();
    state.nextPage = 1;
    $('#images').empty();
    searchFlickr();
  });

  const debouncedSearchFlickr = _.debounce(searchFlickr, 1000, true);
  const throttledSearchFlickr = _.throttle(searchFlickr, 1000, {trailing: false});

  $(window).on('scroll', function() {
    const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
    if (scrollBottom < 1000) {
      // debouncedSearchFlickr();
      throttledSearchFlickr();
    }
  });
});

const searchFlickr = function() {
  if (state.lastPageReached) return;
  const query = $('#query').val();
  console.log('Searching for', query);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    format: 'json',
    page: state.nextPage
  }).done(showImages).done(updateState);
}

const updateState = function(info) {
  if (info.photos.page >= info.photos.pages) state.lastPageReached = true;
  state.nextPage++;
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
