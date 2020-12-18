// https://gist.github.com/wofockham/894b9a5e05a971e0208b

$(function () {

    //set body to arial
    $('body,html').css('font-family', 'arial');

    //Set DOM elements to inputs
    $('#nickname').html('<strong>Az</strong>');
    $('#favourites').html('Vanilla JS');
    $('#hometown').html('International');

    //Loop 
    $('li').each(function () {
        $(this).addClass('listitem');
    })

    //Add style 
    $("<style>.listitem { color: red; }</style>").appendTo("head");

    //Add me 
    // $('<img></img>').attr('src', 'https://avatars0.githubusercontent.com/u/74189083?s=400&u=08e83ad84df15d1ae19c470cd11f76912c01a934&v=4').appendTo('body');

    //Add me
    $('<img src="https://avatars0.githubusercontent.com/u/74189083?s=400&u=08e83ad84df15d1ae19c470cd11f76912c01a934&v=4"></img>').appendTo('body');

});