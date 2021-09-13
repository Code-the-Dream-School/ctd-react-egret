import React from 'react';
import TodoListItem from './TodoListItem';

const todolist = [
    {
      id: '1 ',
      title: 'Read assigment'
    },
    {
      id: '2 ',
      title: 'Watch Videos'
    },
    {
      id: '3 ',
      title: 'Complete and submit assignment'
    },
    ];
function TodoList (){
return(
<ul>
   {todolist.map(function(item){
  return (
  <TodoListItem key={item.id} todo={item}/>
  );
  })}
  </ul>

)}
export default TodoList;