import * as React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';



function App() {

  const todoList = [
    {
      id: 1,
      title: 'Clone the ctd-react-egret repo'
    },
    {
      id: 2,
      title: 'Create a new branch and name it lesson-1-1'
    },
    {
      id: 3,
      title: 'Complete the assignment'
    },
    {
      id: 4,
      title: 'Submit a pull request'
    }
  ]

  const [newTodo, setNewTodo] = React.useState('')

  //add styles to the div element through creating a style object
  const divStyles = {
    backgroundColor: "lightblue",
    fontFamily: "Arial",
    fontSize: 20
  } 
   
  return (
    <div style={divStyles} >
      <h1 style= {{ color: "darkred" }}>To Do List</h1>
        <AddTodoForm onAddTodo={setNewTodo} />
        {newTodo ? <p>Succesfully added: <strong>"{newTodo}"</strong></p> : null}
        <TodoList list={todoList} />
    </div>
   
  ); 
}


export default App
