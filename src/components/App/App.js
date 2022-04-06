import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import Tricks from './Tricks.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  fetchTricks = () => {
    fetch('http://localhost:3001/api/v1/tricks')
    .then(response => response.json())
    .then(data => {
      this.setState({ tricks: data });
    })
    .catch(error => console.log(error));
  }

  componentDidMount = () => {
    this.fetchTricks();
  }

  addTrick = (newTrick) => {
    console.log(newTrick);
    this.setState({ tricks: [...this.state.tricks, newTrick] })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;