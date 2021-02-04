$(document).ready(function(){
  $('#search').submit(function(e){
    e.preventDefault()//when ypu subit from, this prevents it from going to a new page!!!


    const xhr = new XMLHttpRequest();

    const inputData = $('#input_title').val()//grabing the data from iput field //.val() is getting the data as a string

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${inputData}`);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return

      const data = JSON.parse(xhr.responseText)//data from the API
      console.log(data)
      $('#title').text(data['items'][0]['volumeInfo']['title']) //grab this element with #title and then .text is to set the text of this element
      $('#image').attr('src',data['items'][0]['volumeInfo']['imageLinks']['thumbnail'])
      //.attr has two args..first arg specifies the attribute type (source)
      $('#author').text(data['items'][0]['volumeInfo']['authors'])
    };
  })
})

// need an input
// console.log the data to see what comes back
// jquery to grab the text from trhe form
//then insert usin interpolation into the API
