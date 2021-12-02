import React, { useEffect, useRef } from "react";
import './index.css'
import style from './AddTodoForm.module.css'


function InputWithLabel({ children, handleTitleChange, todoTitle }) {
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  return (
    <>
      <label className={style.formLabel} htmlFor="todoTitle">{children} </label>
      <input className={style.inputfield}
        ref={inputRef}
        onChange={handleTitleChange}
        value={todoTitle}
        name="title"
        id="todoTitle"
      ></input>
    </>
  );
}

export default InputWithLabel;
