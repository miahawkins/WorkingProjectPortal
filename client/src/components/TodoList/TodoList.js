import React from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

function TodoList ({todo, updateTodo, removeTodo}) {
  let todoItems = todo.map((todo, index) => {
    return (
      <TodoItem
        key={index}
        id={todo._id}
        todo={todo}
        queueTitle={todo.queueTitle}
        description={todo.description}
        dueDate={todo.dueDate}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    );
  });
  return (
    <div className="todoList">
      {todoItems}
    </div>
  );
}

export default TodoList;
