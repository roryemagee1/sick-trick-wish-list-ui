import { Component } from 'react';
import './App.css';
import Tricks from './Tricks.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({tricks: data});
        console.log(this.state)
      })
      .catch(error => console.log(error))
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