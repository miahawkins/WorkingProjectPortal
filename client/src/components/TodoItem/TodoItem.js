import React, {Component} from "react";
import "./TodoItem.css";


const TodoItem = props => {
    return (
        <div className="todoitem">
            <div className="content">
                <div className="todoItem">
                    <div>
                        <p><b>Queue Title:</b> {props.queueTitle}</p> 
                        <p><b>Description:</b> {props.description}</p> 
                        <p><b>Due Date:</b> {props.dueDate}</p> 
                    </div>
                    <button className="dButton" onClick={() => props.removeTodo(props.id)}>Delete</button>
                    <button className="eButton" onClick={() => props.editTodo()}>Edit</button>
                </div>
                
            </div>

        </div>
    );
};

export default TodoItem;
