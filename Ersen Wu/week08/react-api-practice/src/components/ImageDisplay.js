import React, {Component} from 'react'

class ImageDisplay extends Component {
  render() {

    return (
      <div>
         <div>
            {<img src={ this.props.image } key={this.props.image} width="300" height="300" />}

         </div>
         <div>
            { this.props.explanation }
         </div>
      </div>
    )
  }
}

export default ImageDisplay;
