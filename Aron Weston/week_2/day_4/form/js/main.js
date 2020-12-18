$(function () {

    $('#get-cat').on('click', function () {

        $.get("https://api.thecatapi.com/v1/images/search?api_key=${config.key}&mime_types=gif", function (data, status) {
            //Check status
            console.log(status);

            const url = data[0].url;
            $('#cat').html(`<img src="${url}">`).addClass('do-thing');

        })
    })

});