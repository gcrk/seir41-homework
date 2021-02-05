
const state = {
  newPage: 1,
  lastPageReached: false;
};

const searchFlickr = function (keywords) {
  if (state.lastPageReached) {
    return;

  console.log('Searching for', keywords);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: state.newPage++
  }).done(showImages).done(function (info) {
    if (info.photos.pages >= info.photos.pages) {
      state.lastPageReached = true;
    }
    console.log(info);
  });
};


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


    newPage = 1;
    state.lastPageReached = false;
    $('img').remove()


    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });

  const chillSearchFlickr = _.debounce( searchFlickr, 4000, true );


  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
    if (scrollBottom < 500) {
      const searchTerms = $('#query').val();
      chillSearchFlickr(searchTerms); 
    }
  });

});
