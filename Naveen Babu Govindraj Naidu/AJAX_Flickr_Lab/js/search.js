var lastPages = false;
let currentPages = 1;
const showImages = function(results){
  currentPages++;
  //nested or helper function that returns a thumbnail url for gib=ven photo object.
  const generateURL = function(p){
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg'//chnage q something else for different sizes.
    ].join('');
  };
  console.log(results)
  //procee the result
  results.photos.photo.forEach(function(photo){
    console.log(photo);
    const thumbnailURL = generateURL(photo)
      //console.log(thumbnailURL)

    //create a URL for the photo
    //create an image to displayy the URL
    const $img = $('<img>', {src:thumbnailURL});//equivallent to attr('src',thumbnailURL);
    //console.log($img);
    //shove that image into the page.

    $img.appendTo('#images');//$('#images').append($img);
    //console.log("results.photos.pages " + results.photos.pages);
    if(currentPages === results.photos.pages){
        lastPages = true;
    }

  });
};

    let currentPage = 0;
    const searchFlickr = function(terms){
      //console.log(`searching flicker for ${terms}`);
      console.log(lastPages + "lastPages")
      if(lastPages === false){
        //JSONP:
        //set the url
      const flickrURL = 'http://api.flickr.com/services/rest?jsoncallback=?';
      //make the request
      $.getJSON(flickrURL, {
        method:'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',//not a secret key
        text: terms,
        format: 'json',
        page: currentPage++,

      }).done(showImages).done(function(data){
//=========================
    // if(currentPage >= 3){
    //   console.log("pages vadhi gya");
    //   lastPages = true;
    // }

    });
  }
};

  $(document).ready(function(){
    $('#search').on('submit', function(event){
      event.preventDefault();
      //console.log('submit')

      //find the search term
      const query = $('#query').val();
      $('#images').empty();//this will remove the previous images.
      //console.log(query);

      //search flicker
      currentPage = 0;
      //console.log (currentPage +" current page")
      searchFlickr(query);
  });
});

  $(window).on('scroll', function(){
    console.log('scroll event fired');

    const scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());

    if (scrollBottom <= 10){
      console.log('nearing the bottom');
      //time to get moe results from flickrURL
      const query = $('#query').val();
      searchFlickr(query);
    }

  });
