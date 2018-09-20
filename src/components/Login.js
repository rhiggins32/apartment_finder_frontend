import React, { Component } from 'react';
import '../css/Login.css';

export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    let {email, password} = this.state;
    return (
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form>
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
      </div>
    )
  }
}
