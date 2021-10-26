import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
// import Airtable from "airtable";
// import useSemiPersistentState from "./persistState";
require("dotenv").config();

// const base = new Airtable({
//   apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
// }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Todo-List`;
const authorization = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;

const todoListReducer = (state, action) => {
  switch (action.type) {
    case "TODOLIST_FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "TODOLIST_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "HTTP_REQUEST_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMsg: action.payload,
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [todoList, dispatchTodoList] = React.useReducer(todoListReducer, {
    data: [],
    isLoading: false,
    isError: false,
    errMsg: {},
  });

  const fetchTodoList = () => {
    dispatchTodoList({type: "TODOLIST_FETCH_INIT"});
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatchTodoList({
          type: "TODOLIST_FETCH_SUCCESS",
          payload: data.records,
        });
      })
      .catch((err) => {
        dispatchTodoList({
          type: "HTTP_REQUEST_FAILURE",
          payload: err,
        });
      });
    // base("Todo-List")
    //   .select({
    //     view: "Grid view",
    //   })
    //   .firstPage((err, records) => {
    //     if (err) {
    //       dispatchTodoList({
    //         type: "HTTP_REQUEST_FAILURE",
    //         payload: err,
    //       });
    //       return;
    //     }
    //     dispatchTodoList({
    //       type: "TODOLIST_FETCH_SUCCESS",
    //       payload: records,
    //     });
    //   });
  };
  React.useEffect(() => {
    fetchTodoList();
  }, []);

  const addTodo = (newTodo) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify({
        fields: {
          Title: newTodo,
        },
      }),
    })
      .then((response) => response.json())

      .then((data) => {
        console.log(
          `Successfully added item #${data.id}, '${data.fields.Title}'`
        );
        fetchTodoList();
      })
      .catch((err) => {
        dispatchTodoList({
          type: "HTTP_REQUEST_FAILURE",
          payload: err,
        });
      });
    // base("Todo-List").create(
    //   {
    //     Title: newTodo,
    //   },
    //   (err, newRecord) => {
    //     if (err) {
    //       dispatchTodoList({
    //         type: "HTTP_REQUEST_FAILURE",
    //         payload: err,
    //       });
    //       return;
    //     }
    //     console.log(`Successfully added item #${newRecord}`);
    //     fetchTodoList();
    //   }
    // );
  };

  const removeTodo = (id) => {
    fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully deleted item #${data.id}`);
        fetchTodoList();
      })
      .catch((err) => {
        dispatchTodoList({
          type: "HTTP_REQUEST_FAILURE",
          payload: err,
        });
      });
    // base("Todo-List").destroy(id, (err, deletedRecord) => {
    //   if (err) {
    //     dispatchTodoList({
    //       type: "HTTP_REQUEST_FAILURE",
    //       payload: err,
    //     });
    //     return;
    //   }
    //   console.log(`Successfully deleted item #${deletedRecord.id}`);
    //   fetchTodoList();
    // });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {todoList.isError && (
        <p>
          <strong>SOMETHING WENT WRONG:</strong>&nbsp;{todoList.errMsg}
          {/* <strong>SOMETHING WENT WRONG:</strong>&nbsp;
          {todoList.errMsg.error}--{todoList.errMsg.message} */}
        </p>
      )}
      {todoList.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <TodoList todoList={todoList.data} onRemoveTodo={removeTodo} />
      )}
    </div>
  );
};

export default App;
