import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = (props, { authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
  <div>
    <p><Link to={routes.LANDING}>Landing</Link> | <Link to={routes.HOME}>Home</Link> | <Link to={routes.ACCOUNT}>Account</Link> | <Link to={routes.TODO}>To Do App</Link> | <Link to={routes.CALENDAR}>Schedule App</Link> | <Link to={routes.EXCEL}>Excel App</Link></p>
    <p><SignOutButton /></p>
  </div>

const NavigationNonAuth = () =>
  <div>
    <p><Link to={routes.LANDING}>Landing</Link> | <Link to={routes.SIGN_IN}>Sign In</Link></p>
  </div>

export default Navigation;
