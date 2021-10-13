import React ,{useRef, useEffect } from 'react'

function InputWithLabel(props) {
 const inputRef = useRef();
 useEffect(()=>{
  if (inputRef.current) {inputRef.current.focus()};
 })
 return (
  <div>
   <label htmlFor="TodoTitle">{props.children}</label>
   <input 
   ref={inputRef} 
   onChange={props.handleTitleChange} 
   value={props.todoTitle} type="text"
    name="title" id="todoTitle">
</input>
   <button type="submit">Add</button>
  </div>
 )
}

export default InputWithLabel;