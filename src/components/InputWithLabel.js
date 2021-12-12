import React from "react";
import PropTypes from "prop-types";
import styles from "./TodoContainer/TodoContainer.module.css";

const InputWithLabel = ({title, isFocused, onTitleChange, children}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <label
        data-testid='todo-label'
        className={styles.todoLabel}
        htmlFor='todoTitle'>
        {children}
      </label>
      <input
        className={styles.todoInput}
        ref={inputRef}
        id='todoTitle'
        name='title'
        type='text'
        value={title}
        onChange={onTitleChange}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default InputWithLabel;
