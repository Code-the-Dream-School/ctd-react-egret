import React from 'react';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = React.useState("");
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
        console.log(event);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();

        onAddTodo({ fields: { Title: todoTitle }, id: Date.now() });
        setTodoTitle("");
    };
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="TodoTitle">Title</label>
            <input onChange={handleTitleChange} value={todoTitle} type="text" name="title" id="todoTitle"></input>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
