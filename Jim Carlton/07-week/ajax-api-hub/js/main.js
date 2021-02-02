// GET USER IP

const getIP = function () {

  $.ajax('https://freegeoip.app/json/').done(function (ip) {
    $('#location').text(`${ ip.city }, ${ ip.region_name }, ${ ip.country_name }`);
    $('#longitude').text(`Longitude: ${ip.longitude}`);
    $('#latitude').text(`Latitude: ${ip.latitude}`);
    $('#ip').text(`IP: ${ip.ip}`);
  });

};

getIP();


// RANDOM QUOTE

const getQuote = function () {

  $.ajax('https://quote-garden.herokuapp.com/api/v3/quotes/random?json').done(function (quote) {
    $('#quote').text(quote.data[0].quoteText);
    $('#author').text(`- ${quote.data[0].quoteAuthor}`);
  });

};

const updateQuote = function () {
  getQuote();
  setTimeout(function() { updateQuote(); }, 10000);
};

updateQuote();


// Find Location of the ISS every 5 seconds

const getISSLocale = function () {

  $.ajax('http://api.open-notify.org/iss-now.json').done(function (locale) {

    const longitude = locale.iss_position.longitude;
    const latitude = locale.iss_position.latitude;

    $('#longitude-iss').text(`Longitude: ${ longitude }`).attr(`style`, `transform: rotate(${ longitude }deg);`);
    $('#latitude-iss').text(`Latitude: ${ latitude }`).attr(`style`, `transform: rotate(${ latitude }deg);`);

    $.ajax(`https://api.onwater.io/api/v1/results/${ latitude },${ longitude }?access_token=5b7XGLmQzBTdyQ271Aq5`).done(function (iswater) {

      if (iswater.water === true) {
      $('#iswater').text(`The ISS is currently flying over water.`);
      }
      else {
      $('#iswater').text(`The ISS is currently flying over land.`);
      };

    });

  });

};

const updateLocale = function () {

  getISSLocale();

  setTimeout(function() { updateLocale(); }, 5000);

};

updateLocale();


// Random color

const getRandomColor = function () {

  $.ajaxSetup({ cache: false });

  $.ajax('http://www.colr.org/json/color/random').done(function (foo) {

    let hex = JSON.parse(foo).new_color;
    let name = JSON.parse(foo).colors[0].tags[0].name;

    $('#random-color').attr(`style`, `background-color: #${ hex }`);
    $('#name').text(`${ name }`);
    $('#hex').text(`#${ hex }`);

  });
};

const updateColor = function () {

  getRandomColor();

  setTimeout(function() { updateColor(); }, 3000);

};

updateColor();
