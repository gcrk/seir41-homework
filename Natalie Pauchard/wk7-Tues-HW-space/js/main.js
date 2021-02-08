const findPeople = function () {
  $.ajax('http://api.open-notify.org/astros.json').done(function (info) {
    const people = info.people

    $('p').remove();
    for (let {name: n} of people) {

    $('<p>').text(n).appendTo('body');

    };
  });
};

$(document).ready(function () {
  $('#find').on('click', findPeople)

});
