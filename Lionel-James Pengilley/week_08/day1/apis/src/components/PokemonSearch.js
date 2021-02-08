import React, { Component } from 'react';
import axios from 'axios';
import _ from 'underscore';

import PokemonSearchForm from './PokemonSearchForm';
import PokemonGallery from './PokemonGallery';

class PokemonSearch extends Component {
  constructor() {
    super();
    this.state = { sprite: [] };
    this.fetchSprites = this.fetchSprites.bind(this);
  }

  fetchSprites(terms) {
    const pokemonURL = "https://pokeapi.co/api/v2/pokemon/" + terms;

    const pokemonParams = {
      method: 'get',
      format: 'json'
    };

    axios(pokemonURL, { params: pokemonParams }).then((response) => {
      const spriteURL = _(response.data.sprites.front_default);
      this.setState({sprite: spriteURL});
      console.log(spriteURL);
    });
  }


  render() {
    return (
      <div>
        <h1> Pokemon Search </h1>
        <PokemonSearchForm onSubmit={ this.fetchSprites}/>
        <PokemonGallery sprite={ this.state.sprite }/>
      </div>
    );
  }
}

export default PokemonSearch;
