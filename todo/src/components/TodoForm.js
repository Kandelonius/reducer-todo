import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ""
        }
        const [newTask, setNewTask] = useState("");
        const [state, dispatch] = useReducer(reducer, initialState);
    }
    // addItem = itemName => {
    //     const newTask = {
    //         task: itemName,
    //         completed: false,
    //         id: Date.now()
    //     };
    //     this.setState({
    //         tasks: [...this.state.tasks, newTask]
    //     });
    // };
    handleChanges = evt => {
        this.setState({
            item: evt.target.value
        })
    }
    // submitForm = evt => {
    //     evt.preventDefault();
    //     this.props.addItem(this.state.item);
    //     this.setState({
    //         item: ""
    //     });
    // };
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input
                    onChange={this.handleChanges}
                    type="text"
                    name="item"
                    value={this.state.item}
                />
                <button onClick={this.props.handleClear}>Add</button>
            </form>
        );
    }
}

export default TodoForm;