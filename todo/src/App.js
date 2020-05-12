import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// import { initialState } from './reducers/reducer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          task: 'Learn about reducers',
          completed: false,
          id: 3892987589
        },
        {
          task: 'Add reducers to store or something',
          completed: false,
          id: 3892987587
        }
      ],
      task: ''
    };
  }
  addItem = itemName => {
    const newTask = {
      task: itemName,
      completed: false,
      id: Date.now()
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };
  toggleTask = (clickedId) => {
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
  clearcompleted = evt => {
    // console.log(evt)
    evt.preventDefault();
    let tasks = this.state.tasks.filter(tasks => !tasks.completed);
    this.setState({ tasks });
   };
  render() {
    return (
      <div>
        <h2>Tasks to complete for master!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList tasks={this.state.tasks}
          handleToggleTask={this.toggleTask}
          handleClear={this.clearcompleted} />
      </div>
    );
  }
}

export default App;