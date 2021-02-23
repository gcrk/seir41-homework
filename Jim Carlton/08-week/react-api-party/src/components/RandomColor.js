import React, { Component } from 'react';
import axios from 'axios';

class RandomColor extends Component {

  constructor() {
    super();
    this.state = {
      hex: '',
      name: ''
    }
  }

  componentWillMount() {
    axios('http://www.colr.org/json/color/random').then((response) => {
      console.log(response);
      this.setState({
        hex: response.data.new_color,
        name: response.data.colors[0].tags[0].name
      });
    });
  }

  render() {
    return (
      <div id="random-color" class="internal-container">
        <h2>Random Colour</h2>
        <p id="name">#{ this.state.hex }</p>
        <p id="hex">{ this.state.name }</p>
      </div>
    );
  };

}

export default RandomColor;
