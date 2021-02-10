const showAstronauts = function () {
    $.ajax('http://api.open-notify.org/astros.json').done(function (info) {
      //$('<p>').text(info.people[0].name).appendTo('body'); previous 
      const people = info.people;
      for (let {name:n} of people) {
          $('<p>').text(n).appendTo('body');
        };        
    });
  };
  
  $(document).ready(function () {
    $('#show').one('click', showAstronauts);
  });