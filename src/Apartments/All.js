import React, { Component } from 'react';
import { getApartments } from '../services/apartments_api';
import ApartmentCard from '../components/ApartmentCard';
import Show from '../Apartments/Show';
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
    //this.render()
    this.props.history.replace(`/apartments/${id}`)
  }

  render(){
    console.log("in apartments/all...", this.props);
    return (
      <div>
        Apartments
        {this.state.apartments.map((apt, i) => {
          return (
            <div key={i.toString()}>
              <Show apartment={apt}/>
              <button onClick={(id) => {id = apt.id; return this.handleClick(id)}}>View</button>
            </div> )
        })}
      </div>
    )
  }
}
