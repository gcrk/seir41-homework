const output = document.getElementById('output');
const grid = document.querySelector('.book-grid');

//Make the fetch function async, through the async keyword. This will turn this function into an asynchronous function, meaning that no other process on the app will seize when it's called. Then the data fetch request is "awaiting" the execution of the function. The result of the data variable is the same as what is returned through resolve in a promise. 

//The reason we want to use Async/Await is that once the browser reaches the await fetch request, it will perform all other actions and return to the fetch request when the data is successfully loaded.

//We can then handle errors through a try/catch block, which basically tells the browser to attempt the code and gives it an opportunity to tell us what and where something went wrong.  

const fetchData = async (e) => {
    e.preventDefault();
    try {
        //Get the title of the book
        const title = document.getElementById('title').value;

        //Use the await keyword to pause the request for both a readystatechange 4 and 200 status from the server
        const data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=title:${title.toLowerCase()}`);

        //Use await again to pause until the previous data is fully loaded before compiling into json
        const res = await data.json();

        //You could return this data and use it around your app, but in this context, we'll pass it into the buildBooks function to output some books to the library. 
        buildBooks(res);
    } catch (err) {
        console.error(err);
    }
}


const buildBooks = (res) => {
    
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
    })
}

document.getElementById('get-books').addEventListener('submit', fetchData);