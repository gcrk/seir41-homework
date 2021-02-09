import React, { Component } from 'react';
import axios from 'axios';

import CurrencyForm from './CurrencyForm';
import CurrencyDisplay from './CurrencyDisplay';

class CurrencyConverter extends Component {
  constructor() {
    super();
    this.state = { convertedAmount: null, currency: null };
    this.convertCurrency = this.convertCurrency.bind(this);
  }

  convertCurrency(base, amount, target) {
    //const host = 'api.frankfurter.app';
    axios(`https://api.frankfurter.app/latest?amount=${amount}&from=${base}&to=${target}`).then((results) => {
      const convertedAmount = Object.values(results.data.rates)[0];
      this.setState({convertedAmount: convertedAmount});
      this.setState({currency: target})
    });
  }

  render() {
    return (
      <div>
        <h1>Currency Converter</h1>
        <CurrencyForm onSubmit={ this.convertCurrency }/>
        <CurrencyDisplay convertedAmount={this.state.convertedAmount} currency={ this.state.currency } />
      </div>
    )
  }
}

export default CurrencyConverter;
