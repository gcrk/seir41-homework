import React, {Component} from 'react';

const CurrencyDisplay = (props) => {
    return (
      <p>
        Converted Amount: <span id="result">{ props.convertedAmount } { props.currency }</span>
      </p>
    );
  }

export default CurrencyDisplay;
