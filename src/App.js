import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

var cards = [
    {
        name: "name1",
        contacts: {
            phone: "ph1",
            email: "em1"
        }
    },
    {
        name: "name2",
        contacts: {
            phone: "ph2",
            email: "em2"
        }
    },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to bad solutions</h2>
        </div>
        <p className="App-intro">
          {
              cards.map ((card) => {
                  return <Card name={card.name} contacts={card.contacts} />
              })
          }
        </p>
      </div>
    );
  }
}

export default App;
