import React from 'react';

// let todoTitle='';

//if an arrow function's only purpose is to return a value, then you can remove curly braces.
// for multi line return in arrow function use ()
const AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        props.onAddTodo(todoTitle);
        event.target.reset();
        
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title </label>
            <input id='todoTitle' name = 'title'  />
            <button type='submit'>Add</button>
        </form>
    )
};

export default AddTodoForm;
