import React, { Component } from 'react';

const Cover = (props) => {
  return (
    <div>
      <img key={ props.cover } src={ props.cover } />
    </div>
  );
};

export default Cover;
