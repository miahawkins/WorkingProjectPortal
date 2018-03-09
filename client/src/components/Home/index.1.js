import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';

// import './index.css';
import API from "../../utils/API";
import Nav from "../Nav";
import Wrapper from "../Wrapper";
import TodoItem from '../TodoItem/TodoItem';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
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
      this.loadTodos();
  }

  state = {
    todos: []
  };
  


  loadTodos = () => {
    API.getTodos()
      .then(res => this.setState({ todos: res.data}))
      .catch(err => console.log(err));
  }

  removeTodo = id => {
    const todos = this.state.todos.filter(todo => todo._id != id);
    this.setState({ todos});
    API.deleteTodo(id);

  };

  addTodo = ( queueTitle, description, dueDate ) => {
    let todos = this.state.todos; 
    let newTodo = {
      "id": (new Date).getTime(),
      "queueTitle": queueTitle,
      "description": description,
      "dueDate": dueDate,
    }
    todos.push(newTodo);
    this.setState({ todos}); 
    API.saveTodo(newTodo);  
  }

  editTodo = ( queueTitle, description, dueDate ) => {
    let todos = this.state.todos; 
    todos.push({
      "id": (new Date).getTime(),
      "queueTitle": queueTitle,
      "description": description,
      "dueDate": dueDate,
    })
    this.setState({ todos}); 

    console.log(todos);   
  }

  render() {
    const { users } = this.state;

    return (
      <div className="HomePage">
        <Nav />
        <Wrapper>
          <TodoForm 
            addTodo= { this.addTodo}
          />
           <TodoList 
              todo={this.state.todos} 
              updateTodo={ () => {} } 
              removeTodo={ this.removeTodo }
           /> 
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

// const UserList = ({ users }) =>
//   <div>
//     <h2>List of Usernames of Users</h2>
//     <p>(Saved on Sign Up in Firebase Database)</p>

//     {Object.keys(users).map(key =>
//       <div key={key}>{users[key].username}</div>
//     )}
//   </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);