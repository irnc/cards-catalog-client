import index from './index.jsx';

const getData = require('./getData.js');
const render = require('./index.jsx');

const dataPromise = getData();

dataPromise.then(function (data) {
  render(data);
});