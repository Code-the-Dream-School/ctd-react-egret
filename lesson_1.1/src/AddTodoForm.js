import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox';
// import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
// import { style } from "@mui/system";
import style from './AddTodoForm.module.css'


function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle);
  };

  function handleAddTodo(event) {
    event.preventDefault();
    console.log(todoTitle);
    onAddTodo({fields: { Title: todoTitle }});
    setTodoTitle("");
  }
  return (
    <div className={style.inputLabel} >
      <form onSubmit={handleAddTodo}>
        <InputWithLabel 
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          Title:
        </InputWithLabel>
        &nbsp;
        <Button className={style.addBtn} onClick={() => console.log('you clicked me')} type="submit">
        <AddBoxIcon  fontSize='medium'/>
        </Button>
      </form>
    </div>
  );
}

export default AddTodoForm;
