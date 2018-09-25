import React, { Component } from 'react';
import '../css/Login.css';
import AuthService from '../services/AuthService';

export default class Login extends Component {
  constructor(){
    super()
    this.Auth = new AuthService();
    this.state = {
      errors: [],
      email: '',
      password: ''
    };
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    let {email, password} = this.state;
    this.Auth.login(email, password)
    .then(res => {
      this.props.history.replace('/dashboard')
    })
    .catch(err => {
      console.log(err);
      //this.setState({errors: err})
      alert(err)
    });
  }

  render(){
    let {email, password} = this.state;
    return (
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              className="form-item"
              placeholder="Email:"
              name="email"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={email}
            />
            <input
              className="form-item"
              placeholder="Password:"
              name="password"
              type="password"
              onChange={this.handleChange.bind(this)}
              value={password}
            />
            <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
          </form>
        </div>
        {this.state.errors && <h1>{this.state.errors}</h1>}
      </div>
    )
  }
}
