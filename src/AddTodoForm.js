import React from 'react';

function AddTodoForm(props){
    const handleAddTodo = (event)=>{
        event.preventDefault();

        const todoTitle = event.target.title.value;

        props.onAddTodo(todoTitle);

        event.target.reset();
    };
    return (
            <form onSubmit={handleAddTodo}>
                <label htmlFor ="TodoTitle">Title</label>
                <input type="text" name="title" id='todoTitle'></input>
                <button type="submit">Add</button>
            </form>  
    );
    }

export default AddTodoForm;
