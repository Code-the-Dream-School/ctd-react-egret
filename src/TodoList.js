import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo }) {

    return (
        <ul>
            {todoList.map(function (item) {
                return <TodoListItem
                    onRemoveTodo={onRemoveTodo}
                    key={item.id}
                    item={item} />;
            })}
        </ul>

    );
}

export default TodoList;