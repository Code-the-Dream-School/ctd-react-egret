import React from 'react';
import TodoListItem from './TodoListItem';


function TodoList ({todoList, onRemoveTodo,removeTodo}){
return(
<ul>
   {todoList.map(function(item){
  return (
  <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo}/>
  );
  })}
  </ul>

)}
export default TodoList;