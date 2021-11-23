import React, { useEffect, useReducer } from "react";
import style from "./modules/ListContainer.module.css";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import todoListReducer, { actions } from "./todoListReducer";
import FilterButton from "./FilterButton";

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}`;
const authorization = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;

const bodyToEditTodoRecord = (id, value) =>
  JSON.stringify({
    records: [
      {
        id: id,
        fields: {
          Title: value,
        },
      },
    ],
  });

const bodyToUpdateTodoStatus = (id, value) =>
  JSON.stringify({
    records: [
      {
        id: id,
        fields: {
          isCompleted: value,
        },
      },
    ],
  });
  
function editTodoRecord(listName, id, value, body) {
  fetch(`${url}/${encodeURIComponent(listName)}`, {
    method: "PATCH",
    headers: {
      Authorization: authorization,
      "Content-Type": "application/json",
    },
    body: body(id, value),
  });
}
const FILTER_MAP = {
  All: () => true,
  Active: (todo) => todo.fields.isCompleted === "false",
  Completed: (todo) => todo.fields.isCompleted === "true",
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

//custom hook
const useSemiPersistentState = (listName) => {
  const [todoList, dispatchTodoList] = useReducer(todoListReducer, {
    data: [], //use an empty string as an initial state
    isLoading: true,
    isError: false,
  });
  const [filter, setFilter] = React.useState("All");

  useEffect(() => {
    /* dispatchTodoList({ type: actions.init }); */

    fetch(`${url}/${encodeURIComponent(listName)}`, {
      headers: {
        Authorization: authorization,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        result.records.sort((a, b) => {
          return a.createdTime > b.createdTime ? 1 : -1;
        });
        const data = result.records.filter(FILTER_MAP[filter]);

        dispatchTodoList({
          type: actions.fetchSuccess,
          payload: data,
        });
      })
      .catch(() => dispatchTodoList({ type: actions.fetchFail }));
  }, [listName, filter]);

  return [todoList, dispatchTodoList, filter, setFilter];
};

function ListContainer({ listName, handleUpdate }) {
  const [todoList, dispatchTodoList, filter, setFilter] =
    useSemiPersistentState(listName);

  const addTodo = (newTodo) => {
    fetch(`${url}/${encodeURIComponent(listName)}`, {
      method: "POST",
      headers: {
        Authorization: authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Title: newTodo,
              isCompleted: "false",
            },
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (filter === "All" || filter === "Active") {
          dispatchTodoList({
            type: actions.addTodo,
            payload: data.records[0],
          });
        }
        handleUpdate(listName, +1);
      })
      .catch(() => dispatchTodoList({ type: actions.fetchFail }));
  };

  const removeTodo = (id, isCompleted) => {
    fetch(`${url}/${encodeURIComponent(listName)}?records[]=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: authorization,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatchTodoList({
          type: actions.removeTodo,
          payload: data.records[0].id,
        });
        if (isCompleted === "false") {
          handleUpdate(listName, -1);
        }
      })
      .catch(() => dispatchTodoList({ type: actions.fetchFail }));
  };

  const editTodo = (id, value) => {
    editTodoRecord(listName, id, value, bodyToEditTodoRecord);
  };

  const changeTodoStatus = (id) => {
    const copyTodoList = todoList.data;
    copyTodoList.map((todo) => {
      if (todo.id === id) {
        if (todo.fields.isCompleted === "false") {
          todo.fields.isCompleted = "true";
          handleUpdate(listName, -1);
        } else {
          todo.fields.isCompleted = "false";
          handleUpdate(listName, 1);
        }

        const value = todo.fields.isCompleted;
        editTodoRecord(listName, todo.id, value, bodyToUpdateTodoStatus);
      }
    });
    dispatchTodoList({
      type: actions.updateTodoStatus,
      payload: copyTodoList,
    });
  };

  return (
    <div className={style.listContainer}>
      <h1 style={{ color: "darkred" }}>{listName}</h1>

      {todoList.isError && <p>Something went wrong ...</p>}

      {todoList.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {todoList.data[0] ? null : (
            <p>
              <strong>Lets add some items to tasks !</strong>
            </p>
          )}
          <TodoList
            todoList={todoList.data}
            onRemoveTodo={removeTodo}
            onEditTodo={editTodo}
            changeTodoStatus={changeTodoStatus}
          />
          <AddTodoForm onAddTodo={addTodo} />
          {FILTER_NAMES.map((name) => (
            <FilterButton
              key={name}
              name={name}
              isPressed={name === filter}
              setFilter={setFilter}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default ListContainer;
