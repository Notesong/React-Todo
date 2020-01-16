import React from 'react';

class TodoForm extends React.Component {

    // sets up an empty new task state
    state = {
        newTask: ''
    };

    // handles any input changes in the new task form
    handleChanges = e => {
        this.setState({...this.state, newTask: e.target.value});
    };

    // adds the new task to the task list and resets the input field
    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTask(this.state.newTask);
        this.setState({...this.state, newTask: ''});
    };

    render() {
        return(
            <div className='form-todo'>
                {/* new task form */}
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='task'
                        value={this.state.newTask}
                        maxLength='200'
                    />
                    <button className='btn'>Add</button>                    
                </form>
                {/* save, load, and detete selected buttons */}
                <button className='btn' onClick={this.props.saveData}>
                    Save
                </button>
                <button className='btn' onClick={this.props.loadData}>
                    Load
                </button>
                <button className='btn' onClick={this.props.clearCompleted}>
                    Delete Selected
                </button>
            </div>
        )
    }
}

export default TodoForm;