import React, {Component} from 'react'

class HeroSearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({query: event.target.value})
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.query)
    this.props.onSubmit(this.state.query)
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input type="search" onInput={this._handleInput}/>
        <button>Search {this.state.query}</button>
      </form>
    )
  }
}

export default HeroSearchForm
