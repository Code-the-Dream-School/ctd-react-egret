import React from 'react';
import TodoListItem from './TodoListItem.js';

//arrow function declaration
//{todoList} - deconstruction of props object
const TodoList = ({todoList, onRemoveTodo}) => (
    <ul>
        {todoList.map((todo) => {
            //key is not a prop here, it's identificator required to React for rendering a lot of similar elements.
            return <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />;

        })}
    </ul>
);

export default TodoList;
