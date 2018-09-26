import React, { Component } from 'react';
import AuthService from '../services/AuthService';
// import { BrowserRouter } from 'react-router-dom'
export default class Header extends Component {
  constructor(props){
    super(props);
      this.Auth = new AuthService();
      this.state = {
      }
    }
  handleLogout(){
    this.Auth.logout();
    this.props.history.replace('/login');
  }
  handleLogin(){
    this.props.history.replace('/login');
  }
  handleRegister(){
    this.props.history.replace('/register');
  }
  render(){
    return (
      <nav className="nav-bar">
        {!this.Auth.loggedIn() && <button type="button" className="form-submit" onClick={this.handleLogin.bind(this)}>Login</button>}
        {this.Auth.loggedIn() && <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>}
        {!this.Auth.loggedIn() && <button type="button" className="form-submit" onClick={this.handleRegister.bind(this)}>Register</button>}
      </nav>
    )
  }
}
