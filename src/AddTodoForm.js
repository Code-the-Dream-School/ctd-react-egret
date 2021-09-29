import React from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm(props) {
  //const formRef = React.useRef(null);
  const [ todoTitle, setTodoTitle ] = React.useState('');
  const { onAddTodo } = props;

  function handleTitleChange(event) {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    console.log(todoTitle);
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
    event.target.value = '';
    //formRef.current.reset();
  }

  return (
    <>
      <form onSubmit={handleAddTodo} /*ref={formRef}*/>
        <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>
          Title:
        </InputWithLabel>
        <button>Add</button>
      </form>
    </>
  );
}

export default AddTodoForm;