import React from 'react';

function InputWithLabel(props) {

  const inputRef = React.useRef();
 
  React.useEffect(() => {
      inputRef.current.focus();
    }
  );

  return (
    <>
      <label htmlFor="todoTitle">{props.children}</label>
      <input type="text" id="todoTitle" name="title" value={props.todoTitle} onChange={props.handleTitleChange} ref={inputRef}/>
    </>
  );
}

export default InputWithLabel;