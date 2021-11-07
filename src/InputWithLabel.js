import React from "react";
import styles from "./AddTodosForm.module.css";

const InputWithLabel = ({title, isFocused, onTitleChange, children}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <label className={styles.todoLabel} htmlFor='todoTitle'>
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

export default InputWithLabel;
