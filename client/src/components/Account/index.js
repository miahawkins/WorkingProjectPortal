import React from 'react';
import PropTypes from 'prop-types';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';
import Nav from "../Nav";
import Footer from "../Footer";

const AccountPage = (props, { authUser }) =>
  <div>
    <Nav />
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
    <Footer />
  </div>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);