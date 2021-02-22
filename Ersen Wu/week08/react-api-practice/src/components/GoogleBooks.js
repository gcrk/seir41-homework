import React, {Component} from 'react'
import axios from 'axios'
import _ from 'underscore'

import SearchForm from './SearchForm'
import BookInfo from './BookInfo'

class GoogleBooks extends Component {
  constructor() {
    super();
    this.state = { image: [], author:''};
    this.fetchBook = this.fetchBook.bind(this);
  }

  fetchBook(title){

  const bookURL = `https://www.googleapis.com/books/v1/volumes?q=title:${title}`

  axios(bookURL).then((response) => {

  console.log(response.data)
  const imageURL = response.data.items[0].volumeInfo.imageLinks.thumbnail;
  const author = response.data.items[0].volumeInfo.authors[0];
  this.setState({image: imageURL, author:author})


  });
}

  render() {
    return (
      <div>
         <h1>Google Books</h1>
         <SearchForm onSubmit={this.fetchBook}/>
         <BookInfo image={ this.state.image } author={ this.state.author } />
         
     </div>
    )
  }
}

export default GoogleBooks;
