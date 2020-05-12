import React from 'react';
const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTaskChange}
        type="text"
        name="task"
        value={props.value}
        placeholder="...task"
      />
      <button onClick={props.handleAddTask}>Add Task</button>
      <button onClick={props.handleClearTasks}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;