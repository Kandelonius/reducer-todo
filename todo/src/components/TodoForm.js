import React from 'react';


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ""
        }
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
    handleChanges = evt => {
        this.setState({
            item: evt.target.value
        })
    }
    submitForm = evt => {
        evt.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
            item: ""
        });
    };
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input
                    onChange={this.handleChanges}
                    type="text"
                    name="item"
                    value={this.state.item}
                />
                <button onClick={this.props.handleClear}>Add</button>
            </form>
        );
    }
}

export default TodoForm;