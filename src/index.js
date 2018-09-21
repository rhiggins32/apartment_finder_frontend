import React from 'react';
import ReactDOM from 'react-dom';
import './css/Index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import RegisterPage from './components/Register'
ReactDOM.render(

  <Router>
    <div>
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
        <Route
          exact
          path = '/'
          component={App}
          />
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
