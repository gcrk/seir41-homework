import React, { Component } from 'react';
import axios from 'axios';
import _ from 'underscore';
import 'bootstrap/dist/css/bootstrap.css';

import SearchForm from './SearchForm';
import Results from './Results'

class ForcebookSearch extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
    this.fetchScum = this.fetchScum.bind(this);
  }

  fetchScum(query) {
    const starWarsURL = 'https://swapi.dev/api/people/';
    const swapiParams = {
      search: query
    };

    axios(starWarsURL, {params: swapiParams}).then((response) => { console.log(response.data);
      const searchResult = response.data.results
        this.setState({results: searchResult});
    });
  }

  render() {
    return (
      <div>
        <h1>Forcebook Search</h1>
        <SearchForm onSubmit={this.fetchScum} />
        <Results results={this.state.results} />
      </div>
    )
  }
}

export default ForcebookSearch
