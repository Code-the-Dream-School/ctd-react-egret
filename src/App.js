import React from "react";
import {Switch, Route} from "react-router-dom";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import SideBar from "./components/SideBar/SideBar";
import FireRing from "./components/FireRing/FireRing";
// import Airtable from "airtable";
// import useSemiPersistentState from "./persistState";

// const base = new Airtable({
//   apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
// }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

const baseUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/`;
const view = "?view=Grid+view";
// const sort = "&sort[0][field]=Task";
// const sortDir = "&sort[0][direction]=asc";
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

// const sortData = (records) => {
//   return records.sort((a, b) => {
//     const taskA = a.fields["Task"];
//     const taskB = b.fields["Task"];
//     return taskA < taskB ? -1 : taskA > taskB ? 1 : 0;
//   });
// };

// const reverseSortData = (records) => {
//   return records.sort((a, b) => {
//     const taskA = a.fields["Task"];
//     const taskB = b.fields["Task"];
//     return taskA < taskB ? 1 : taskA > taskB ? -1 : 0;
//   });
// };

const App = () => {
  const [fetchStatus, dispatchFetchStatus] = React.useReducer(todoListReducer, {
    isLoading: true,
    isError: false,
    errMsg: {},
  });

  const [readingTodos, setReadingTodos] = React.useState({
    list: [],
    isReverse: false,
  });
  const [homeworkTodos, setHomeworkTodos] = React.useState({
    list: [],
    isReverse: false,
  });

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
        // const sortedData = sortData(data.records);
        // const reverseSortedData = reverseSortData(data.records);
        route === "Reading"
          ? setReadingTodos({list: data.records, isReverse: true})
          : setHomeworkTodos({list: data.records, isReverse: true});
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
          `Successfully added item ID ${data.id}, ${data.fields.Task} to ${route} datatable`
        );
        route === "Reading"
          ? setReadingTodos({
              list: [...readingTodos.list, data],
              isReverse: readingTodos.isReverse,
            })
          : setHomeworkTodos({
              list: [...homeworkTodos.list, data],
              isReverse: homeworkTodos.isReverse,
            });
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
        console.log(
          `Successfully deleted item ID ${data.id} from ${route} datatable`
        );
        route === "Reading"
          ? setReadingTodos({
              list: readingTodos.list.filter((item) => item.id !== id),
              isReverse: readingTodos.isReverse,
            })
          : setHomeworkTodos({
              list: homeworkTodos.list.filter((item) => item.id !== id),
              isReverse: homeworkTodos.isReverse,
            });
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
        readingLength={readingTodos.list.length}
        homeworkLength={homeworkTodos.list.length}
      />
      <Switch>
        <Route path='/Reading'>
          <TodoContainer
            onAddTodo={addTodo}
            onRemoveTodo={removeTodo}
            todoList={readingTodos}
            setTodoList={setReadingTodos}
            fetchStatus={fetchStatus}>
            Reading
          </TodoContainer>
        </Route>
        <Route path='/Homework'>
          <TodoContainer
            onAddTodo={addTodo}
            onRemoveTodo={removeTodo}
            todoList={homeworkTodos}
            setTodoList={setHomeworkTodos}
            fetchStatus={fetchStatus}>
            Homework
          </TodoContainer>
        </Route>
        <Route path='/'>
          <FireRing />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
