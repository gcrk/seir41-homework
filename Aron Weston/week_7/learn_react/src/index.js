import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const _ = require('lodash');
console.log("Lodash Version:", _.VERSION);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
