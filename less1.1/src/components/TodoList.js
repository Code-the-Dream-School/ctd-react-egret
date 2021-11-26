import React from 'react';
import TodoListItem from './TodoListItem.js';
import styles from './TodoList.module.css';
import PropTypes from 'prop-types';

//arrow function declaration
//{todoList} - deconstruction of props object
const TodoList = ({todoList, onRemoveTodo}) => (
    <ul className={styles.stripedList}>
        {todoList.map((todo) => {
            //key is not a prop here, it's identificator required to React for rendering a lot of similar elements.
            return <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />;

        })}
    </ul>
);

TodoList.propTypes = {
    todoList: PropTypes.func,
    onRemoveTodo: PropTypes.func
};

export default TodoList;
