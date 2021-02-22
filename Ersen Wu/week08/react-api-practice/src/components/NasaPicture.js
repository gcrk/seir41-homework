import React, {Component} from 'react'
import axios from 'axios'

import ImageDisplay from './ImageDisplay'

class NasaPicture extends Component {
 constructor(){
   super();
   this.state = {
     image: [],
     explanation:''
   };
   this._fetchImage = this._fetchImage.bind(this)
 }


_fetchImage(){
    const url = "https://api.nasa.gov/planetary/apod?api_key=tbEPBL7GJQ4dQvexlJKq5jbDNTMsHD1grGmg4aDb"
    axios(url).then((response) => {
      console.log(response.data.explanation)
      const imageURL = response.data.hdurl
      const explanation = response.data.explanation
      this.setState({ image: imageURL, explanation: explanation})
    })
  }

  render() {
    return (
      <div>
        <h1>NASA picture of the day</h1>
        <button onClick={ this._fetchImage }>Show image</button>
        <ImageDisplay image={ this.state.image } explanation={ this.state.explanation } />
      </div>
    )
  }
}


export default NasaPicture
