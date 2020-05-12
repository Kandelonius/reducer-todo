import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.tasks.map(task => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
};

export default TodoList;