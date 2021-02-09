import React, { Component } from 'react'

 
export class Counter extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            count: 0
        }
        this.addCount = this.addCount.bind(this);
    }

    addCount () {
        this.setState((state, props) => ({
            count: state.count + props.increment
        }))    
    }

    render() {
        return (
            <div>
                
                <div>Current count: {this.state.count}</div>
                <button onClick={this.addCount}>Add</button>
            </div>
        )
    }
}

export default Counter;
