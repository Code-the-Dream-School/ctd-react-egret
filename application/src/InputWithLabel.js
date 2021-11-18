import React, { useRef, useEffect } from 'react'

const InputWithLabel = (props) => {

  const inputRef = useRef(null);

  useEffect(() => {
      inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle" >{props.children} </label>
      <input 
        onChange={props.handleTitleChange} 
        value={props.todoTitle} 
        type="text" 
        id="todoTitle" 
        name="title"
        ref={inputRef}
      />
    </>
  )
}

export default InputWithLabel