import React, { Component } from 'react';
import '../css/Login.css'

class Login extends Component {
  constructor(){
    super()
    this.state={
      email:'',
      password:''
    }
  }
    handleChange(e){
      this.setState({ [e.target.name]: e.target.value})
    }

    render(){
      return(
        <div className="center">
          <div className="card">
            <h1>Login</h1>
            <form>
              <input
              className="form-item"
              placeholder="email goes here..."
              name="email"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.email}
              />
              <input
                classname="form-item"
                placeholder="Password goes here.."
                name="password"
                type="password"
                onChange={this.handleChange.bind(this)}
                value={this.state.password}
              />
              <input
                className="form-submit"
                value="SUBMIT"
                type="submit"
              />
            </form>
        </div>
      </div>
    );
  }
}

export default Login;
