import React, { Component } from 'react';
import '../App.css';
import API from "../utils/API";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

class Edit extends Component {
    state = {
        queueTitle: "",
        description: "",
        dueDate: ""
    }
    // Handles input changes
    inputChange = (event) => {
        // Value and name of each input
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };
    
    // Handles what happens upon submitting
    toSubmit = (event) => {
        event.preventDefault();

        //If there is nothing in the fields alert user
        if (!this.state.queueTitle || !this.state.description || !this.state.dueDate) {
            alert("Please fill every entry of form.");
            return;
        } 
        console.log("Calling addTodo");
        this.props.addTodo(this.state.queueTitle, this.state.description, this.state.dueDate);

        // Clear input form after submission
        this.clearInput();
    };

    clearInput() {
        this.setState({
            queueTitle: "",
            description: "",
            dueDate: ""
        });
    };

    render() {
        return (
            <form className="todoform">
                <input
                    value={this.state.queueTitle}
                    name="queueTitle"
                    onChange={this.inputChange}
                    type="text"
                    placeholder="Queue Title"
                />
                <input
                    value={this.state.description}
                    name="description"
                    onChange={this.inputChange}
                    type="text"
                    placeholder="Description"
                />
                <input
                    value={this.state.dueDate}
                    name="dueDate"
                    onChange={this.inputChange}
                    type="text"
                    placeholder="Due Date"
                />
                <button onClick={this.toSubmit}>Submit</button>
            </form>
        );
    }
}

export default Edit;
