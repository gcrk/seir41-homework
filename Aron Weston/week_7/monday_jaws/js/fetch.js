const output = document.getElementById('output');
const grid = document.querySelector('.book-grid');

const fetchData = (e) => {
    e.preventDefault();
    //Get form input
    const title = document.getElementById('title').value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=title:${title.toLowerCase()}`)
        .then(data => data.json()) //fetch returns a promise that is handled with .then(). In the first promise handler, we set the data returned to json so we can play around with it.
        .then(res => { // second promise handler, we assign the json data the variable name of res and the same code applies.
            //Get all books in the items array
            const allBooks = res.items;

            //Remove the previous books
            const children = Array.from(grid.children);
            children.forEach(child => child.remove());

            //Create a grid of book
            allBooks.forEach(book => {
                const info = book.volumeInfo;

                const article = document.createElement("article");

                article.className = "book-card";

                article.innerHTML += ` 
                <a href="${info.previewLink}" target="_blank"> 
                    <img class="post-image" src="${info.imageLinks.thumbnail}" alt="">
                    <div class="post-content">
                        <h2>${info.title}</h2>
                        <h3>${info.authors === undefined ? "" : info.authors}</h3>
                        <p>${info.description === undefined ? "" : info.description} </p>
                        <p>${info.publisher === undefined ? "" : info.publisher}</p>
                    </div>
                </a>`
                grid.appendChild(article);
            });

        }).catch(err => console.error(err)); //catch the error that is thrown if any

}

document.getElementById('get-books').addEventListener('submit', fetchData);





           