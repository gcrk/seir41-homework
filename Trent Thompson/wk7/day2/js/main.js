const fetchFact = function () {
  $.ajax("http://api.open-notify.org/astros.json").done(function (info) {
    //console.log(info.people)//to checking its working
    //const people = info.people
    const people = info.people
    $('h2').remove()
    for (let i = 0; i < people.length; i++){
      //console.log(people[i].name)
      loopedPeople = people[i].name
      //console.log(loopedPeople)

      $('<h2>').text(`${loopedPeople}`).appendTo('#people'); //('<h2>')
    }
    //$('<h2>').text(`${people[i]}`).appendTo('body');
  });
}

$(document).ready(function () {
  $('#fetch').on('click', fetchFact);
  $('#iss').on('click', getData);
  //fetchFact(); //first fact for free

});

const getData = function () {
  $.ajax("http://api.open-notify.org/iss-now.json").done(function (data) {
    console.log(data)
    $('h2').remove()
    $('<h2>').text('longitude ' + data.iss_position.longitude).appendTo('#long');
    $('<h2>').text('latitude ' + data.iss_position.latitude).appendTo('#lat');
    setInterval(getData, 3000) //update long and later
  })
}
