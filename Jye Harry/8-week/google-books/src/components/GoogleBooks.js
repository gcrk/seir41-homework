import React, {Component} from 'react';

import Result from './Result';
import SearchForm from './SearchForm';

class GoogleBooks extends Component {
  constructor() {
    this.state = {book: {}};
  }

  fetchBook() {
    const booksURL = `https://www.googleapis.com/books/v1/volumes?q=${title}`;
  }

  render() {
    return (
      <div>
        <SearchForm/>
        <Result/>
      </div>
    );
  }
}

export default GoogleBooks;
