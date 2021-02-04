
console.log('hey', $.fn.jquery, _.VERSION);

console.log($("#output"));

const searchFlicker = (keywords) => {
    
    console.log('Searching for', keywords);
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', // methods not to be confused with HTTP methods
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json'
    }).done(showImages).done(function (info) {
        console.log(info);
    })
}


const showImages = (res) => {
    _(res.photos.photo).each(function (photo) {
        const thumbnail = genURL(photo);
        const img = $('<img>', {
            src: thumbnail
        }).appendTo('#output');
    })
}

const genURL = (p) => {
    return [
        'http://farm', // start of the thing
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' //change q to different sizes
    ].join('');
}

const removeImages = () => {
    const images = Array.from($('#output')[0].children);
    if (images.length > 1) {
        images.forEach(image => image.remove());
    }
}


$(document).ready(function () {

    $('#search').on("submit", function (e) {

        e.preventDefault();

        const searchTerms = $('#query').val();

        removeImages();

        searchFlicker(searchTerms);

    });

    $(window).scroll(function () { 
        const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height(); 
        if (scrollBottom < 500) {
            const searchTerms = $('#query').val();
            searchFlicker(searchTerms);
        }
    });
});