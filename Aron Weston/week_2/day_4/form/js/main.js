$(function () {

    //Really simple get request using AJAX. I love how simple this instead of using the XHR object in vanilla JS. But the fetch API is still less code and a quicker AJAX tech. 

    //But still fun to learn the way they had to do it back in the day. 
    $('#get-cat').on('click', function () {

        $.get("https://api.thecatapi.com/v1/images/search?api_key=${config.key}&mime_types=gif", function (data, status) {
            //Check status
            console.log(status);

            const url = data[0].url;
            $('#cat').html(`<img src="${url}">`).addClass('do-thing');

        })
    })

});