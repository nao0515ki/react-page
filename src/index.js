import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx';
import './index.css';
import App from './App.jsx';
import Resume from './Resume.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();