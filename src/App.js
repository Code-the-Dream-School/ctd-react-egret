import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import AddReadingsTodoForm from "./AddReadingsTodoForm";
import AddHomeworkTodoForm from "./AddHomeworkTodoForm";
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
const homeLink = <Link to='/'>&#127968;</Link>;

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
    <div>
      <Switch>
        <Route path='/readings'>
          <AddReadingsTodoForm
            onAddReading={addReading}
            onRemoveReading={removeReading}
            readingList={readingList}>
            {homeLink}
          </AddReadingsTodoForm>
        </Route>
        <Route path='/homework'>
          <AddHomeworkTodoForm
            onAddHomework={addHomework}
            onRemoveHomework={removeHomework}
            homeworkList={homeworkList}>
            {homeLink}
          </AddHomeworkTodoForm>
        </Route>
        <Route path='/'>
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
      </Switch>
    </div>
  );
};

export default App;
