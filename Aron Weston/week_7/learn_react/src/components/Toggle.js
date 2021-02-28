import React, { Component } from 'react'

export class Toggle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            toggle: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            toggle: state.toggle === false
        }))
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>
                    { this.state.toggle ? "ON" : "OFF" }
                </button>
            </>
        )
    }
}

export default Toggle