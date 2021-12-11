import React from 'react';
import InputWithLabel from './InputWithLabel';
// import './AddTodoForm.css'
import Button from '@mui/material/Button';
import styled from './AddTodoForm.module.css'
// import { styled } from '@mui/system';

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

        <form onSubmit={handleAddTodo} className = {styled.form}>
            <InputWithLabel todoTitle = {todoTitle} handleTitleChange= {handleTitleChange}>Title</InputWithLabel>
            <Button  type="submit">Add</Button>
        </form>

    );
}

export default AddTodoForm;
