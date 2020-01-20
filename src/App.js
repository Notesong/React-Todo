import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './App.css'

let tasks = [{ 
  task: "Example Task - Tasks can be up to 250 characters long.  Click on a task to select it for deletion and then hit 'Delete Selected' to remove it. Be sure to hit 'Save' when you're done! Previously saved tasks can be reloaded by hitting 'Load'.",
  id: 0,
  completed: false
}];

class App extends React.Component {
  
  // state for user's tasks
  state = {
    todoList: tasks
  };

  // adds a new task by getting the task message
  // sets an id using Date.now()
  // completed is set to false for all new tasks
  addNewTask = newTaskMessage => {
    const newState = {
      ...this.state, 
      todoList: [
        ...this.state.todoList,
        { 
          task: newTaskMessage, 
          id: Date.now(), 
          completed: false }
      ]
    };
    this.setState(newState);
  };

  // toggles whether or not a task is completed.
  // maps over the todoList to find the appropriate id
  // and then toggles the completed true/false value
  toggleCompleted = id => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    };
    this.setState(newState);
  };

  // clears the completed tasks by filtering todoList
  // removes any task where completed was set to true
  // this is done when the user hits the 'Delete Selected' button
  clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(item => {
        return !item.completed;
      })
    };
    this.setState(newState);
  };

  // saves the current tasks to local storage when user hits 'Save'
  saveData = () => {
    localStorage.setItem('tasks', JSON.stringify(this.state));
  }

  // loads the tasks from local storage when user hits 'Load'
  loadData = () => {
    let savedList = JSON.parse(localStorage.getItem('tasks'));
    this.setState(savedList);
  }

  render() {
    return (
      <div className='app'>
        <header>
          <h1>Welcome to your Todo App!</h1>
        </header>
        <section>
          {/* displays new task form and other buttons */}
          <TodoForm 
            addNewTask={this.addNewTask}
            clearCompleted={this.clearCompleted}
            saveData={this.saveData}
            loadData={this.loadData}
          />
        </section>
        <section>
          {/* displays the todo list */}
          <TodoList 
            todoList={this.state.todoList}
            toggleCompleted={this.toggleCompleted}
          />
        </section>
      </div>
    );
  }
}

export default App;
