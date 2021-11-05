import React, { Component } from "react";
import CounterLabel from "./CounterLabel";
import styles from './counter.module.css'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: props.counter
        }
    }

    updateCounter = () => {
        const { counter } = this.state

        this.setState({
            counter: counter + 1
        })
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <CounterLabel counter={this.state.counter} />
                <button onClick={this.updateCounter}>Click me</button>
            </div>
        )
    }
}

export default Counter