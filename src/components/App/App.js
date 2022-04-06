import { Component } from 'react';
import './App.css';
import Tricks from './Tricks.js';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        < Tricks/>
      </div>
    );
  }
}

export default App;