const bookSearch = function(){
  const xhr = new XMLHttpRequest();
  const search = document.getElementById('search').value;
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${search}`);
  xhr.send();
  xhr.onreadystatechange = function(){
    if(xhr.readyState !== 4) return;

    const data = JSON.parse(xhr.responseText);
    let p = document.getElementById('results');
    p.innerHTML  = "";
    for (i = 0; i < data.items.length; i++){
      p.innerHTML +=  data.items[i].volumeInfo.imageLinks.smallThumbnail;
    }
  }

};
document.getElementById('button').addEventListener('click',bookSearch,false)
