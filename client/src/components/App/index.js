import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import Todo from '../Todo';
import AccountPage from '../Account';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';
import Excel from '../Excel';
import Calendar from '../Calendar';
import './index.css';

const App = () =>
  <Router>
    <div className="app">
      
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.TODO} component={() => <Todo />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.EXCEL} component={() => <Excel />} />
      <Route exact path={routes.CALENDAR} component={() => <Calendar />} />

    </div>
  </Router>

export default withAuthentication(App);
