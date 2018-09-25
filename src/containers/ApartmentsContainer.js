import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import All from '../Apartments/All';
import Show from '../Apartments/Show';
import Edit from '../Apartments/Edit';
import New from '../Apartments/New';
import Header from '../components/Header';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { getApartments } from '../services/apartments_api';


class ApartmentsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentWillMount(){
    //console.log("comp will mount");
    getApartments().then((res) => {
      //console.log(res);
      this.setState({apartments: res})
    });
  }

  render(){
    console.log("in ApartmentsContainer...");
    const url = this.props.match.path;
    console.log("url...", url);
    let { apartments } = this.state;
    console.log("apartments...", apartments);
    return (
      <div>
        <Router>
            <Switch>
              <Route path = {`${url}`} render={(props) => <All apartments={apartments}/>} />
              <Route path = {`${url}/:id`} render={(props) => <Show apartments={apartments}/>} />
              <Route path = {`${url}/:id/edit`} render={(props) => <Edit apartments={apartments}/>} />
              <Route path = {`${url}/new`} render={(props) => <New apartments={apartments}/>} />
            </Switch>
        </Router>
      </div>
    )
  }
}

export default ApartmentsContainer;
