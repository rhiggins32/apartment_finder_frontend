import React, { Component } from 'react'
import Header from './Header';
import withAuth from './withAuth';
import { getUserApartments, getUser } from '../services/apartments_api.js'
import AuthService from '../services/AuthService';

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService();
    this.state = {
      apartments: [],
        user: []
    }
  }

  componentWillMount(){
    console.log("props", this.props);
    let user_id = this.props.userId;
    getUser(user_id).then((user) => {
      console.log("user",user);
      this.setState({user: user});
    }).then(() => {
    console.log("id", this.props.userId);
    console.log("comp will mount");
    getUserApartments(user_id).then((apt) => {
      console.log("response",apt);
      this.setState({apartments: apt})
    })})
    //if(this.props.userId){
    //}
    // else {
    //   this.setState({error: "apartments not found"})
    // }
  }

  render(){
    //console.log("state", this.state, "user", this.state.user);
    let { apartments } = this.state;
    let user = this.state.user[0];
    console.log("user", user, this.props);
    let apts = apartments.map((apt, i) => {
      return (
        <div>
          <ul key={i.toString()}>
            <li>{apt.address_1} {apt.address_2}</li>
            <li>{apt.city} {apt.state}</li>
            <li>{apt.country} {apt.postal_code}</li>
          </ul>
        </div>
      )
    });
    return (
      <div>
        <h1>Welcome! {user && user.first_name} {user && user.last_name}</h1>
        {apts}
      </div>
    )
  }
}
export default withAuth(Dashboard);
