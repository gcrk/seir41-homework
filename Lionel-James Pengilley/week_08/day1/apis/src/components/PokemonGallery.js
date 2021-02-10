import React, { Component } from 'react';

const Sprite = (props) => {
  return (
    <div>
      <img key={ props.sprite } src={ props.sprite } />
    </div>
  );
};

export default Sprite;
