import React, { useRef } from "react";

function InputWithLabel(props) {
  const inputRef = useRef(null);

  React.useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <label>{props.children}</label>
      <input
        id="todoTitle"
        name="title"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        ref={inputRef}
      ></input>
      <label htmlFor="todoTitle"></label>
    </>
  );
}

export default InputWithLabel;
