const button = document.getElementById('button');
const fetchBook = function () {
  const xhr = new XMLHttpRequest();

  const searchTitle = document.getElementById('title').value;

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${searchTitle}`);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    const data = JSON.parse(xhr.responseText);
    // console.log( data );

    const title = document.createElement("h2");
    title.innerHTML = data.items[0].volumeInfo.title;
    document.body.appendChild( title );

    const img = document.createElement('img');
    img.src = data.items[0].volumeInfo.imageLinks.smallThumbnail;
    document.body.appendChild( img );
  };
};

button.addEventListener('click', fetchBook);

//create an input
//log what comes from query
