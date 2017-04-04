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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
