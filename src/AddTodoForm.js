import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel.js';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState("");

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        // prevents adding an empty list item
        if (todoTitle === "") {
            return false;
        }
        console.log(todoTitle);
        onAddTodo(todoTitle);
        setTodoTitle("");
    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}
            >
            </InputWithLabel>
            <button type='submit'>+</button>
        </form>
    );
}

export default AddTodoForm;