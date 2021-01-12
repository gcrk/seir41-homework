console.log('yes', $.fn.jquery); /// check main.js & jquery.js

var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

$('body').append('<ul id="list"></ul>');

for (let i = 0; i < books.length; i++) {
  $(`<li>${ books[i].title } by ${ books[i].author }</li>`).appendTo('#list');

  if (books[i].alreadyRead) {
    $('li').eq(i).addClass('read');
  };
}




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
