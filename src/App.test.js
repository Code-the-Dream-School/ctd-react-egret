import * as React from "react";
import {
  render,
  screen,
  fireEvent,
  userEvent,
  act,
} from "@testing-libraray/react";
import App, {todoListReducer} from "./App";
import AddTodosAndForm from "./AddTodosAndForm";
import AddTodoForm from "./AddTodoForm";
import InputWithLabel from "./InputWithLabel";
import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";

/*
Declare Mock Test Data
*/

const readingTodos = [
  {
    id: 1,
    fields: {
      Task: "Pull all the changes from origin to local main",
    },
  },
  {
    id: 2,
    fields: {
      Task: "Create a new branch lesson-4-1 to do work",
    },
  },
];

const homeworkTodos = [
  {
    id: 3,
    fields: {
      Task: "Read all the Road to React chapters assigned for this week",
    },
  },
  {
    id: 4,
    fields: {
      Task: "Complete all the exercises prescribed in the Road to React book",
    },
  },
];

/*
Test Suites
*/

// describe("App", () => { });

// For todoListReducer in App component

describe("todoListReducer", () => {
  test("fetch new readingTodos pending", () => {
    const action = {type: "TODOLIST_FETCH_INIT"};
    const state = {
      data: [],
      isLoading: true,
      isError: false,
    };
    const newState = todoListReducer(state, action);
    const expectedState = {
      data: [],
      isLoading: true,
      isError: false,
    };

    expect(newState).toStrictEqual(expectedState);
  });
});
