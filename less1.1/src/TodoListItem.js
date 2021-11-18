import React from 'react'
import styles from './TodoListItem.module.css';

const TodoListItem = ({onRemoveTodo, todo}) => (
<li className={styles.listItem}>
    {todo.fields.Title}
    &nbsp;
    <button type='button' onClick={()=>onRemoveTodo(todo.id)} className={styles.listBtn}>
        rid off
    </button>
</li>
);

export default TodoListItem;