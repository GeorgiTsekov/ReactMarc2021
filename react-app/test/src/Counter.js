import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: props.counter,
            example: "Example"
        }
    }

    updateCounter = () => {
        this.setState({
            counter: this.state.counter + 1,
            example: `${this.state.example}X`
        })
    }

    render() {
        return (
            <div>
                {this.state.example} Counter: {this.state.counter}
                <button onClick={this.updateCounter}>Click me</button>
            </div>
        )
    }
}

export default Counter