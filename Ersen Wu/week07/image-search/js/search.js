let pageNumber = 0;
let totalPages = 0;

const searchFlickr = _.throttle(function(keyword){
   console.log("searching for ", keyword);
   pageNumber = pageNumber + 1;
   const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; //JSONP
   $.getJSON(flickrURL, {
     method: 'flickr.photos.search', //not to be confused with HTTP methods like GET/POST, this is "TELLING FLICKR"
     api_key: '2f5ac274ecfac5a455f38745704ad084',
     text: keyword,
     format: 'json',
     page: `${pageNumber}`
   }).done(showImages).done(function(info){
     console.log(info);
   });
}, 1000, {trailing:false});

const showImages = function(results){
   const totalPages = results.photos.pages;
   console.log(totalPages);
  _(results.photos.photo).each(function (photo){

    //generate URL
  const thumbnailURL = generateURL(photo);

    //create <img>
  const $img = $('<img>', {src: thumbnailURL});
  $img.appendTo('#images'); //$('#images').append($img)
    //display that <img>
  });
};

const generateURL =  function (p) {
     return [
       'http://farm',
       p.farm,
       '.static.flickr.com/',
       p.server,
       '/',
       p.id,
       '_',
       p.secret,
       '_q.jpg' // change q to something else for different sizes(see docs)
     ].join(''); //returns a string
};

$(document).ready(function(){
  //on form submit
  $('#search').on('submit', function(event){
    event.preventDefault(); //disables the form from being submitted to "the server". so "yes" stays
    pageNumber = 0;
    $('#images').html('');
    //find the search terms
    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);

      //get results from flick
      //display results
  });



  $(window).on('scroll',function(){
    //calculate scroll btm
    const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
    if(scrollBottom < 500 && pageNumber <= totalPages - 1){
      const searchTerms = $('#query').val();

      searchFlickr(searchTerms); //getting page 1 again
    }
    //if scroll btm below threshold
    //searchFlickr again
  })
});
