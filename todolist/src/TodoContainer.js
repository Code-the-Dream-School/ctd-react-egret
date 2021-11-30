import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function TodoContainer(props) {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${props.tableName}`,
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        console.log(data);
        setTodoList(data.records);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  function removeTodo(id) {
    let filtered = todoList.filter((x) => x.id !== id);
    setTodoList(filtered);
  }
  function addTodo(newTodo) {
    addItem(newTodo);
    setTodoList([...todoList, newTodo]);
  }
  const addItem = (todoItem) => {
    const body = {
      records: [
        {
          fields: {
            Title: todoItem.fields.Title,
          },
        },
      ],
    };
    const airtableResult = fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${props.tableName}`,

      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    ).then((r) => r.json());
  };
  return (
    <div>
      <h1>{props.tableName}</h1>

      <AddTodoForm onAddTodo={addTodo} />

      {isLoading ? (
        <p>...is Loading</p>
      ) : (
        <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
      )}
    </div>
  );
}
export default TodoContainer;
