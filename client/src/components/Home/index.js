import React, { Component } from 'react';
import "./index.css";
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import Nav from "../Nav";
import Footer from "../Footer";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <Nav />
    <h2> Access Project Portal Apps below</h2>
    <h3>If this site needs Editing contact the following:</h3>
    
    {Object.keys(users).map(key =>
      <div key={key}>{users[key].email}</div>
    )}
    <br/><br/>
    <Footer />
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
