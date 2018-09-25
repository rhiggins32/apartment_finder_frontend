import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import withAuth from './withAuth';
import AuthService from '../services/AuthService';
import Header from './Header';

const Auth = new AuthService();

class App extends Component {

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default withAuth(App);
