import React from 'react';
import styles from './InputWithLabel.module.css';
import PropTypes from 'prop-types';

const InputWithLabel = ({todoTitle, handleTitleChange, children}) => {
    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();

    });

    return (
    <>
        <label htmlFor='todoTitle'>{children} </label>
        <input
            id='todoTitle' name = 'title'
            value={todoTitle}
            onChange={handleTitleChange}
            ref = {inputRef} className = {styles.inputField}
            placeholder = 'Type new task here'
        />
    </>
)}

InputWithLabel.propTypes = {
    todoTitle: PropTypes.string,
    handleTitleChange: PropTypes.func,
    children: PropTypes.string,
};

export default InputWithLabel;