import React, { Component } from "react"
import styles from './counter-label.module.css'
import AuthContext from "./context"

class CounterLabel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: props.counter
        }
    }

    static contextType = AuthContext

    static getDerivedStateFromProps(props) {
        return {
            counter: props.counter
        }
    }
    render() {
        return (
            <span className={styles.wrapper}>
                Counter {this.context ? "Auth" : ""} : {this.state.counter}
            </span>
        )
    }
}

export default CounterLabel