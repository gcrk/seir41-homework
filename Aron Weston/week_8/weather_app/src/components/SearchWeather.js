import React, { Component } from 'react'

export class SearchWeather extends Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
        this._updateQuery = this._updateQuery.bind(this)
        this._submitQuery = this._submitQuery.bind(this)
    }
   
    _updateQuery(e) {
        console.log(e.target.value);
        this.setState({query: e.target.value})
    }
  
    _submitQuery(e) {
        e.preventDefault()
        console.log(this.state.query);
        this.props.onSubmit(this.state.query);
    }

    render() {
        return (
            <form onSubmit={this._submitQuery}>
                <input type="text" onChange={this._updateQuery} placeholder="Search for weather" required />
                <button className="button">Search Weather {this.state.query}</button>
            </form>
        )
    }
}

export default SearchWeather
