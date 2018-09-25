import React, { Component } from 'react';
import { getApartments } from '../services/apartments_api';
import ApartmentCard from './ApartmentCard';
import '../css/Apartments.css';

export default class Apartments extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: [],
      apt_id: ''
    }
  }

  componentWillMount(){
    console.log("comp will mount");
    getApartments().then((res) => {
      console.log(res);
      this.setState({apartments: res})
    });
  }

  handleClick = (id) => {
    console.log(id, "running handle click");
    this.props.history.push(`/apartments/${id}`)
  }

  render(){
    console.log(this.state);
    return (
      <div>
        Apartments
        {this.state.apartments.map((apt, i) => {
          return (
            <div key={i.toString()}>
              <ApartmentCard apartment={apt}/>
              <button onClick={this.handleClick.bind(this)}>View</button>
            </div> )
        })}
      </div>
    )
  }
}
