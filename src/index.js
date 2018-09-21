import React from 'react';
import ReactDOM from 'react-dom';
import './css/Index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {  Router, Route } from 'react-router-dom';
import Login from './components/Login';
import RegisterPage from './components/Register'
import Detail from './Apartment/Detail'
import All from './Apartment/All'
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/Header'

const history = createBrowserHistory();

ReactDOM.render(

  <Router history={history}>
    <div>
      <Route component={Header}/>
      <Route
        exact
        path = '/all'
        component={All}
        />
      <Route
        exact
        path="/register"
        component={RegisterPage}
        />
      <Route
        exact
        path = '/'
        component={App}
        />
      <Route
        exact
        path="/login"
        component={Login}
        />
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
