import React from "react";
import {Switch, Route} from "react-router-dom";
import AddTodosAndForm from "./AddTodosAndForm";
import SideBar from "./SideBar";
import RotatingRing from "./RotatingRing";
// import Airtable from "airtable";
// import useSemiPersistentState from "./persistState";

// const base = new Airtable({
//   apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
// }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

const baseUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/`;
const view = "?view=Grid+view";
const authorization = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;

export const todoListReducer = (state, action) => {
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
    case "TODOLIST_FETCH_FAILURE":
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
        console.log(
          `Successfully added item ID ${data.id}, ${data.fields.Task} to ${route}`
        );
        route === "Reading"
          ? setReadingTodos([...readingTodos, data])
          : setHomeworkTodos([...homeworkTodos, data]);
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
    //     route === "Reading"
    //       ? setReadingTodos([...readingTodos, data])
    //       : setHomeworkTodos([...homeworkTodos, data]);
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
        console.log(`Successfully deleted item ID ${data.id} from ${route}`);
        route === "Reading"
          ? setReadingTodos(readingTodos.filter((item) => item.id !== id))
          : setHomeworkTodos(homeworkTodos.filter((item) => item.id !== id));
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
    //   route === "Reading"
    //     ? setReadingTodos(readingTodos.filter((item) => item.id !== id))
    //     : setHomeworkTodos(homeworkTodos.filter((item) => item.id !== id));
    // });
  };

  return (
    <div className='container'>
      <SideBar
        readingLength={readingTodos.length}
        homeworkLength={homeworkTodos.length}
      />
      <Switch>
        <Route path='/Reading'>
          <AddTodosAndForm
            onAddTodo={addTodo}
            onRemoveTodo={removeTodo}
            todoList={readingTodos}
            fetchStatus={fetchStatus}>
            Reading
          </AddTodosAndForm>
        </Route>
        <Route path='/Homework'>
          <AddTodosAndForm
            onAddTodo={addTodo}
            onRemoveTodo={removeTodo}
            todoList={homeworkTodos}
            fetchStatus={fetchStatus}>
            Homework
          </AddTodosAndForm>
        </Route>
        <Route path='/'>
          <RotatingRing />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
