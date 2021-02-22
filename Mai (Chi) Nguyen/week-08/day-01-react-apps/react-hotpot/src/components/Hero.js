import React, {Component} from 'react'
import axios from 'axios'
import _ from 'underscore'

import HeroSearchForm from './HeroSearchForm'
import HeroResult from './HeroResult'

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      height: '',
      weight: '',
      biography: '',
      powerstats: '',
      workBase: '',
      occupation: '',
      image: '',
    }
    this.fetchHero = this.fetchHero.bind(this);
  }

  fetchHero(searchTerm) {
    const heroURL = `https://www.superheroapi.com/api.php/407912813631521/search/${searchTerm}`;
    axios(heroURL).then((info) => {
      console.log(info.data.results[0]);
      const results = info.data.results;
      const name = info.data.results[0].name;
      // const height = info.data.results[0].appearance.height[1];
      // const weight = info.data.results[0].appearance.weight[1];
      // const biography = info.data.results[0].biography;
      // const powerstats = info.data.results[0].powerstats;
      // const workBase = info.data.results[0].work.base;
      // const occupation = info.data.results[0].work.occupation;
      const image = info.data.results[0].image.url;
      this.setState({
        name: name,
        // height: height,
        // weight: weight,
        // biography: biography,
        // powerstats: powerstats,
        // workBase: workBase,
        // occupation: occupation,
        image: image,
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Hero or Villain</h2>
        <HeroSearchForm onSubmit={this.fetchHero}/>
        <HeroResult name={this.state.name} image={this.state.image}/>
      </div>
    )
  }
}

export default Hero
