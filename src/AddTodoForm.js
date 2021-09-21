import React from 'react';

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
        <label htmlFor="todoTitle">Title</label>
        <input type="text" id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}/>
        <button>Add</button>
      </form>
    </>
  );
}

export default AddTodoForm;