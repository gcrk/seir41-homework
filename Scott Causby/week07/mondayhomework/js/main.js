$(document).ready(function(){
    $('#search').submit(function(e){
      e.preventDefault()
      const xhr = new XMLHttpRequest();
      const inputData = $('#input_title').val()/
      xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${inputData}`);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return
        const data = JSON.parse(xhr.responseText)
        console.log(data)
        $('#title').text(data['items'][0]['volumeInfo']['title'])
        $('#image').attr('src',data['items'][0]['volumeInfo']['imageLinks']['thumbnail'])
        $('#author').text(data['items'][0]['volumeInfo']['authors'])
      };
    })
  })