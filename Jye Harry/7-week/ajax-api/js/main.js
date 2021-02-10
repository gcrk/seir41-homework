$(document).ready(function() {
  $('button').on('click', getWeather);
  $('form').on('submit', getWeather);
})

const getWeather = function() {
  event.preventDefault();
  const location = $('input').val();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2b1ff4b53ad64c83c9026e2dc3f1a161`;
  $.ajax(url).done(function(info) {
    const temp = getTemp(info.main.temp);
    $('#temp').text(temp);
  })
}

const getTemp = function(temp) {
  if (temp > 50) {
    return "How does it even get this hot."
  } else if (temp > 45) {
    return "I imagine this is what ants must have felt like when you used to hold a magnifying glass over them as a little kid. Or do you still do that?";
  } else if (temp > 40) {
    return "The roads around here are probably starting to melt a little.";
  } else if (temp > 35) {
    return "Local sporting events are probably cancelled due to the heat.";
  } else if (temp > 30) {
    return "Get in the pool.";
  } else if (temp > 25) {
    return "Hot enough where the metal part of your seat belt will burn the crap out of the back of your arm. Other than that it's actually beautiful.";
  } else if (temp > 20) {
    return "Average I suppose.";
  } else if (temp > 15) {
    return "You might need a jumper.";
  } else if (temp > 10) {
    return "Yeah cold.";
  } else if (temp > 5) {
    return "Too cold to bother going outside but not cold enough for the snow. Probably the most boring kind of cold.";
  } else if (temp > 0) {
    return "It might be snowing but it also might not be.";
  } else if (temp > -5) {
    return "Probably snowing yay.";
  } else if (temp > -10) {
    return "Definitely snowing.";
  } else {
    return "Too cold don't bother.";
  }
}
