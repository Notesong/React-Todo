import React from 'react';

const Todo = props => {
    return (
        <div 
            // let user declare task completed by clicking it
            onClick={e => props.toggleCompleted(props.item.id)}
            // changes css based on whether task completed
            className={`task${props.item.completed ? " completed" : ""}`}
        >
            <p>{props.item.task}</p>
        </div>
    )
};

export default Todo;