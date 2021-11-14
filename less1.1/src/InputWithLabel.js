import React from 'react';
import styles from './InputWithLabel.module.css';

const InputWithLabel = ({todoTitle, handleTitleChange, children}) => {
    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();

    });

    return (
    <>
        <label htmlFor='todoTitle'>{children} </label>
        <input id='todoTitle' name = 'title' value={todoTitle} onChange={handleTitleChange} ref = {inputRef} className = {styles.inputField}/>
    </>
)}

export default InputWithLabel;