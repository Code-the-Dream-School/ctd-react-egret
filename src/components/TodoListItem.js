import React from 'react';
import style from './TodoListItem.module.css'
import PropTypes from 'prop-types'

const TodoListItem = ({ todo, onRemoveTodo }) => {

    return (
        <li className={style.ListItem}>
            <button type='button' onClick={() => onRemoveTodo(todo.id)}>
                <span class="material-icons">delete_forever</span>
            </button>
            {todo.fields.Title}
        </li>
    );
}

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func,
}

export default TodoListItem;
