import React, {Component} from 'react'
import axios from 'axios'

class Space extends Component {
  constructor() {
    super();
    this.state = {latitude: "",longitude: "" };
    this._fetchSpacePeople = this._fetchSpacePeople.bind(this)
  }

 _fetchSpacePeople() {
   const url = "http://api.open-notify.org/iss-now.json"
   axios(url).then((results) => {
     console.log(results.data.iss_position)
     this.setState({latitude: results.data.iss_position.latitude, longitude: results.data.iss_position.longitude})
   })
 }
  render() {
    return(
      <div>
        <button onClick={ this._fetchSpacePeople }>Search space people</button>
        <Gallery latitude={this.state.latitude} longitude={this.state.longitude}/>
      </div>
    )
  }
}

const Gallery = (props) => {
  return (
    <div>
      <p>The latitude is : {props.latitude}</p>
      <p>The longitude is : {props.longitude}</p>
    </div>
  );
}

export default Space;
