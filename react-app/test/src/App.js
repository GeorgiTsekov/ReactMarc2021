import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import LearnReact from './LearnReact';
import Code from './Code';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Functional Component</p>
        <p>{props.name}</p>
        <p>
          Edit
          <Code number={props.number}>
            <p>
              src/App.js
            </p>
          </Code> and save to reload.
        </p>
        <LearnReact />
      </header>
    </div>
  );
}

export default App;
