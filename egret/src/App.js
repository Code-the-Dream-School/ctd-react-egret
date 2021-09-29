import React from "react";
import TodoList from "./TodoList.js";
import AddTodoForm from "./AddTodoForm.js";
function useSemiPersistentState (){const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')));
React.useEffect(()=>{
  localStorage.setItem('savedTodoList', JSON.stringify(todoList));
}, [todoList]);
  return [todoList, setTodoList]
};
function App() {
  
    const [todoList,setTodoList]=useSemiPersistentState();
    const addTodo = (newTodo) => {
      setTodoList([...todoList, newTodo])
    }
  function removeTodo(id){
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList([todoList, newTodoList]);
  };
  return (
    <>
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo={addTodo} />
      
      <TodoList  todoList={todoList} onRemoveTodo={removeTodo}/>

      <hr/>
    </>
  );
}
export default App;
