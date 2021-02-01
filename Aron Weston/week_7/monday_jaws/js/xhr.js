const output = document.getElementById('output');
const grid = document.querySelector('.book-grid');

const fetchData = (e) => {
    e.preventDefault();
    //Get form input
    const title = document.getElementById('title').value;

    //Instantiate the new AJAX request through XHR object
    const xhr = new XMLHttpRequest();

    //Open a XHR/AJAX get request with the input set to lowercase to avoid string issues.
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title.toLowerCase()}`, true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) return;
        
        //Get JSON object
        const res = JSON.parse(xhr.responseText);    
        
        //Get all books in the items array
        const allBooks = res.items;

        //Remove the previous books
        const children = Array.from(grid.children);
        children.forEach(child => child.remove());

        //Create a grid of book
        allBooks.forEach(book => {
            //The volume info for each book, all the data that we care about
            const info = book.volumeInfo;
            
            //Create an article for the flexbox grid with the all the info we care about, then append that to the grid.
            const article = document.createElement("article");
            article.className = "book-card";
            article.innerHTML += ` 
            <a href="${info.previewLink}" target="_blank"> 
                <img class="post-image" src="${info.imageLinks.thumbnail}" alt="">
                <div class="post-content">
                    <h2>${info.title}</h2>
                    <h3>${info.authors === undefined ? "" : info.authors}</h3>
                    <p>${ info.description === undefined ? "" : info.description} </p>
                    <p>${ info.publisher === undefined ? "" : info.publisher}</p>
                </div>
            </a>`
            grid.appendChild(article);
        })
    };
    xhr.send();
}

document.getElementById('get-books').addEventListener('submit', fetchData);
