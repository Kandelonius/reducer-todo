import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    
    return (
        <div>
            {props.tasks.map(item => (
                <Todo key={item.id}
                    item={item}
                    // handleToggleTask={props.handleToggleTask}
                />
            ))}
            <button onClick={props.handleClear}>Clear</button>
        </div>
    );
}

export default TodoList;