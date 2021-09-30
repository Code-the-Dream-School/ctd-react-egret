import React from 'react';

const TodoListItem = (props) => {
    return (
        <ul>
        <li>
        <span>ID: {props.todo.id} </span>
        <span>Title: {props.todo.title} </span>
        </li>
        </ul>
    )
}

export default TodoListItem;
