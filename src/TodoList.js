import React from 'react';
import TodoListItem from './TodoListItem';

let todoList = [
    {id: 1, title: 'Complete assignment'},
    {id: 2, title: 'Read the book'},
    {id: 3, title: 'Ask questions'}
];

function TodoList() {
    return (
        <ul>
            {todoList.map(function(todo) {
                <TodoListItem key={todoList.id} todo={todo}/>
             })}
        </ul>
    );
}

export default TodoList;