import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";


const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(props);
    // debugger;
    return (
        <div style={props.item.completed ? { textDecoration: 'line-through' } : null}
            onClick={() => props.handleToggleTask(props.item.id)}>
            <p>{props.item.task}</p>
        </div>
    );
}

export default Todo;