import React, { useState } from 'react'
import PropTypes from 'prop-types'
import InputWithLabel from './InputWithLabel.js'

function AddTodoForm({ onAddTodo, title }) {
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
            <button type='submit' className='addbutton'><span className="material-icons">add</span></button>
        </form>
    );
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
    title: PropTypes.string,
}

AddTodoForm.defaultProps = {
    title: 'Default Title',
}

export default AddTodoForm;