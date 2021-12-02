import React, { useEffect, useReducer } from "react";
import style from "./modules/ListContainer.module.css";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import todoListReducer, { actions } from "./todoListReducer";
import FilterButton from "./FilterButton";
import PropTypes from "prop-types";
import ClearCompletedButton from "./ClearCompletedButton";

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}`;
const authorization = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;
const todoStatusDone = true;
const todoStatusNotDone = false;

//body to pass to fetch request when edit a title value
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
//body to pass to fetch request when update a isCompleted todo status (done or not)
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
//func to edit todo title value
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
//object where the keys are filter values and values are functions to be passed to filter method
const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.fields.isCompleted,
  Completed: (todo) => todo.fields.isCompleted === todoStatusDone,
};
//object that consist of only filter names
const FILTER_NAMES = Object.keys(FILTER_MAP);

//custom hook
const useSemiPersistentState = (listName) => {
  const [todoList, dispatchTodoList] = useReducer(todoListReducer, {
    data: [], //use an empty string as an initial state
    isLoading: true,
    isError: false,
  });
  const [filter, setFilter] = React.useState("All"); //init filter with 'All' to see all tasks

  useEffect(() => {
    /* dispatchTodoList({ type: actions.init }); */

    fetch(`${url}/${encodeURIComponent(listName)}`, {
      headers: {
        Authorization: authorization,
      },
    })
      .then((response) => {
        /* console.log(response) */
        return response.json();
      })
      .then((result) => {
        /* console.log(result) */
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
  console.log("in custom hook");
  return [todoList, dispatchTodoList, filter, setFilter];
};

function ListContainer({ listName, handleUpdate }) {
  const [todoList, dispatchTodoList, filter, setFilter] =
    useSemiPersistentState(listName);

  //add new todo to the list at Airtable
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
            },
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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

  //remove todo from Airtable
  const removeTodo = (id, isCompleted) => {
    console.log(id);
    console.log(`${url}/${encodeURIComponent(listName)}/${id}`);
    fetch(`${url}/${encodeURIComponent(listName)}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: authorization,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatchTodoList({
          type: actions.removeTodo,
          payload: data.id,
        });
        if (!isCompleted && isCompleted != undefined) {
          handleUpdate(listName, -1);
        }
      })
      .catch(() => dispatchTodoList({ type: actions.fetchFail }));
  };

  //edit todo at Airtable
  const editTodo = (id, value) => {
    editTodoRecord(listName, id, value, bodyToEditTodoRecord);
  };

  //change todo status at Airtable
  const changeTodoStatus = (id) => {
    const copyTodoList = todoList.data;
    copyTodoList.map((todo) => {
      if (todo.id === id) {
        if (!todo.fields.isCompleted) {
          todo.fields.isCompleted = todoStatusDone;
          handleUpdate(listName, -1);
        } else {
          todo.fields.isCompleted = todoStatusNotDone;
          handleUpdate(listName, 1);
        }

        const value = todo.fields.isCompleted;
        console.log(value);
        editTodoRecord(listName, todo.id, value, bodyToUpdateTodoStatus);
      }
    });
    dispatchTodoList({
      type: actions.updateTodoStatus,
      payload: copyTodoList,
    });
  };

  //clear completed todo function
  const clearCompleted = () => {
    const idsTobeRemoved = [];
    const tobeRemoved = todoList.data.filter((todo) => todo.fields.isCompleted);

    tobeRemoved.forEach((item) => {
      idsTobeRemoved.push(item.id);
    });
    const deleteRecordList =
      "?records[]=" + idsTobeRemoved.toString().replace(/,/gi, "&records[]=");

    removeTodo(deleteRecordList);
    dispatchTodoList({
      type: actions.clearCompletedTodos,
      payload: todoList.data.filter((todo) => !todo.fields.isCompleted),
    });
  };
  console.log(todoList);
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
            todoStatusDone={todoStatusDone}
            todoStatusNotDone={todoStatusNotDone}
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
          <ClearCompletedButton clearCompleted={clearCompleted} />
        </>
      )}
    </div>
  );
}

ListContainer.propTypes = {
  listName: PropTypes.string.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default ListContainer;
