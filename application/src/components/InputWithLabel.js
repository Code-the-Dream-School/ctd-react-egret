import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types';

const InputWithLabel = (props) => {

  const inputRef = useRef(null);

  useEffect(() => {
      inputRef.current.focus();
  });

  return (
    <div className="input-field">
      <label htmlFor="todoTitle" >{props.children} </label>
      <input 
        onChange={props.handleTitleChange} 
        value={props.todoTitle} 
        type="text" 
        id="todoTitle" 
        name="title"
        ref={inputRef}
      />
    </div>
  )
}

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func
};

export default InputWithLabel