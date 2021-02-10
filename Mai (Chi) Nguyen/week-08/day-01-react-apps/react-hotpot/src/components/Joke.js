import React, { Component } from 'react'
import axios from 'axios'
import _ from 'underscore'

import JokeSearchForm from './JokeSearchForm'
import JokeResult from './JokeResult'

class Joke extends Component {
  constructor() {
    super();
    this.state = {
      setup: '',
      punchline: ''
    }
    this.fetchJoke = this.fetchJoke.bind(this);
  }

  fetchJoke(jokeType) {
    const jokeURL = `https://official-joke-api.appspot.com/jokes/${jokeType}/random`;
    axios(jokeURL).then((response) => {
      this.setState({
        setup: response.data[0].setup,
        punchline: response.data[0].punchline,
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Joke of the day</h2>
        <JokeSearchForm onSubmit={this.fetchJoke} />
        <JokeResult setup={this.state.setup} punchline={this.state.punchline}/>
      </div>
    )
  }
}

export default Joke
