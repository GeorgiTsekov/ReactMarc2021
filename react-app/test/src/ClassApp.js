import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import LearnReact from './LearnReact';
import Code from './Code';
import Counter from './Counter';

class ClassApp extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Class Component</p>
                    <Counter counter={0} />
                    <Counter counter={0} />
                    <Counter counter={10} />
                    <Counter counter={20} />
                    <p>
                        Edit
                        <Code number={this.props.number}>
                            <p>
                                src/App.js
                            </p>
                        </Code> and save to reload.
                    </p>
                    <LearnReact />
                </header>
            </div>
        )
    }
}

export default ClassApp;