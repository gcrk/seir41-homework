

const librarySearch = function () { // anonymous function? If that's what a function without arguments is called...
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:Ulysses?json'); // start with hardcoded link
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    const data = JSON.parse(xhr.responseText);
    const picture = data.items[2].volumeInfo.imageLinks.thumbnail

    const img = document.createElement('img')
    img.src = picture;
    document.body.appendChild( img );


    console.log(picture);
  }
};

librarySearch();
