import React, { Component } from 'react';
import withAuth from './withAuth'
import logo from '../images/logo.svg';
import Login from './Login.js'
import '../css/App.css';
import '../css/Index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
