import * as React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {render, screen, fireEvent, act} from "@testing-library/react";
import TodoContainer from "./components/TodoContainer";
import App, {todoListReducer} from "./App";
import AddTodoForm from "./components/AddTodoForm";
import InputWithLabel from "./components/InputWithLabel";
import SideBar, {TodoCard} from "./components/SideBar";
import FireRing from "./components/FireRing";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";

/*
Declare Mock Test Data
*/

const homeworkTodos = [
  {
    id: "1",
    fields: {
      Task: "Pull all the changes from origin to local main",
    },
  },
  {
    id: "2",
    fields: {
      Task: "Create a new branch lesson-4-1 to do work",
    },
  },
];

const readingTodos = [
  {
    id: "3",
    fields: {
      Task: "Read all the Road to React chapters assigned for this week",
    },
  },
  {
    id: "4",
    fields: {
      Task: "Complete all the exercises prescribed in the Road to React book",
    },
  },
];

/*
Unit Test - Function
*/

// For todoListReducer in App component
describe("todoListReducer", () => {
  const state = {
    isLoading: true,
    isError: false,
    errMsg: {},
  };

  test("shows 'Loading' indicator while fetching data", () => {
    const action = {
      type: "TODOLIST_FETCH_INIT",
    };
    const newState = todoListReducer(state, action);
    const expectedState = {
      isLoading: true,
      isError: false,
      errMsg: {},
    };

    expect(newState).toStrictEqual(expectedState);
  });

  test("returns error message on fetch failure", () => {
    const action = {
      type: "TODOLIST_FETCH_FAILURE",
      payload: "Huston, we have a problem",
    };
    const newState = todoListReducer(state, action);
    const expectedState = {
      isLoading: false,
      isError: true,
      errMsg: "Huston, we have a problem",
    };

    expect(newState).toStrictEqual(expectedState);
  });

  test("removes loading indicator on fetch success", () => {
    const action = {
      type: "TODOLIST_FETCH_SUCCESS",
    };
    const newState = todoListReducer(state, action);
    const expectedState = {
      isLoading: false,
      isError: false,
      errMsg: {},
    };

    expect(newState).toStrictEqual(expectedState);
  });
});

/*
Unit Test - Component
*/

// For FireRing
describe("FireRing", () => {
  test("renders an image tag with proper class and link", () => {
    render(<FireRing />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveClass("ring");
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://i.imgur.com/3FEaiiS.png"
    );
  });

  test("renders snapshot", () => {
    const {fireRing} = render(<FireRing />);
    expect(fireRing).toMatchSnapshot();
  });
});

// For TodoListItem
describe("TodoListItem", () => {
  const todoListItemProps = {
    item: homeworkTodos[0],
    listName: "Homework",
    onRemoveTodo: jest.fn(),
  };
  test("renders a list item with .todoItem class and correct text content", () => {
    render(<TodoListItem {...todoListItemProps} />);

    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toHaveClass("todoItem");
    expect(screen.getByRole("listitem")).toHaveTextContent(/all the changes/);
  });

  test("renders a button with .removeButton class and an svg child ", () => {
    render(<TodoListItem {...todoListItemProps} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("removeButton");
    expect(screen.getByRole("button")).toContainHTML("<svg>check.svg</svg>");
  });

  test("calls onRemoveTodo() when the button is clicked", () => {
    render(<TodoListItem {...todoListItemProps} />);

    fireEvent.click(screen.getByRole("button"));

    expect(todoListItemProps.onRemoveTodo).toHaveBeenCalledTimes(1);
  });

  test("renders snapshot", () => {
    const {todoListItem} = render(<TodoListItem {...todoListItemProps} />);
    expect(todoListItem).toMatchSnapshot();
  });
});

// For TodoList
describe("TodoList", () => {
  const todoListProps = {
    todoList: readingTodos,
    listName: "Reading",
    onRemoveTodo: jest.fn(),
  };

  test("renders an unordered list with proper class and length", () => {
    render(<TodoList {...todoListProps} />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("list")).toHaveClass("todoList");
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  test("renders a list of specific todo Tasks", () => {
    render(<TodoList {...todoListProps} />);

    expect(screen.getByText(/Road to React chapters/)).toBeInTheDocument();
    expect(screen.getByText(/all the exercises/)).toBeInTheDocument();
  });

  test("renders snapshot", () => {
    const {todoList} = render(<TodoList {...todoListProps} />);
    expect(todoList).toMatchSnapshot();
  });
});

// For InputWithLabel
describe("InputWithLabel", () => {
  const inputWithLabelProps = {
    title: "Complete assignments",
    isFocused: true,
    onTitleChange: jest.fn(),
    children: "Add Todo:",
  };

  test("renders the correct label with .todoLabel class", () => {
    render(<InputWithLabel {...inputWithLabelProps} />);

    expect(
      screen.getByLabelText(inputWithLabelProps.children)
    ).toBeInTheDocument(); // or
    expect(screen.getByTestId("todo-label")).toHaveTextContent(
      inputWithLabelProps.children
    );
    expect(screen.getByTestId("todo-label")).toHaveClass("todoLabel");
  });

  test("renders a focused input field with spefcified value", () => {
    render(<InputWithLabel {...inputWithLabelProps} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveDisplayValue(
      "Complete assignments"
    );
    expect(screen.getByRole("textbox")).toHaveFocus();
  });

  test("calls onTitleChange to set input in state", () => {
    render(<InputWithLabel {...inputWithLabelProps} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: {
        value: "Read all chapters",
      },
    });

    expect(inputWithLabelProps.onTitleChange).toHaveBeenCalledTimes(1);
  });

  test("renders snapshot", () => {
    const {inputWithLabel} = render(
      <InputWithLabel {...inputWithLabelProps} />
    );
    expect(inputWithLabel).toMatchSnapshot();
  });
});

// For AddTodoForm
describe("AddTodoForm", () => {
  const addTodoFormProps = {
    listName: "Reading",
    onAddTodo: jest.fn(),
  };
  test("renders a form element", () => {
    render(<AddTodoForm {...addTodoFormProps} />);

    expect(screen.getByTestId("add-todo-form")).toBeInTheDocument();
  });
  test("renders an input field with label", () => {
    render(<AddTodoForm {...addTodoFormProps} />);

    expect(screen.getByLabelText("Add Todo:")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("renders a submit button disabled at first", () => {
    render(<AddTodoForm {...addTodoFormProps} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute(
      "type",
      "submit",
      "disabled",
      true
    );
  });

  test("calls onAddTodo() on submit or click on the submit button", () => {
    render(<AddTodoForm {...addTodoFormProps} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: {
        value: "New todo",
      },
    });

    fireEvent.click(screen.getByRole("button"));
    expect(addTodoFormProps.onAddTodo).toHaveBeenCalledTimes(1);

    fireEvent.submit(screen.getByTestId("add-todo-form"));
    expect(addTodoFormProps.onAddTodo).toHaveBeenCalledTimes(2);
  });

  test("renders snapshot", () => {
    const {addTodoForm} = render(<AddTodoForm {...addTodoFormProps} />);
    expect(addTodoForm).toMatchSnapshot();
  });
});

// For SideBar
describe("TodoCard", () => {
  const todoCardProps = {
    route: "/Reading",
    length: 5,
    children: "&#128214;",
  };

  test("renders an anchor tag with proper link", () => {
    render(
      <Router>
        <TodoCard {...todoCardProps} />
      </Router>
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/Reading");
  });

  test("renders proper element text", () => {
    render(
      <Router>
        <TodoCard {...todoCardProps} />
      </Router>
    );

    expect(screen.getByRole("link")).toHaveTextContent("&#128214;");
    expect(screen.getByRole("link")).toHaveTextContent("Reading Todo");
    expect(screen.getByRole("link")).toHaveTextContent("5 taskes");
  });

  test("renders snapshot", () => {
    const {todoCard} = render(
      <Router>
        <TodoCard {...todoCardProps} />
      </Router>
    );
    expect(todoCard).toMatchSnapshot();
  });
});

describe("SideBar", () => {
  const sideBarProps = {
    readingLength: 5,
    homeworkLength: 4,
  };

  test("renders an avatar and site heading", () => {
    render(
      <Router>
        <SideBar {...sideBarProps} />
      </Router>
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "avatar.jpg");
    expect(screen.getByText("RemindMe™")).toBeInTheDocument();
  });

  test("renders navigation containing an unordered list", () => {
    render(
      <Router>
        <SideBar {...sideBarProps} />
      </Router>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("renders two list items containing anchor tags", () => {
    render(
      <Router>
        <SideBar {...sideBarProps} />
      </Router>
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  test("has proper links and unicode text in the anchor tags", () => {
    render(
      <Router>
        <SideBar {...sideBarProps} />
      </Router>
    );

    expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", "/Reading");
    expect(screen.getAllByRole("link")[0]).toHaveTextContent("📖");
    expect(screen.getAllByRole("link")[1]).toHaveAttribute("href", "/Homework");
    expect(screen.getAllByRole("link")[1]).toHaveTextContent("📓");
  });

  test("renders snapshot", () => {
    const {sideBar} = render(
      <Router>
        <SideBar {...sideBarProps} />
      </Router>
    );
    expect(sideBar).toMatchSnapshot();
  });
});

// For TodoContainer
describe("TodoContainer", () => {
  const todoContainerProps = {
    onAddTodo: jest.fn(),
    onRemoveTodo: jest.fn(),
    todoList: {
      list: homeworkTodos,
      isReverse: true,
    },
    setTodoList: jest.fn(),
    fetchStatus: {
      isLoading: false,
      isError: false,
      errMsg: {},
    },
    children: "Homework",
  };

  test("renders an anchor with home link", () => {
    render(
      <Router>
        <TodoContainer {...todoContainerProps} />
      </Router>
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
    expect(screen.getByRole("link")).toHaveTextContent("Close");
  });

  test("renders the heading, sort icon, todo-list, and todo form", () => {
    render(
      <Router>
        <TodoContainer {...todoContainerProps} />
      </Router>
    );

    expect(screen.getByRole("heading")).toHaveTextContent("Homework");
    expect(screen.getByTestId("sort-icon")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByTestId("add-todo-form")).toBeInTheDocument();
  });

  test("renders the correct todo-list", () => {
    render(
      <Router>
        <TodoContainer {...todoContainerProps} />
      </Router>
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getAllByRole("listitem")[0]).toHaveTextContent(
      /all the changes/
    );
    expect(screen.getAllByRole("listitem")[1]).toHaveTextContent(
      /branch lesson-4-1/
    );
  });

  test("has input field and submit button in the form", () => {
    render(
      <Router>
        <TodoContainer {...todoContainerProps} />
      </Router>
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(3);
    expect(screen.getAllByRole("button")[2]).toHaveAttribute("type", "submit");
  });

  test("displays the loading indicator while loading data", () => {
    todoContainerProps.fetchStatus.isLoading = true;

    render(
      <Router>
        <TodoContainer {...todoContainerProps} />
      </Router>
    );

    expect(screen.getByText(/Loading/)).toBeInTheDocument();
    expect(screen.queryByRole("list")).toBeNull();
    expect(screen.getByTestId("add-todo-form")).toBeInTheDocument();
  });

  test("displays the error message when data-fetching failed", () => {
    todoContainerProps.fetchStatus.isLoading = false;
    todoContainerProps.fetchStatus.isError = true;
    todoContainerProps.todoList = {
      list: [],
      isReverse: false,
    };

    render(
      <Router>
        <TodoContainer {...todoContainerProps} />
      </Router>
    );

    expect(screen.getByText(/SOMETHING WENT WRONG/)).toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    expect(screen.getByTestId("add-todo-form")).toBeInTheDocument();
  });

  test("renders snapshot", () => {
    const {todoContainer} = render(
      <Router>
        <TodoContainer {...todoContainerProps} />
      </Router>
    );
    expect(todoContainer).toMatchSnapshot();
  });
});

/*
Integration Test - App
*/

describe("App", () => {
  const readingPromise = Promise.resolve({
    json: () =>
      Promise.resolve({
        records: readingTodos,
      }),
  });

  const homeworkPromise = Promise.resolve({
    json: () =>
      Promise.resolve({
        records: homeworkTodos,
      }),
  });

  const resolvedPromise = Promise.resolve();

  const rejectedPromise = Promise.reject();

  test("renders home page regardless of fetch status", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementationOnce(() => resolvedPromise)
      .mockImplementationOnce(() => rejectedPromise);

    render(
      <Router>
        <App />
      </Router>
    );

    expect(screen.getByText(/RemindMe/)).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Reading Todo")).toBeInTheDocument();
    expect(screen.getByText("Homework Todo")).toBeInTheDocument();
    expect(screen.getAllByText("0 taskes")).toHaveLength(2);
    expect(screen.getAllByRole("img")).toHaveLength(2);
    expect(screen.getAllByRole("img")[0]).toHaveAttribute("src", "avatar.jpg");
    expect(screen.getAllByRole("img")[1]).toHaveAttribute(
      "src",
      "https://i.imgur.com/3FEaiiS.png"
    );

    try {
      await act(() => resolvedPromise);
      await act(() => rejectedPromise);
    } catch {
      expect(screen.getByText(/RemindMe/)).toBeInTheDocument();
      expect(screen.getByRole("navigation")).toBeInTheDocument();
      expect(screen.getByRole("list")).toBeInTheDocument();
      expect(screen.getAllByRole("listitem")).toHaveLength(2);
      expect(screen.getByText("Reading Todo")).toBeInTheDocument();
      expect(screen.getByText("Homework Todo")).toBeInTheDocument();
      expect(screen.getAllByText("0 taskes")).toHaveLength(2);
      expect(screen.getAllByRole("img")).toHaveLength(2);
      expect(screen.getAllByRole("img")[0]).toHaveAttribute(
        "src",
        "avatar.jpg"
      );
      expect(screen.getAllByRole("img")[1]).toHaveAttribute(
        "src",
        "https://i.imgur.com/3FEaiiS.png"
      );
    }
  });

  test("succeeds fetching data", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementationOnce(() => readingPromise)
      .mockImplementationOnce(() => homeworkPromise);

    render(
      <Router>
        <App />
      </Router>
    );

    expect(screen.getAllByText("0 taskes")).toHaveLength(2);

    try {
      await act(() => readingPromise);
      await act(() => homeworkPromise);
    } catch {
      expect(screen.getAllByText("2 taskes")).toHaveLength(2);
      expect(screen.queryByText("0 taskes")).toBeNull();
    }
  });

  test("fails fetching data", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => rejectedPromise);

    render(
      <Router>
        <App />
      </Router>
    );

    expect(screen.getAllByText("0 taskes")).toHaveLength(2);

    try {
      await act(() => rejectedPromise);
    } catch {
      expect(screen.getAllByText("0 taskes")).toHaveLength(2);
    }
  });
});
