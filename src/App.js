import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector'
import Circles from './components/Circles/Circles'

class App extends Component {
  constructor() {
    super()
    this.state = {
      circle1: true,
      circle2: false,
      circle3: false,
      circle4: false,
    }
  }
  handleCricle = (e) => {
    // e.preventDefault()
    console.log("e", e);
    console.log("e", e.target);
    console.log("e", e.target.value);
    this.setState({
      circle1: false,
      circle2: false,
      circle3: false,
      circle4: false,
      [e.target.value]: true
    })
    console.log("Circles2", this.state.circle2);
    console.log("Circles1", this.state.circle1);

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            handleCricle={this.handleCricle}
            circle1={this.state.circle1}
            circle2={this.state.circle2}
            circle3={this.state.circle3}
            circle4={this.state.circle4}
          />
          <Circles
            circle1={this.state.circle1}
            circle2={this.state.circle2}
            circle3={this.state.circle3}
            circle4={this.state.circle4} />
        </main>
      </div>
    );
  }
}

export default App;