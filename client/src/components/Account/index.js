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
    <h2>Account: {authUser.email}</h2>
    <h3> You can change your password here.</h3>
    <PasswordForgetForm />
    <br/><br/>
    <h3> Or you can use this form to change your password.</h3>
    <PasswordChangeForm />
    <br/><br/>
    <Footer />
  </div>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
