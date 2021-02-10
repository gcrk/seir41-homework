import React, { Component } from 'react'

const JokeResult = (props) => {
  return(
    <div>
      <h3>{props.setup}</h3>
      <p>{props.punchline}</p>
    </div>
  )
}

export default JokeResult
