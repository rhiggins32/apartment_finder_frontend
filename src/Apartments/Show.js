import React, { Component } from 'react';
import '../css/Apartments.css';
import { getApartment } from '../services/apartments_api';

export default class Show extends Component {
  constructor(props){
    super(props);
    this.state = {
      apartment: [],
      id: ''
    }
  }

  componentWillMount(){
    if(this.props.match){
      let id = this.props.match.params.id;
      console.log("id", this.state.id);
      console.log("comp will mount");
      getApartment(id).then((res) => {
        console.log("response",res);
        this.setState({apartment: res})
      });
    } else {
      this.setState({apartment: this.props.apartment})
    }
  }

  render(){
    console.log("in show...", this.state, this.props);
    let apt = this.state.apartment;
    console.log(this.props, "APT:", apt);
    return (
      <div>
        <ul>
          <li>{apt.address_1} {apt.address_2}</li>
          <li>{apt.city} {apt.state}</li>
          <li>{apt.country} {apt.postal_code}</li>
        </ul>
      </div>
    )
  }
}
