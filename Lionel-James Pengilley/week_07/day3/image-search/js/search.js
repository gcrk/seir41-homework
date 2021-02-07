const searchFlickr = function (keywords, page = 1) {
  console.log('Searching for', keywords);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP gets around CORS
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like GET/POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    page: page,
    format: 'json'
  }).done(showImages).done(function (info){
    console.log(info);
  });
};

const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    // generate a flickrURL
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL});
    // create an <img> with that flickrURL
    // display that <img>
    $img.appendTo('#images'); //$('#images').append($img); - appending child to paraent or parent to child
    console.log(photo);
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
    '_q.jpg' //change 'q' to something else for different sizes (see docs)
  ].join('');
};

$(document).ready(function (){
  //on form submit
  let nextPage = 1;
  $('#search').on('submit', function (event){//expect it to stop default
    // make sure you stop default. Because everything happens at once.
    //disable the form being submitted to "the server".
    event.preventDefault();
    console.log('yes');
    //find the search Terms - need value of input
    const searchTerms = $('#query').val();
    searchFlickr(searchTerms, nextPage);
    //get results from flickr
    //display results
  });

  $(window).on('scroll', _.throttle(function () {
    check_if_needs_more_content();
  }, 1000));
    //calculate the scroll bottom

    const check_if_needs_more_content = function () {
      const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();

      //if scroll bottom is beneath threshold
      if (scrollBottom < 500) {
        const searchTerms = $('#query').val();
        nextPage += 1;
        searchFlickr(searchTerms, nextPage);
      };
    };
      // search flickr again to get more results
});
