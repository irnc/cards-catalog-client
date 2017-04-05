import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './containers/Cards';

const getData = require('./getData.js');

const dataPromise = getData();

dataPromise.then(function (data) {
  //render(data);
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to bad solutions</h2>
        </div>
        <p className="App-intro"> 
            <Cards cards={this.state.cards} />
        </p>
      </div>
    );
  }
}

export default App;
