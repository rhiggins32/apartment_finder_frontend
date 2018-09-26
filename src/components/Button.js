import React, { Component } from 'react';
import '../css/Apartments.css';

export default class Button extends Component {

  render(){
    //console.log(this.state.apt_id);
    return (
      <div>
        <button onClick={this.props.parentFunction}>{this.props.name}</button>
      </div>
    )
  }
}
