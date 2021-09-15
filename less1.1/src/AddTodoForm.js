import React from 'react';

// let todoTitle='';

//if an arrow function's only purpose is to return a value, then you can remove curly braces.
// for multi line return in arrow function use ()
const AddTodoForm = (props) => {
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle)
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log(todoTitle);
        props.onAddTodo(
            {
                title:todoTitle,
                id: Date.now()
            }
        );
        setTodoTitle('');
        
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title </label>
            <input id='todoTitle' name = 'title' value={todoTitle} onChange={handleTitleChange}/>
            <button type='submit'>Add</button>
        </form>
    )
};

export default AddTodoForm;
