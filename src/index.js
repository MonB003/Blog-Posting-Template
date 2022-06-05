import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Create an App element from App.js and put it into the root element in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
