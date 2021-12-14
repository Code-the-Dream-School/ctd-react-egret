import React from 'react';
import InputWithLabel from './InputWithLabel';
import Button from '@mui/material/Button';
import styled from './AddTodoForm.module.css'
import PropTypes from 'prop-types';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = React.useState("");
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };
    const handleAddTodo = (event) => {
        event.preventDefault();
        if (todoTitle === "") {
            return false;
        }
        setTodoTitle("");
    };
    AddTodoForm.propTypes = {
        onAddTodo: PropTypes.func
      }
    return (
        <form onSubmit={handleAddTodo} className = {styled.form}>
            <InputWithLabel todoTitle = {todoTitle} handleTitleChange= {handleTitleChange}>Title</InputWithLabel>
            <Button  type="submit">Add</Button>
        </form>
    );
}

export default AddTodoForm;
