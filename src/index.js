import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Apartments from './components/Apartments';
import AllApartments from './Apartments/All';
import ShowApartment from './Apartments/Show';
import EditApartment from './Apartments/Edit';
import NewApartment from './Apartments/New';
import DeleteApartment from './Apartments/Delete';
import ApartmentCard from './components/ApartmentCard';
import ApartmentsContainer from './containers/ApartmentsContainer';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(
  <div>
    <Router history={history}>
      <div>
        <Route component={Header}/>
      <Switch>
        <Route exact path = '/apartments/:id/edit' component={EditApartment} />
        <Route exact path = '/apartments/new' component={NewApartment} />
        <Route exact path = '/apartments/delete/:id' component={DeleteApartment} />
        <Route exact path = '/apartments/:id' component={ShowApartment} />
        <Route exact path = '/apartments' component={AllApartments} />
        <Route exact path = '/login' component={Login} />
        <Route exact path = '/register' component={Register}/>
        <Route exact path = '/dashboard' component={Dashboard} />
        <Route exact path = '/' component={AllApartments} />
      </Switch>
    </div>
    </Router>
  </div>
  , document.getElementById('root'));
registerServiceWorker();

// <Route exact path = '/apartments/:id' component={ApartmentCard} />

