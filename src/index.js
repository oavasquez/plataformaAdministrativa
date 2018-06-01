import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
