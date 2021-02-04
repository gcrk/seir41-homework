const bookSearch = function() {
  let keyword = document.getElementById('keyword').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${keyword}`);
  xhr.send();

  xhr.onreadystatechange = function() {
    if(xhr.readyState !== 4) return;

    const info = JSON.parse (xhr.responseText);

    const pic = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    const title = info["items"][0]["volumeInfo"]['title']
    const authors = info["items"][0]["volumeInfo"]['authors'].join(', ')
    const publishedDate = info["items"][0]["volumeInfo"]['publishedDate']


    let html = '';
    html += `<img src = ${pic}>`;
    html += `<h2>${title}</h2>`;
    html += `<h4>${authors}</h4>`;
    html += `<h4>Publish Date: ${publishedDate}</h4>`;

    document.getElementById('result').innerHTML = html
  }
}

document.getElementById('find').addEventListener('click', bookSearch)
