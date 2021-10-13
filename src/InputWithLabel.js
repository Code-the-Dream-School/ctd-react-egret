import React, { useRef } from 'react';

function InputWithLabel(props) {
    const inputRef = useRef(null);
    React.useEffect(() => {
        if (inputRef) {
            inputRef.current.focus();
        }
    });

    return (
        <>
            <label htmlFor='todoTitle'>{props.children}</label>
            <input
                onChange={props.handleTitleChange}
                value={props.todoTitle}
                id='todoTitle'
                type='text'
                name='title'
                ref={inputRef}
            />
        </>
    );
}

export default InputWithLabel;