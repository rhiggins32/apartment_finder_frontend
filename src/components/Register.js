import React, { Component } from 'react';
import '../css/Login.css';
import AuthService from '../services/AuthService';

export default class Register extends Component {
  constructor(){
    super()
    this.Auth = new AuthService();
    this.state = {
      form:{
        user: {
          first_name: '',
          last_name: '',
          email: '',
          password: ''
        }
      }
    };
  }

  handleChange(e){
    let { form } = this.state;
    form.user[e.target.name] = e.target.value;
    this.setState({ form })
  }

  handleSubmit(e){
    e.preventDefault();
    let {form} = this.state;
    this.Auth.register(form)
    .then(res => {
      this.props.history.replace('/dashboard')
    })
    .catch(err => { alert(err) });
  }

  render(){
    console.log(this.state);
    let { email, password, first_name, last_name } = this.state.form.user;
    return (
      <div className="center">
      <div className="card">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="form-item"
            placeholder="First Name:"
            name="first_name"
            type="text"
            onChange={this.handleChange.bind(this)}
            value={first_name}
            />
            <input
              className="form-item"
              placeholder="Last Name:"
              name="last_name"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={last_name}
            />
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
