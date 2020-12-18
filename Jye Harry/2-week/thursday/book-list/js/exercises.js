// ## The Book List
//
// Keep track of which books you read and which books you want to read!
//
// - Create a webpage with an h1 of "My Book List".
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Copy this array of books:
// ```javascript
var books = [{
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false,
    url: "https://productdork.com/uploads/default/original/1X/ddbda1150301e89cdf0119d84f2a7fb8930beffb.png"
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    url: "https://www.penguin.co.uk/content/dam/prh/books/182/182458/9780141971551.jpg.transform/PRHDesktopWide_small/image.jpg"
  }
];

// ```
// - Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// - Bonus: Use a ul and li to display the books.
// - Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// - Bonus: Change the style of the book depending on whether you have read it or not.

const ul = $("<ul>");

books.forEach((book) => {
  const li = $("<li>").append(`<img src="${book.url}" width="100px">`);
  li.append(`${book.title} by ${book.author}`);

  book.alreadyRead ? li.css("color", "green") : li.css("color", "red");

  ul.append(li);
});

$("body").append(ul);
