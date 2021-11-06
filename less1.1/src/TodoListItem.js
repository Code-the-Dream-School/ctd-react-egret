import React from 'react'

const TodoListItem = ({onRemoveTodo, todo}) => (
<li>{todo.fields.Title}
    &nbsp;
    <button type='button' onClick={()=>onRemoveTodo(todo.id)}>
     Remove
    </button>
</li>
);

export default TodoListItem;