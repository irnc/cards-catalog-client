import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} />
            <h1>{props.name}</h1>
            <ul>
                <li>Phone: {props.contacts.phone}</li>
                <li>Email: {props.contacts.email}</li>
            </ul>
        </div>
    );
}

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
