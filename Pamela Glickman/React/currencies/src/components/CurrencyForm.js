import React, {Component} from 'react';

class CurrencyForm extends Component {
  constructor() {
    super();
    this.state = {
      base: "RUB",
      amount: 100,
      target: "AUD"
    };
    this._collectBase = this._collectBase.bind(this);
    this._collectAmount = this._collectAmount.bind(this);
    this._collectTarget = this._collectTarget.bind(this);
    this._submitCurrencyData = this._submitCurrencyData.bind(this);
  }

  _collectBase(event) {
    this.setState({base: event.target.value});
  };

  _collectAmount(event) {
    this.setState({amount: event.target.value});
  };

  _collectTarget(event) {
    this.setState({target: event.target.value});
  };

  _submitCurrencyData(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.base, this.state.amount, this.state.target );
  }

  render() {
    return (
      <form onSubmit={ this._submitCurrencyData}>
        <label for="base"> Enter a Base Currency: </label>
        <input id="base" name="base" placeholder="RUB" pattern="[A-Z]{3}" required onInput={ this._collectBase }/>

        <label for="amount"> Enter an Amount: </label>
        <input id="amount" type="number" name="amount" placeholder="100" required onInput={ this._collectAmount }/>

        <label for="target"> Convert to: </label>
        <input id="target" name="target" placeholder="AUD" pattern="[A-Z]{3}" required onInput={ this._collectTarget }/>

        <button>Submit</button>
      </form>
    );
  }
}

export default CurrencyForm;
