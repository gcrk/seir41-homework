import React, { Component } from 'react'

export class InstaSearch extends Component {
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
                <input type="text" onChange={this._updateQuery} placeholder="Insert username" required />
                <button className="button">Get Data</button>
            </form>
        )
    }
}

export default InstaSearch
