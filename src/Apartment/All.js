import React, { Component } from 'react';
import { getApartments } from '../services/ApartmentsApi'
import Detail from './Detail'

class All extends Component {
  constructor(props){
    super(props)
    this.state={
      apartments: [],
      apt_id: ''
    }
  }

  componentWillMount(){
    console.log("comp will mount");
    getApartments().then((res) =>{
      console.log(res);
      this.setState({apartments: res})
    })
  }

  handleClick = (id) => {
  console.log(id, "running handle click");
  this.props.history.push(`/apartments/${id}`)
}

  render(){
    return(
      <div>
      Apartments
      {this.state.apartments.map((apt,i) =>{
        return (
          <div key={i.toString()}>
          <Detail apartment={apt}/>
          <button onClick={this.handleClick.bind(this)}>View</button>
          </div>
        )
      })}
      </div>
    )}
}





export default All;
