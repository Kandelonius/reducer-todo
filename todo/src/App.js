import React, { useState, useReducer } from "react";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { initialState, reducer } from './reducers/reducer';

const App = props => {
  console.log(initialState);
  const [newTask, setNewTask] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const addItem = itemName => {
    const newTask = {
      task: itemName,
      completed: false,
      id: Date.now()
    };
    dispatch({
      tasks: [...state.tasks, newTask]
    });
  };
  const toggleTask = (clickedId) => {
    const newTaskList = state.tasks.map((item) => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    dispatch({
      tasks: newTaskList
    })
  };
  const clearcompleted = evt => {
    evt.preventDefault();
    let tasks = state.tasks.filter(tasks => !tasks.completed);
    dispatch({ tasks });
  };
  return (
    <div>
      <h2>Tasks to complete!</h2>
      <TodoForm addItem={addItem} />
      <TodoList tasks={state.tasks}
        handleToggleTask={toggleTask}
        handleClear={clearcompleted} />
    </div>
  );
}

export default App;