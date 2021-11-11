import React from 'react';
import style from './TodoListItem.module.css'

const TodoListItem = ({ todo, onRemoveTodo }) => {

    return (
        <li className={style.ListItem}>
            {todo.fields.Title}&nbsp;
            <button type='button' onClick={() => onRemoveTodo(todo.id)}>
                Remove
            </button>
        </li>
    );
}

export default TodoListItem;
