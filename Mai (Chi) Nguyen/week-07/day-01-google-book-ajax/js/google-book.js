const fetchBook = function () {
  const xhr = new XMLHttpRequest();
  const name = document.getElementById('user-input').value;
  console.log(name);
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${name}`);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    const info = JSON.parse(xhr.responseText);

    const image = info.items[0].volumeInfo.imageLinks.thumbnail;
    document.getElementById('image').setAttribute('src', image);

    const title = info.items[0].volumeInfo.title;
    document.getElementById('title').innerHTML = `Title: ${title}`;

    const authors = info.items[0].volumeInfo.authors.join(', ');
    document.getElementById('authors').innerHTML = `Authors: ${authors}`;

    const description = info.items[0].volumeInfo.description;
    document.getElementById('description').innerHTML =  `Description: ${description}`;
  }
}

document.getElementById('fetch').addEventListener('click', fetchBook);
