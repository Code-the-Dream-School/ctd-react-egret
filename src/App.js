import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import AddTodosAndForm from "./AddTodosAndForm";
import HomePage from "./HomePage";
// import Airtable from "airtable";
// import useSemiPersistentState from "./persistState";
require("dotenv").config();

// const base = new Airtable({
//   apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
// }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

const baseUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/`;
const view = "?view=Grid+view";
const authorization = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;
const homeLink = <Link to='/'>&#127968;</Link>;

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
      };
    case "TODOLIST_REQUEST_FAILURE":
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
  const [fetchStatus, dispatchFetchStatus] = React.useReducer(todoListReducer, {
    isLoading: false,
    isError: false,
    errMsg: {},
  });

  const [readingTodos, setReadingTodos] = React.useState([]);

  const [homeworkTodos, setHomeworkTodos] = React.useState([]);

  const fetchTodoList = (route) => {
    dispatchFetchStatus({type: "TODOLIST_FETCH_INIT"});
    fetch(baseUrl + route + view, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatchFetchStatus({type: "TODOLIST_FETCH_SUCCESS"});
        route === "Reading"
          ? setReadingTodos(data.records)
          : setHomeworkTodos(data.records);
      })
      .catch((err) => {
        dispatchFetchStatus({
          type: "TODOLIST_FETCH_FAILURE",
          payload: err,
        });
      });
    // base(route)
    //   .select({
    //     view: "Grid view",
    //   })
    //   .firstPage((err, records) => {
    //     if (err) {
    //       dispatchFetchStatus({
    //         type: "TODOLIST_FETCH_FAILURE",
    //         payload: err,
    //       });
    //       return;
    //     }
    //     dispatchFetchStatus({type: "TODOLIST_FETCH_SUCCESS"});
    //     route === "Reading" ? setReadingTodos(records) : setHomeworkTodos(records);
    //   });
  };

  React.useEffect(() => {
    fetchTodoList("Reading");
    fetchTodoList("Homework");
  }, []);

  const addTodo = (route, newTodo) => {
    fetch(baseUrl + route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify({
        fields: {
          Task: newTodo,
        },
      }),
    })
      .then((response) => response.json())

      .then((data) => {
        // console.log(data);
        console.log(
          `Successfully added item #${data.id}, ${data.fields.Task} to ${route}`
        );
        fetchTodoList(route);
      })
      .catch((err) => {
        dispatchFetchStatus({
          type: "TODOLIST_FETCH_FAILURE",
          payload: err,
        });
      });
    // base(route).create(
    //   {
    //     Task: newReading,
    //   },
    //   (err, newRecord) => {
    //     if (err) {
    //       dispatchFetchStatus({
    //         type: "TODOLIST_FETCH_FAILURE",
    //         payload: err,
    //       });
    //       return;
    //     }
    //     console.log(`Successfully added item #${newRecord} to ${route}`);
    //     fetchTodoList(route);
    //   }
    // );
  };

  const removeTodo = (route, id) => {
    fetch(baseUrl + route + `/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully deleted item #${data.id} from ${route}`);
        fetchTodoList(route);
      })
      .catch((err) => {
        dispatchFetchStatus({
          type: "TODOLIST_FETCH_FAILURE",
          payload: err,
        });
      });
    // base(base).destroy(id, (err, deletedRecord) => {
    //   if (err) {
    //     dispatchFetchStatus({
    //       type: "TODOLIST_FETCH_FAILURE",
    //       payload: err,
    //     });
    //     return;
    //   }
    //   console.log(`Successfully deleted item #${deletedRecord.id} from ${route}`);
    //   fetchTodoList(route);
    // });
  };

  return (
    <div className='container'>
      <Switch>
        <Route path='/Reading'>
          <AddTodosAndForm
            onAddTodo={addTodo}
            onRemoveTodo={removeTodo}
            todoList={readingTodos}
            fetchStatus={fetchStatus}>
            {[homeLink, "Reading"]}
          </AddTodosAndForm>
        </Route>
        <Route path='/Homework'>
          <AddTodosAndForm
            onAddTodo={addTodo}
            onRemoveTodo={removeTodo}
            todoList={homeworkTodos}
            fetchStatus={fetchStatus}>
            {[homeLink, "Homework"]}
          </AddTodosAndForm>
        </Route>
        <Route path='/'>
          <HomePage
            readingLength={readingTodos.length}
            homeworkLength={homeworkTodos.length}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
