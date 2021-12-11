
import React, { useEffect, useRef } from "react";
import  './InputWithLabel.css';
import PropTypes from 'prop-types';
const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = useRef();
  
  useEffect(() => {
    inputRef.current.focus();
  });
  InputWithLabel.propTypes = {
    children: PropTypes.string,
    todoTitle: PropTypes.string,
    handleTitleChange: PropTypes.func
  }

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