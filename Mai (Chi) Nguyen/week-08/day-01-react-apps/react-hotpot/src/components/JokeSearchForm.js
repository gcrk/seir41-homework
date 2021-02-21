import React, { Component } from 'react'
import axios from 'axios'
import _ from 'underscore'

class JokeSearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: 'programming'
    }
    //TODO: change the hard coding query
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({query: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.query);
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <form onInput={this._handleInput} onSubmit={this._handleSubmit}>
        <input type='radio' name='joke' id='jokeChoiceProgramming' value='programming' defaultChecked autoFocus required/>
        <label htmlFor="jokeChoiceProgramming">Programming</label>
        <input type='radio' name='joke' id='jokeChoiceGeneral' value='general'/>
        <label htmlFor="jokeChoiceGeneral">General</label>
        <button>Get some fun!</button>
      </form>
    )
  }
}

export default JokeSearchForm
