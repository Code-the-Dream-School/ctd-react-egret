import React from 'react';

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
  <li key= {item.objectID}>
    <span>{item.id}</span>
    <span>{item.title}</span>
  </li>
  );
  })}
  </ul>

)}
export default TodoList;