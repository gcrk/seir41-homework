import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        //Set the value of the form input to the value when the value is changed through the onChange event handler
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit(event) {
        alert(`${this.state.name}`);
        event.preventDefault();
    }
    
    render() {
        return (
            <>
            <h3>Controlled Input</h3>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
            </>
        )
    }
}

export default Form
