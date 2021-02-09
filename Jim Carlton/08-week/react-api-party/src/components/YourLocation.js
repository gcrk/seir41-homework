import React, { Component } from 'react';
import axios from 'axios';

class YourLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: '',
      region: '',
      country: '',
      longitude: '',
      latitude: '',
      ip: ''
    };
  }

  componentWillMount() {
    axios('https://freegeoip.app/json/').then((response) => {
      this.setState({
       city: response.data.city,
       region: response.data.region_name,
       country: response.data.country_name,
       longitude: response.data.longitude,
       latitude: response.data.latitude,
       ip: response.data.ip
      });
    });
  }

  render() {
    return (
      <div class="internal-container">
        <h2>Your Location</h2>
        <p id="location">{ this.state.city || '' } { this.state.region || '' } { this.state.country }</p>
        <p id="longitude">{ this.state.longitude }</p>
        <p id="latitude">{ this.state.latitude }</p>
        <p id="ip">{ this.state.ip }</p>
      </div>
    );
  };

}

export default YourLocation;
