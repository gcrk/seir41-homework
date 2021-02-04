const fetchBreeds = () => {
    $.ajax('https://dog.ceo/api/breeds/list/all').done((info) => {
      const select = $('#breeds');
      Object.keys(info.message).forEach( (breed) => {
          select.append(`<option value=${breed}>${breed}</option>`);
      })
    });
  };
  
  $(document).ready(() => {
    console.log('Hello Cruel World!')
    fetchBreeds()

    $('#searchButton').click(() => {
        const breedValue = $('#breeds').val() 
        $.ajax(`https://dog.ceo/api/breed/${breedValue}/images/random`).done((info) => {
            const image = $('<img>')
            image.attr('src', info.message);
            image.appendTo('body')
        })
    })
} )