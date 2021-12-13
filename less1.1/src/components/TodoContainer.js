import React, { useState } from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';


const sortTodoItems = (objectA, objectB) => {
  if (objectA.fields.Title < objectB.fields.Title) {
    return -1;
  }
  if (objectA.fields.Title > objectB.fields.Title) {
    return 1;
  }
  // objectA.Title = objectB.Title
  return 0;
}

function TodoContainer({ tableName}) {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        fetch(
          // sorting how it's in airtable order
          // `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view`, 
          //sorting list items now appear in alphabetical order by "Title"
          // `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?sort[0][field]=Title`, 
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,     
            },
          }
        ).then((resp) => resp.json())
        .then((data) => {
          data.records.sort(sortTodoItems);
          setTodoList(data.records);
          setIsLoading(false);
        })
      }, [tableName]);

      React.useEffect(
        () => {
          console.log({todoList});
          if (isLoading === false) {
          localStorage.setItem('savedTodoList', JSON.stringify(todoList));}
        },
        [todoList, isLoading]
      );    

      const addTodo = (newTodo) => { 
        const request = {
          "records": [
            {
              "fields": {
                      "Title": newTodo.fields.Title
                     },
            }
          ]
        };
        fetch(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}`, 
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,     
            },
            body: JSON.stringify(request)
          }
        ).then((respReturn) => respReturn.json())
        .then((data) => {
          const addedItem = data.records[0];
          const newTodoList = [...todoList, addedItem];
          newTodoList.sort(sortTodoItems);
          setTodoList(newTodoList);
        })
      };  

      const removeTodo = (id) => {
        fetch(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}?records[]=${id}`, 
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,     
            },
          }
        ).then((respReturn) => respReturn.json())
        .then((data) => {
          console.log({deleting: data});
          const newTodoList = todoList.filter(
          (item) => item.id !== id
          )
          setTodoList(newTodoList);
        })
    
      };

      return (
        <> 
        <h1>{tableName}</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <p>{isLoading ?'Loading...' : null}</p>
        <TodoList  todoList={todoList} onRemoveTodo = {removeTodo}/>
        </>
      )


}



export default TodoContainer;