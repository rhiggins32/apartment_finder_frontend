import React, { Component } from 'react';
import '../css/Login.css';
import AuthService from '../services/AuthService';
import withAuth from '../components/withAuth';
import { editApartment } from '../services/apartments_api';

class Edit extends Component {
  constructor(){
    super()
    this.Auth = new AuthService();
    this.state = {
      userId: this.Auth.getUserId(),
      form:{
        apartment: {
          user_id: this.Auth.getUserId(),
          address_1: '',
          address_2: '',
          city: '',
          state: '',
          postal_code: '',
          country: '',
          building_manager_name: '',
          building_manager_phone: '',
          building_manager_hours: ''
        }
      }
    };
  }

  componentWillMount(){
    let { form } = this.state;
    //let apartment = form.apartment;
    let apartment_data = this.props.history.location.state.apartment;
    form.apartment = apartment_data;
    this.setState({form});
  }

  handleChange(e){
    let { form } = this.state;
    form.apartment[e.target.name] = e.target.value;
    this.setState({ form })
  }

  handleSubmit(e){
    e.preventDefault();
    let {form} = this.state;
    editApartment(form.apartment)
    .then(res => {
      this.props.history.replace('/dashboard')
    })
    .catch(err => { alert(err) });
  }

  render(){
    console.log("state", this.state, "prop", this.props, "apartment", this.props.history.location.state.apartment);
    let { address_1, address_2, city, state, postal_code, country, building_manager_name, building_manager_phone, building_manager_hours } = this.state.form.apartment;
    return (
      <div className="center">
      <div className="card">
        <h1>Add New Apartment</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="form-item"
            placeholder="Address:"
            name="address_1"
            type="text"
            onChange={this.handleChange.bind(this)}
            value={address_1}
            />
            <input
              className="form-item"
              placeholder="Address (line 2):"
              name="address_2"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={address_2}
            />
            <input
              className="form-item"
              placeholder="City:"
              name="city"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={city}
            />
            <input
              className="form-item"
              placeholder="State:"
              name="state"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={state}
            />
            <input
              className="form-item"
              placeholder="Zip Code:"
              name="postal_code"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={postal_code}
            />
            <input
              className="form-item"
              placeholder="Country:"
              name="country"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={country}
            />
            <input
              className="form-item"
              placeholder="Building Manager Name:"
              name="building_manager_name"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={building_manager_name}
            />
            <input
              className="form-item"
              placeholder="Building Manager Phone:"
              name="building_manager_phone"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={building_manager_phone}
            />
            <input
              className="form-item"
              placeholder="Building Manager Hours:"
              name="building_manager_hours"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={building_manager_hours}
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

export default withAuth(Edit);
