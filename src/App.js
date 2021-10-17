import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
// import useSemiPersistentState from "./persistState";

const getAsyncTodoList = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("todoList")) || [],
          },
        }),
      2000
    )
  );

const [
  todoListFetchInit,
  todoListFetchSuccess,
  todoListFetchFailure,
  addTodoItem,
  removeTodoItem,
] = [
  "TODOLIST_FETCH_INIT",
  "TODOLIST_FETCH_SUCCESS",
  "TODOLIST_FETCH_FAILURE",
  "ADD_TODO_ITEM",
  "REMOVE_TODO_ITEM",
];

const todoListReducer = (state, action) => {
  switch (action.type) {
    case todoListFetchInit:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case todoListFetchSuccess:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case todoListFetchFailure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case addTodoItem:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case removeTodoItem:
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [todoList, dispatchTodoList] = React.useReducer(todoListReducer, {
    data: [],
    isLoading: true,
    isError: false,
  });

  React.useEffect(() => {
    dispatchTodoList({type: todoListFetchInit});
    getAsyncTodoList()
      .then((result) => {
        dispatchTodoList({
          type: todoListFetchSuccess,
          payload: result.data.todoList,
        });
      })
      .catch(() => {
        dispatchTodoList({type: todoListFetchFailure});
      });
  }, []);

  React.useEffect(() => {
    if (!todoList.isLoading)
      localStorage.setItem("todoList", JSON.stringify(todoList.data));
  }, [todoList]);

  const addTodo = (newTodo) => {
    dispatchTodoList({
      type: addTodoItem,
      payload: newTodo,
    });
  };

  const removeTodo = (id) => {
    dispatchTodoList({
      type: removeTodoItem,
      payload: id,
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {todoList.isError && <p>Something went wrong ...</p>}
      {todoList.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <TodoList todoList={todoList.data} onRemoveTodo={removeTodo} />
      )}
    </div>
  );
};

export default App;
