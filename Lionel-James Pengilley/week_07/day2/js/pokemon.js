const fetchPokemonInfo = function () {
  event.preventDefault();

  // Search app
  // const name = $('#pokemon').val();
  // const url = `https://pokeapi.co/api/v2/pokemon/${ name }`;
  //
  // $.ajax(url).done(function (info) {
  //
  //   $('<h1>').text(info.name).appendTo('body');
  //   let pokeImg = $('<img id="sprites">')
  //   pokeImg.attr('src', info.sprites.front_default);
  //   pokeImg.appendTo('body');
  //   $('<p>').text(info.types[0].type.name).appendTo('body');
  // });

  const url = `https://pokeapi.co/api/v2/pokemon`;

  $.ajax(url).done(function (info) {
    for (i = 0; i < info.results.length; i++) {
      const pokemonUrl = info.results[i].url
      $.ajax(pokemonUrl).done(function (info2) {
        $('<p>').text(info2.name).appendTo('body');
        let pokeImg = $('<img id="sprites">');
        pokeImg.attr('src', info2.sprites.front_default);
        pokeImg.appendTo('body');
      });
    };
  });



  
};

$(document).ready(function (){
  $('#fetch').on('click', fetchPokemonInfo);
});
