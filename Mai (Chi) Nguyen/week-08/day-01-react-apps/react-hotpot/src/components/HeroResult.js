import React, {Component} from 'react'

const HeroResult = (props) => {
  return(
    <div>
      <h3>{props.name}</h3>
      <img src={props.image}/>
    </div>
  )
}

export default HeroResult
