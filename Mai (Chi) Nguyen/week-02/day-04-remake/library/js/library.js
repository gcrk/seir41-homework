var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

let word = $('<ul id="list">Mai</ul>');


// console.table(books);
//
// const ul = document.createElement('ul'); // detached DOM node
//
// for (let i = 0; i < books.length; i++) {
//   const book = books[i];
//   const li = document.createElement('li');  // detached DOM node
//   li.innerHTML = `${ book.title } by ${ book.author }`;
//   ul.appendChild(li);
// }
//
// console.log(ul);
//
// document.body.appendChild(ul); // attach the DOM node
