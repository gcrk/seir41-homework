import React, { Component } from 'react'

export class Button extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    handleClick () {
        // console.log(this);
        this.setState({ count: this.state.count + 1 });
    }
    
    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}>Click to log</button>
                <div>Count: { this.state.count }</div>

            </div>
        )
    }
}

export default Button
