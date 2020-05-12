import React, { useState, useReducer } from "react";
import { initialState, reducer } from '../reducers/reducer';

const TodoForm = props => {
    const [newTask, setNewTask] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('state in todoform',state);
    // constructor() {
    //     super();
    //     this.state = {
    //         something: ""
    //     }
    // }
    const handleChanges = evt => {
        dispatch({
            task: evt.target.value
        })
    }
    const submitForm = evt => {
        evt.preventDefault();
        props.addItem(state.something);
        dispatch({
            something: ""
        });
    };
    // render() {
        
        return (
            <form onSubmit={submitForm}>
                <input
                    onChange={handleChanges}
                    type="text"
                    name="task"
                    value={newTask}
                />
                <button onClick={props.handleClear}>Add</button>
            </form>
        );
    // }
}

export default TodoForm;