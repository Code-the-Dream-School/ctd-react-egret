import React from 'react';
import TodoListItem from './TodoListItem.js';

//arrow function declaration
//{todoList} - deconstruction of props object
const TodoList = ({todoList}) => (
    <ul>
        {todoList.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} />;
        })}
    </ul>
);

export default TodoList;
