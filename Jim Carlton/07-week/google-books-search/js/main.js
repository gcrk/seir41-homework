

//// XHR Definition and Work
// define the xhr object
// open the request to the link to retrieve the JSON data and convert it to a JS object
// write it to the xhr object

const findThumb = function () {

  const xhr = new XMLHttpRequest(); //sets the xhr object up so we can fill it with things.

  xhr.open(`GET`, `https://www.googleapis.com/books/v1/volumes?q=title:${ document.getElementById('search-input').value }`);
  xhr.send();

  xhr.onreadystatechange = function () {

    if (xhr.readyState !== 4) {
      return
    };

    const data = JSON.parse(xhr.responseText);

    // path = data.items[0].volumeInfo.imageLinks.thumbnail

    const thumb = document.getElementById('thumb');

    thumb.src = data.items[0].volumeInfo.imageLinks.thumbnail;

  };

};

document.getElementById('submit').addEventListener('click', findThumb);

//// Connect to the HTML and user behaviour
// Take input from input and listen for the event of the button click
// Run XHR function to query the URL and return result, and store it
// Print result on the screen
