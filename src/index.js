/*
import index from './index.jsx';

const getData = require('./getData.js');
const render = require('./index.jsx');

const dataPromise = getData();

dataPromise.then(function (data) {
  render(data);
});
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const getData = require('./getData.js');

const dataPromise = getData();

dataPromise.then(function (data) {
  render(data);
});

function render (cards) {
  ReactDOM.render(
  <App cards={cards} />,
  document.getElementById('root')
);}
