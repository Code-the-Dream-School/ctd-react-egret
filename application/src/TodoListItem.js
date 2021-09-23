import React from 'react';

const TodoListItem = (props) => {
    return (
        <ul>
        <li>
        <span>{props.todo.title}</span>
        </li>
        </ul>
    )
}

export default TodoListItem;
