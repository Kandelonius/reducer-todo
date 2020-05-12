import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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
  addTask = e => {
    e.preventDefault();
    const newTask = { task: this.state.task, completed: false, id: Date.now() };
    this.setState({ 
      tasks: [...this.state.tasks, newTask], 
      task: '' 
    });
  };

  changeTask = e => this.setState({ [e.target.name]: e.target.value });

  toggleTaskComplete = id => {
    let tasks = this.state.tasks.slice();
    tasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });
    this.setState({ tasks });
  };

  clearCompletedTodos = e => {
    e.preventDefault();
    let tasks = this.state.tasks.filter(task => !task.completed);
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <TodoList
          handleToggleComplete={this.toggleTaskComplete}
          tasks={this.state.tasks}
        />
        <TodoForm
          value={this.state.task}
          handleTaskChange={this.changeTask}
          handleAddTask={this.addTask}
          handleClearTasks={this.clearCompletedTasks}
        />
      </div>
    );
  }
}

export default App;