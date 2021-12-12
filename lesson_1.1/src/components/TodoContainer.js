import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import PropTypes from "prop-types";

function TodoContainer(props) {
  const addTodo = (newTodo) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${props.tableName}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      }
    )
      .then((response) => response.json())
      .then((serverResponseTodo) =>
        setTodoList([...todoList, serverResponseTodo])
      );
  };

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(process.env.REACT_APP_AIRTABLE_API_KEY);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${props.tableName}?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        data.records.sort((objectA, objectB) => {
          if (objectA.fields.Title < objectB.fields.Title){
            return -1
          } else if (objectA.fields.Title === objectB.fields.Title){
             return 0
          } else {
             return 1
           }
        })
        setTodoList(data.records);
        setIsLoading(false);
      });
  }, [props.tableName]);
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  function removeTodo(id) {
    const newTodoList = todoList.filter(function (item) {
      return item.id !== id;
    });
    setTodoList(newTodoList);
  }

  return (
    <div>
      <h1>{props.tableName}</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </div>
  );
}
TodoContainer.prototype = {
  tableName: PropTypes.string,
};
export default TodoContainer;
