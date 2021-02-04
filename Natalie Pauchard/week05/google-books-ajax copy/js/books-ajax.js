
console.log('test');

const getCover = function () {
  const xhr = new XMLHttpRequest();
  const booktitle = document.getElementById('booktitle').value;
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ booktitle }`)
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    const data = JSON.parse(xhr.responseText);
    console.log( data );

    const cover = data.items[0].volumeInfo.imageLinks.thumbnail
    const title = data.items[0].volumeInfo.title
    const author = data.items[0].volumeInfo.authors
    const description = data.items[0].volumeInfo.description

    document.getElementById('bookimg').src = cover
    document.getElementById('title').innerHTML = title
    document.getElementById('author').innerHTML = author
    document.getElementById('description').innerHTML = "Description: " + description

    return;
  };
};

document.getElementById('search').addEventListener('click', getCover);

getCover();
