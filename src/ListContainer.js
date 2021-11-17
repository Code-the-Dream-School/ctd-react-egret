import React, { useEffect, useReducer } from "react";
import style from "./modules/ListContainer.module.css"
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import todoListReducer, { actions } from "./todoListReducer";

//custom hook
const useSemiPersistentState = (listName) => {
  const [todoList, dispatchTodoList] = useReducer(todoListReducer, {
    data: [], //use an empty string as an initial state
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    /* dispatchTodoList({ type: actions.init }); */

    fetch(
      `https://api.airtable.com/v0/${
        process.env.REACT_APP_AIRTABLE_BASE_ID
      }/${encodeURIComponent(listName)}`,
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
  }, [listName]);

  return [todoList, dispatchTodoList];
};

function ListContainer({ listName, handleUpdate }) {
  const [todoList, dispatchTodoList] = useSemiPersistentState(listName);

  const addTodo = (newTodo) => {
    fetch(
      `https://api.airtable.com/v0/${
        process.env.REACT_APP_AIRTABLE_BASE_ID
      }/${encodeURIComponent(listName)}`,
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
                isCompleted: 'false',
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
        handleUpdate(listName, +1)
      })
      .catch(() => dispatchTodoList({ type: actions.fetchFail }));
  };

  const removeTodo = (id) => {
    fetch(
      `https://api.airtable.com/v0/${
        process.env.REACT_APP_AIRTABLE_BASE_ID
      }/${encodeURIComponent(listName)}?records[]=${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        dispatchTodoList({
          type: actions.removeTodo,
          payload: data.records[0].id,
        });
        handleUpdate(listName, -1)
      })
      .catch(() => dispatchTodoList({ type: actions.fetchFail }));
  };
  
  const changeTodoStatus = (id) => {
    const copyTodoList = todoList.data
    console.log(copyTodoList)
    copyTodoList.map((todo) => {
      if(todo.id === id) {
        if(todo.fields.isCompleted === 'false') {
          todo.fields.isCompleted = 'true'
        } else {
          todo.fields.isCompleted = 'false'
        }
      }
    })
    
    dispatchTodoList({
      type: actions.updateTodoStatus,
      payload: copyTodoList
    })
  }
  
  console.log(todoList)
  return (
    <div className={style.listContainer}>
      <h1 style={{ color: "darkred" }}>{listName}</h1>
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
          <TodoList 
            todoList={todoList.data} 
            onRemoveTodo={removeTodo} 
            changeTodoStatus={changeTodoStatus}
          />
        </>
      )}
    </div>
  );
}

export default ListContainer;
