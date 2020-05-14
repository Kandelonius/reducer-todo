import React, { useState, useReducer } from "react";
import TodoList from './TodoList';
import { initialState, reducer } from '../reducers/reducer';

const TodoForm = props => {
    const [newTask, setNewTask] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('state in todoform', state);

    const handleChanges = e => {
        console.log('e is ',e.target.value);
        setNewTask(e.target.value);
      };
      

    // const handleChanges = evt => {
    //     console.log(props);
    //     setNewTask(evt.target.value)
    //     dispatch({
    //         task: evt.target.value
    //     })
    // }
    // const submitForm = evt => {
    //     console.log(props);
    //     evt.preventDefault();
    //     props.addItem(state.task);
    //     dispatch({
    //         task: ""
    //     });
    // };
    return (
        <form >
        {/* // <form onSubmit={submitForm}> */}
            <input
                onChange={handleChanges}
                type="text"
                name="task"
                value={state.newTask}
            />
            <button
                onClick={e => {
                    e.preventDefault();
                    dispatch({ type: "ADD_TASK", payload: newTask });
                }}>Add
            </button>
            {/* <button onClick={props.handleClear}>Add</button> */}
        </form >
    );
}

export default TodoForm;