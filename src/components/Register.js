import React, { Component } from 'react';
import { Redirect,Link } from 'react-router-dom'
import AuthService from '../services/AuthService'
import '../css/Login.css';


class RegisterPage extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
    this.state = {
      registeredSuccess: false,
      errors: "",
      form: {
              user: {
                      first_name: "test",
                      last_name: "test1",
                      email: "test@example.com",
                      password: "123134",
              }
      }
    }
  }
  render(){
    let {first_name, last_name, email, password} = this.state.form.user
    return (
      <div className="center">
        <div className="card">

        <h2> Welcome! Register here:</h2>
        <form onSubmit={this.onSubmit}>
            <input
              className="form-item"
              type="text"
              name="first_name"
              value={first_name}
            onChange={this.onChange}
            />
            <input
            className="form-item"
						type="text"
						name="last_name"
						value={last_name}
						onChange={this.onChange}
					/>
            <input
              className="form-item"
              type="email"
              name="email"
              value={email}
              onChange={this.onChange}
            />
            {this.state.errors.email && <div> Error: Email {this.state.errors.email[0]}</div>}
            <input
              className="form-item"
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              />
              {this.state.errors.password && <div>Error: Password {this.state.errors.password[0]}</div>}
              <button className="form-submit" onSubmit={this.onSubmit}>Register</button>
        </form>
        {this.state.registerSuccess && <Redirect to="/protected" />}

         </div>
        </div>
    )
  }

  onChange = (e) => {
      let { form } = this.state
      form.user[e.target.name] = e.target.value
      this.setState({ form })
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.auth.register(this.state.form)
    .then(json => {
            console.log("Got to second then:", json)
            if(json.errors) {
              this.setState({
                errors: json.errors
              })
            }
            this.setState({
                registerSuccess: true
            })
      })
  }
}

export default RegisterPage
