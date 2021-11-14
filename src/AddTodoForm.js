import React from 'react'
import InputWithLabel from './InputWithLabel';

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = React.useState('')

    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo(todoTitle)
        setTodoTitle("")
    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}
                isFocused>
                <strong>Title : </strong>
            </InputWithLabel>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm
