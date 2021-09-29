import React from "react";

function InputWithLabel(props) {
    const inputRef = React.useRef(null);
    React.useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
        console.log(inputRef.current)
      }, );
   
    return (
    <>
      <label label htmlFor="todoTitle">Title</label>
        
      <input
        onChange={props.handleTitleChange}
        value={props.todoTitle}
        type="text"
        id="todoTitle"
        name="title"
        chilren="label"
        ref={inputRef}
      />
      <button type="submit">Add</button>
    </>
  );
}

export default InputWithLabel;
