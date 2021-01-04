$(function () {

    const books = [{
            title: 'The Design of EveryDay Things',
            author: 'Don Norman',
            alreadyRead: false
        },
        {
            title: 'The Most Human Human',
            author: 'Brian Christian',
            alreadyRead: true
        },
        {
            title: 'Thinking Fast and Slow',
            author: 'Daniel Kahneman',
            alreadyRead: false
        }
    ];


    const bookList = $('<ul></ul>');

    //Equiv of a for-in loop for jQuery - pretty cool
    $.each(books, function () {
        let output = $('<li></li>').html(`Title: ${this.title}<br> Author: ${this.author}<br>Already read: ${this.alreadyRead}`).appendTo(bookList);

        //Output each book image
        if (this.author === 'Don Norman') {
            $('<img src="img/donNorman.jpg">').appendTo(bookList);
        } else if (this.author === 'Brian Christian') {
            $('<img src="img/brian.jpg">').appendTo(bookList);
        } else {
            $('<img src="img/404.jpg">').appendTo(bookList);
        }

        //Check if already read 
        if (this.alreadyRead) {
            output.css('color', 'green');
        } else {
            output.css('color', 'red');
        }

    });

    bookList.appendTo(document.body);
});