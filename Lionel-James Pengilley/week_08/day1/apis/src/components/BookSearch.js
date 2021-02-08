import React, { Component } from 'react';
import axios from 'axios';
import _ from 'underscore';

import SearchForm from './SearchForm';
import BookInfo from './BookInfo';

class BookSearch extends Component {
  constructor() {
    super();
    this.state = { cover: [] };
    this.fetchCovers = this.fetchCovers.bind(this);
  }

  fetchCovers(terms) {
    const bookURL = "https://www.googleapis.com/books/v1/volumes?q=title:" + terms;

    const bookParams = {
      method: 'get',
      format: 'json'
    };


    axios(bookURL, { params: bookParams }).then((response) => {
      const coverURL = _(response.data.items[0].volumeInfo.imageLinks.thumbnail);
      this.setState({cover: coverURL});
      console.log(coverURL);
    });
  }

  render () {
    return (
      <div>
        <h1> Book search </h1>
        <SearchForm onSubmit={ this.fetchCovers}/>
        <BookInfo cover={ this.state.cover }/>
      </div>
    );
  }
}

export default BookSearch;
