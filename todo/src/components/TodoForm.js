import React from 'react';
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            something: ""
        }
    }
    handleChanges = evt => {
        this.setState({
            something: evt.target.value
        })
    }
    submitForm = evt => {
        evt.preventDefault();
        this.props.addItem(this.state.something);
        this.setState({
            something: ""
        });
    };
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input
                    onChange={this.handleChanges}
                    type="text"
                    name="task"
                    value={this.state.something}
                />
                <button onClick={this.props.handleClear}>Add</button>
            </form>
        );
    }
}

export default TodoForm;