import React, { useEffect, useReducer } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import todoListReducer, { actions } from "./todoListReducer";

//custom hook
const useSemiPersistentState = () => {
  const [todoList, dispatchTodoList] = useReducer(todoListReducer, {
    data: [], //use an empty string as an initial state
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    dispatchTodoList({ type: actions.init });

    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Todo List`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        result.records.sort((a, b) => {
          return a.createdTime > b.createdTime ? 1 : -1;
        });
        dispatchTodoList({
          type: actions.fetchSuccess,
          payload: result.records,
        });
      })
      .catch(() => dispatchTodoList({ type: actions.fetchFail }));
  }, []);

  return [todoList, dispatchTodoList];
};

function App() {
  const [todoList, dispatchTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Todo List`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Title: newTodo,
              },
            },
          ],
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        dispatchTodoList({
          type: actions.addTodo,
          payload: data.records[0],
        });
      })
      .catch(() => dispatchTodoList({ type: actions.fetchFail }));
  };

  const removeTodo = (id) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Todo List?records[]=${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        dispatchTodoList({
          type: actions.removeTodo,
          payload: id,
        });
      })
      .catch(() => dispatchTodoList({ type: actions.fetchFail }));
  };

  //add styles to the div element through creating a style object
  const divStyles = {
    backgroundColor: "lightblue",
    fontFamily: "Arial",
    fontSize: 20,
  };

  return (
    <div style={divStyles}>
      <h1 style={{ color: "darkred" }}>To Do List</h1>
      <AddTodoForm onAddTodo={addTodo} />

      {todoList.isError && <p>Something went wrong ...</p>}

      {todoList.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {todoList.data[0] ? (
            <p>
              Last item succcesfully added:{" "}
              <strong>
                {" "}
                {todoList.data[todoList.data.length - 1].fields.Title}{" "}
              </strong>
            </p>
          ) : null}
          <TodoList todoList={todoList.data} onRemoveTodo={removeTodo} />
        </>
      )}
    </div>
  );
}

export default App;
