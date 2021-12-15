import React from 'react'
import TodoListItem from './TodoListItem'
import PropTypes from 'prop-types'

function TodoList({ todoList, onRemoveTodo }) {

    return (
        <ul className='todolist'>
            {todoList.map(function (todo) {
                return <TodoListItem
                    onRemoveTodo={onRemoveTodo}
                    key={todo.id}
                    todo={todo} />;
            })}
        </ul>

    );
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func,
}

export default TodoList;