import React, { useEffect, useReducer } from "react";
import style from "./modules/ListContainer.module.css";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import todoListReducer, { actions } from "./todoListReducer";

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
  fetch(
    `https://api.airtable.com/v0/${
      process.env.REACT_APP_AIRTABLE_BASE_ID
    }/${encodeURIComponent(listName)}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: body(id, value),
    }
  );
}

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
                isCompleted: "false",
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
        handleUpdate(listName, +1);
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
        handleUpdate(listName, -1);
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
        } else {
          todo.fields.isCompleted = "false";
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
      <AddTodoForm onAddTodo={addTodo} />

      {todoList.isError && <p>Something went wrong ...</p>}

      {todoList.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {todoList.data[0] ? null : (
            <p>
              <strong>Lets add some items to do!</strong>
            </p>
          )}
          <TodoList
            todoList={todoList.data}
            onRemoveTodo={removeTodo}
            onEditTodo={editTodo}
            changeTodoStatus={changeTodoStatus}
          />
        </>
      )}
    </div>
  );
}

export default ListContainer;
