import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../../index.css';
import API from "../../utils/API";
import Nav from "../Nav";
import Wrapper from "../Wrapper";
import TodoItem from '../TodoItem/TodoItem';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import Footer from "../Footer";

class Todo extends Component {
  state = {
    todos: []
  };
  
  componentDidMount() {
    this.loadTodos();
  }

  loadTodos = () => {
    API.getTodos()
      .then(res => this.setState({ todos: res.data}))
      .catch(err => console.log(err));
  }

  removeTodo = id => {
    const todos = this.state.todos.filter(todo => todo._id != id);
    this.setState({ todos});
    API.deleteTodo(id)
      .then(res => this.loadTodos())
      .catch(err => console.log(err));

  };

  addTodo = ( queueTitle, description, dueDate ) => {
    let todos = this.state.todos; 
    let id = (new Date).getTime();
    let newTodo = {
      "queueTitle": queueTitle,
      "description": description,
      "dueDate": dueDate,
    }

    let self = this;
    API.saveTodo(newTodo)
      .then(function (response) {
        console.log(response);
        todos.push(response.data);
        self.setState({ todos}); 
      })
  }

  editTodo = ( id, queueTitle, description, dueDate ) => {
    const todos = this.state.todos.filter(todo => todo._id != id);
    let newTodo = {
      "id": id,
      "queueTitle": queueTitle,
      "description": description,
      "dueDate": dueDate,
    }

    let self = this;
    API.updateTodo(newTodo)
      .then(function (response) {
        console.log(response);
        todos.push(response.data);
        self.setState({ todos}); 
      })
  }

  render() {
    return (
      
      <div className="App">
        <Nav />
        <Wrapper>
          <TodoForm 
            addTodo= { this.addTodo}
          />
           <TodoList 
              todo={this.state.todos} 
              updateTodo={ this.editTodo } 
              removeTodo={ this.removeTodo }
           /> 
        </Wrapper>
        <Footer />
      </div>
      
    );
  }
}

export default Todo;