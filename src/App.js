import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
// import Airtable from "airtable";
// import useSemiPersistentState from "./persistState";
require("dotenv").config();

// const base = new Airtable({
//   apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
// }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

const readingURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Reading-List`;
const homeworkURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Homework-List`;
const view = "?view=Grid+view";
const authorization = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;

const readingListReducer = (state, action) => {
  switch (action.type) {
    case "READINGLIST_FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "READINGLIST_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_REQUEST_FAILURE":
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

const homeworkListReducer = (state, action) => {
  switch (action.type) {
    case "HOMEWORKLIST_FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "HOMEWORKLIST_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "HOMEWORK_REQUEST_FAILURE":
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
  const [readingList, dispatchReadingList] = React.useReducer(
    readingListReducer,
    {
      data: [],
      isLoading: false,
      isError: false,
      errMsg: {},
    }
  );

  const [homeworkList, dispatchHomeworkList] = React.useReducer(
    homeworkListReducer,
    {
      data: [],
      isLoading: false,
      isError: false,
      errMsg: {},
    }
  );

  const fetchReadingList = () => {
    dispatchReadingList({type: "READINGLIST_FETCH_INIT"});
    fetch(readingURL + view, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatchReadingList({
          type: "READINGLIST_FETCH_SUCCESS",
          payload: data.records,
        });
      })
      .catch((err) => {
        dispatchReadingList({
          type: "FETCH_REQUEST_FAILURE",
          payload: err,
        });
      });
    // base("Reading-List")
    //   .select({
    //     view: "Grid view",
    //   })
    //   .firstPage((err, records) => {
    //     if (err) {
    //       dispatchReadingList({
    //         type: "HTTP_REQUEST_FAILURE",
    //         payload: err,
    //       });
    //       return;
    //     }
    //     dispatchReadingList({
    //       type: "TODOLIST_FETCH_SUCCESS",
    //       payload: records,
    //     });
    //   });
  };

  const fetchHomeworkList = () => {
    dispatchHomeworkList({type: "HOMEWORKLIST_FETCH_INIT"});
    fetch(homeworkURL + view, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatchHomeworkList({
          type: "HOMEWORKLIST_FETCH_SUCCESS",
          payload: data.records,
        });
      })
      .catch((err) => {
        dispatchHomeworkList({
          type: "HOMEWORK_REQUEST_FAILURE",
          payload: err,
        });
      });
  };

  React.useEffect(() => {
    fetchReadingList();
    fetchHomeworkList();
  }, []);

  const addReading = (newReading) => {
    fetch(readingURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify({
        fields: {
          Title: newReading,
        },
      }),
    })
      .then((response) => response.json())

      .then((data) => {
        console.log(
          `Successfully added item #${data.id}, '${data.fields.Title}'`
        );
        fetchReadingList();
      })
      .catch((err) => {
        dispatchReadingList({
          type: "HTTP_REQUEST_FAILURE",
          payload: err,
        });
      });
    // base("Reading-List").create(
    //   {
    //     Title: newReading,
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

  const addHomework = (newHomework) => {
    fetch(homeworkURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify({
        fields: {
          Task: newHomework,
        },
      }),
    })
      .then((response) => response.json())

      .then((data) => {
        console.log(
          `Successfully added item #${data.id}, '${data.fields.Task}'`
        );
        fetchHomeworkList();
      })
      .catch((err) => {
        dispatchHomeworkList({
          type: "HOMEWORK_REQUEST_FAILURE",
          payload: err,
        });
      });
  };

  const removeReading = (id) => {
    fetch(readingURL + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully deleted item #${data.id}`);
        fetchReadingList();
      })
      .catch((err) => {
        dispatchReadingList({
          type: "FETCH_REQUEST_FAILURE",
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

  const removeHomework = (id) => {
    fetch(homeworkURL + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully deleted item #${data.id}`);
        fetchHomeworkList();
      })
      .catch((err) => {
        dispatchHomeworkList({
          type: "HOMEWORK_REQUEST_FAILURE",
          payload: err,
        });
      });
  };

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <div>
            <h1>Todo Lists</h1>
            <nav>
              <ul>
                <li>
                  <Link to='/readings'>Readings Todo</Link>
                </li>
                <li>
                  <Link to='/homework'>Homework Todo</Link>
                </li>
              </ul>
            </nav>
          </div>
        </Route>
        <Route path='/readings'>
          <div>
            <AddTodoForm onAddTodo={addReading}>
              {
                <Link to='/' exact>
                  &#127968;
                </Link>
              }
            </AddTodoForm>
            <hr />
            <h2>Readings List</h2>
            {readingList.isError && (
              <p>
                <strong>SOMETHING WENT WRONG:</strong>&nbsp;{readingList.errMsg}
                {/* <strong>SOMETHING WENT WRONG:</strong>&nbsp;
          {todoList.errMsg.error}--{todoList.errMsg.message} */}
              </p>
            )}
            {readingList.isLoading ? (
              <p>Loading ...</p>
            ) : (
              <TodoList
                todoList={readingList.data}
                onRemoveTodo={removeReading}
              />
            )}
          </div>
        </Route>
        <Route path='/homework'>
          <div>
            <AddTodoForm onAddTodo={addHomework}>
              <Link to='/' exact>
                &#127968;
              </Link>
            </AddTodoForm>
            <hr />
            <h2>Homework List</h2>
            {homeworkList.isError && (
              <p>
                <strong>SOMETHING WENT WRONG:</strong>&nbsp;
                {homeworkList.errMsg}
                {/* <strong>SOMETHING WENT WRONG:</strong>&nbsp;
          {todoList.errMsg.error}--{todoList.errMsg.message} */}
              </p>
            )}
            {homeworkList.isLoading ? (
              <p>Loading ...</p>
            ) : (
              <TodoList
                todoList={homeworkList.data}
                onRemoveTodo={removeHomework}
              />
            )}
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
