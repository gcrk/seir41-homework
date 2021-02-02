const fetchBook = function () {
    //get title from search and new url
    const xhr = new XMLHttpRequest();
    const name = document.getElementById('fetch').value;
    let url = `https://www.googleapis.com/books/v1/volumes?q=title:${ name }`;
    //Get info url
    xhr.open('GET', url);
    xhr.send();

    // information is available
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4 ) {
        return;
      };

      // create page elements
      const title = document.createElement('h');
      const img = document.createElement('img')

      //grab correct data and send to page element
      const data = JSON.parse( xhr.responseText)
      title.innerHTML = data.items[0].volumeInfo.title;
      img.src = data.items[0].volumeInfo.imageLinks.thumbnail;

      document.body.appendChild(title);
      document.body.appendChild(img);

    };
  };

document.getElementById('submit', function (){ addEventListener('click', fetchBook);
});
