const config = { 
    unsplash_key: "x",
    weather_key: "da6cc8d124882796f1f64ad51e846e3c"
}

const getWeather = () => {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
    } else {
        navigator.geolocation.getCurrentPosition(success, error);

        function success(pos) {
            const lat = pos.coords.latitude;
            const long = pos.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${config.weather_key}&units=metric`

            $.ajax(url)
            .done(function (data) {
                outputWeather(data);
            }).fail(function (err) {
                console.error(err);
            });
        }

        function error(err) {
            console.error(`ERROR(${err.code}): ${err.message}`);
        }
    }
}


const outputWeather = (data) => {

    console.log(data);

    // const city = current.name;
    // const prediction = current.weather[0].main.toLowerCase();
    // const condition = current.weather[0].description;
    // const temp = Math.floor(current.main.temp);
    // const maxTemp = Math.floor(current.main.temp_max);
    // const minTemp = Math.floor(current.main.temp_min);
    // const feelsLike = Math.floor(current.main.feels_like);
    // const humidity = Math.floor(current.main.humidity);
    
    // const output = $('#output');
    // output.innerHTML = `
    // <div class="output">
    //     <span class="header"><h2>${city} / ${temp}&#8451;</h2>${icon}</span>
    //     <h5>${today}</h5>
    //     <h5>The weather is currently ${condition}, with a prediction of further ${prediction}.</h5>
    //     <ul>
    //         <li><span>Current temp: ${temp} &#8451;</span></li>
    //         <li><span>Humidity: ${humidity} &#37;</span></li>
    //         <li><span>Feels like: ${feelsLike} &#8451;</span></li>
    //         <li><span> Max/Min: ${maxTemp} &#8451; / ${minTemp} &#8451;</span></li>
    //         <li><span>Sunrise: ${sunRise} / Sunset: ${sunSet}</span></li>
    //         <button type="button" class="button-primary" value="location" id="location"> Get my current weather</button>
    //     </ul>
    // </div>
    // `
}

$(document).ready(function () {
    $('#weather').on('click', function () {
        getWeather();
    });
});




//Generate random background image from Unsplash API
// backgroundImage(condition)

// const backgroundImage = (query) => {
//     const url = `https://api.unsplash.com/photos/random?client_id=${unsplash.key}&page=2&query=${query}`

//     $.ajax(url)
//         .done(function (res) {
//             $('body').css('background-image', `url(${res.photos.urls.regular}')`);
//         }).fail(function (err) {
//             console.error(err);
//         });
// }