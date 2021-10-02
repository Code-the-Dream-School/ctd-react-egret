import React,{useEffect,useRef} from "react";


function InputWithLabel({children,handleTitleChange,todoTitle}) { 
    const inputRef = useRef ()
    useEffect(() => { if(inputRef.current){inputRef.current.focus()}})
  return (
    <>
      <label  htmlFor="todoTitle">{children} </label>
      <input 
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
