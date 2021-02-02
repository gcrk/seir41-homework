const getBookInfo = function(event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const title = document.getElementById('title').value;
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${title}`);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    const data = JSON.parse(xhr.responseText);
    const newData = data.items[0].volumeInfo;
    document.querySelector('img').src = newData.imageLinks.thumbnail;
    document.getElementById('title').innerHTML = newData.title;
    document.getElementById('author').innerHTML = (newData.authors).join(', ');
    document.getElementById('publisher').innerHTML = newData.publisher;
    document.getElementById('description').innerHTML = newData.description;
    document.querySelector('h4').hidden = false;
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.getElementById('button').addEventListener('click', getBookInfo);
  document.querySelector('form').addEventListener('submit', getBookInfo);
});
