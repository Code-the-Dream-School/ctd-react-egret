import React from 'react'
import styles from './TodoListItem.module.css';

const TodoListItem = ({onRemoveTodo, todo}) => (
<li className={styles.listItem}>{todo.fields.Title}
    &nbsp;
    <button type='button' onClick={()=>onRemoveTodo(todo.id)}>
     Remove
    </button>
</li>
);

export default TodoListItem;