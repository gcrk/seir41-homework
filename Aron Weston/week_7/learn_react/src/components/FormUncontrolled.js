import React, { Component } from 'react'

export class FormUncontrolled extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.firstName = React.createRef();
        this.lastName = React.createRef();
    }

    handleSubmit(event) {
        alert(`${this.firstName.current.value}`);
        console.log(this.input);
        event.preventDefault();
    }
    
    render() {
        return (
            <>
            <h3>UnControlled Input</h3>
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input type="text" ref={this.firstName} />
                </label>
                <label>
                    Last Name:
                    <input type="text" ref={this.lastName} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
            </>
        )
    }
}

export default FormUncontrolled
