const fetchBook = function() {

   document.getElementById('bookInfo').innerHTML = null;

   let title = document.getElementById("title").value;

   const xhr = new XMLHttpRequest();
   xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
   xhr.send(); //ashynchronous

   xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return; //exit the function,


    const data = JSON.parse(xhr.responseText); //convert JSON



  book_cover_url = data.items[0].volumeInfo.imageLinks.thumbnail;
  const img = document.createElement('IMG');
  img.src = book_cover_url;
  document.getElementById('bookInfo').appendChild(img);

  book_author = data.items[0].volumeInfo.authors
  const p1 = document.createElement('p');
  p1.innerHTML = `Author: ${book_author}`;
  document.getElementById('bookInfo').appendChild(p1);

  book_description = data.items[0].volumeInfo.description
  const p2 = document.createElement('p');
  p2.innerHTML =`Book description: ${book_description}`;
  document.getElementById('bookInfo').appendChild(p2);

  };
};


document.getElementById('fetch').addEventListener('click', fetchBook);







//display result in the random
//add a button
