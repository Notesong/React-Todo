import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {/* displays a task card. Only the task itself is shown*/}
            {/* toggle allows user to mark it as completed and ready for removal */}
            {props.todoList.map(item => (
                <Todo
                    item={item}
                    key={item.id}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
        </div>
    )
};

export default TodoList;