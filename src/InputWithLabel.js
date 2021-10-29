import React, {useRef, useEffect}from "react";



function InputWithLabel({todoTitle, handleTitleChange,children}){
    const inputRef = useRef();
  
    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    } );

    return(
        <> 
        <div>
        <label htmlFor="todoTitle">{children}</label>
        <input id="todoTitle" name="title" value={todoTitle} ref={inputRef} onChange={handleTitleChange }  autoFocus></input>
        </div>
        </>
    )
}

export default InputWithLabel;