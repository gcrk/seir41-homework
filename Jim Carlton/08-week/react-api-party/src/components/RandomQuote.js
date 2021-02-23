import React, { Component } from 'react';
import axios from 'axios';

class RandomQuote extends Component {

  constructor() {
    super();
    this.state = {
      quote: '',
      author: ''
    };
  }

  componentWillMount() {
    axios('https://quote-garden.herokuapp.com/api/v3/quotes/random?json').then((response) => {
      console.log(response);
      this.setState({
        quote: response.data.data[0].quoteText,
        author: response.data.data[0].quoteAuthor
      });
    });
  }

  render() {
    return (
      <div class="internal-container">
        <h2>Random Quote</h2>
        <p id="quote">{ this.state.quote }</p>
        <p id="author">{ this.state.author }</p>
      </div>
    );
  };

}

export default RandomQuote;
