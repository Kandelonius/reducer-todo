import React, { useState, useReducer } from "react";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { initialState, reducer } from './reducers/reducer';

// class App extends React.Component {
//   constructor() {
//     super();
const App = props => {

  const [newTask, setNewTask] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
    // this.state = {
    //   tasks: [
    //     {
    //       task: 'Learn about reducers',
    //       completed: false,
    //       id: 3892987589
    //     },
    //     {
    //       task: 'Add reducers to store or something',
    //       completed: false,
    //       id: 3892987587
    //     }
    //   ],
    //   task: ''
    // };
  // }
  const addItem = itemName => {
    const newTask = {
      task: itemName,
      completed: false,
      id: Date.now()
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };
  const toggleTask = (clickedId) => {
    const newTaskList = this.state.tasks.map((item) => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      tasks: newTaskList
    })
  };
  const clearcompleted = evt => {
    // console.log(evt)
    evt.preventDefault();
    let tasks = this.state.tasks.filter(tasks => !tasks.completed);
    this.setState({ tasks });
  };
  // render() {
    return (
      <div>
        <h2>Tasks to complete for master!</h2>
        <TodoForm addItem={addItem} />
        <TodoList tasks={state.tasks}
          handleToggleTask={toggleTask}
          handleClear={clearcompleted} />
      </div>
    );
  // }
}

export default App;