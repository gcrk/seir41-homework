import React from 'react'

export default class Clock extends React.Component {
    //Order of the Component Life Cycle
    //1. <Clock> is passed to the ReactDom.Render() method,
    //2. Calls the constructor of the clock to initaitalise any data that is needed before the component is mounted ie, state. 
    //3. Then the render() method is called and the JSX is output to the DOM
    //4. Then the componentDidMount() method is called and inside, the the tick() function is called every second wil ultimately, sets the new state of state.date to a new Date object each time it's called. The setState() method is tied to the render() method and it is called again
    //5. If the component is ever removed, the componentWillUnmount() stops the timer and prevents a memory leak. 
    
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    //The action that is run once the component has been mounted, or is confirmed rendered in the DOM
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }

    //Will clear out any functions/actions running before the component will be unmounted from the DOM
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return ( 
            <>
            <div > It is {
                this.state.date.toLocaleTimeString()
                } </div>
            </>
        )
    }
}