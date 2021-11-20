import React from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = React.useState("");
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
        console.log(event);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        if (todoTitle === "") {
            return false;
        }
console.log(todoTitle)
        // onAddTodo({ fields: { Title: todoTitle }, id: Date.now() });
        onAddTodo(todoTitle);
        setTodoTitle("");
    };
    return (

        <form onSubmit={handleAddTodo}>
            <InputWithLabel todoTitle = {todoTitle} handleTitleChange= {handleTitleChange}>Title</InputWithLabel>
            <button type="submit">Add</button>
        </form>

    );
}

export default AddTodoForm;
