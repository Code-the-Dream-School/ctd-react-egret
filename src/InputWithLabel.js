
import React, { useEffect, useRef } from "react";
import  './InputWithLabel.css';

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = useRef();
  
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle" >{children}</label>
      <input 
      
        ref={inputRef}
        id="todoTitle"
        type="text"
        placeholder = "Enter Task"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  );
};

export default InputWithLabel;