import React from 'react';
import InputWithLabel from './InputWithLabel';

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
                id: Date.now(),
                title:todoTitle,               
            }
        );
        setTodoTitle('');  
    };

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel 
                todoTitle={todoTitle}  
                handleTitleChange={handleTitleChange}
            > 
            Title
            </InputWithLabel>
            <button type='submit'>Add</button>
        </form>
    )
};

export default AddTodoForm;
