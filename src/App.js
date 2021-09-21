import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Auth from "./layout/Auth";
import User from "./layout/User";
import Patient from "./layout/PatientSummary";
import 'react-day-picker/lib/style.css';
import history from './history';
import { CookiesProvider } from 'react-cookie';
function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <BrowserRouter history={history} basename="/konzaTest"  >
          <Switch>
            <Route path='/auth' render={props => <Auth {...props} baseUrl="https://helpfulbalance.okta.com" />} />
            <Route path='/user' render={props => <User {...props} baseUrl="https://helpfulbalance.okta.com" />} />
            <Route path='/patients' render={props => <Patient {...props} baseUrl="https://helpfulbalance.okta.com" />} />
            <Redirect from="/" to="/auth/login" />
          </Switch>
        </BrowserRouter>
      </CookiesProvider>
    );
  }
}

export default App;

