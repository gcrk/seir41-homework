import React, { Component } from 'react'

export class Numbers extends Component {
    constructor(props) {
        super(props)
        this.numbers = props.numbers;
        this.listNumbers = this.numbers.map((number) => {
            //In this case you can just set the new array element to a string as the ID, but it's generally best practice to just have something unique. 
            return <li key={number.toString()}>{ number }</li>
        })
    }

    render() {
        return (
            <ul>{this.listNumbers}</ul>
        )
    }
}

export default Numbers;
