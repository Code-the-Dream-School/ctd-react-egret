import React from "react";
import style from "./modules/TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = React.memo(
  ({ todo, onRemoveTodo, onEditTodo, changeTodoStatus, todoStatusDone }) => {
    const handleClick = (e) => {
      if (e.target.innerText === "Edit") {
        e.target.parentNode.querySelector("p").contentEditable = true;
        e.target.parentNode.querySelector("p").style.backgroundColor = "white";
        e.target.innerText = "Save";
      } else {
        e.target.parentNode.querySelector("p").contentEditable = false;
        e.target.parentNode.querySelector("p").style.backgroundColor =
          "initial";
        e.target.innerText = "Edit";
        const editedValue = e.target.parentNode.querySelector("p").innerText;
        onEditTodo(todo.id, editedValue);
      }
    };
    const checked = todo.fields.isCompleted === todoStatusDone;
    
    return (
      <>
        <li className={style.listItem}>
          <input
            type="checkbox"
            defaultChecked={checked}
            onClick={() => changeTodoStatus(todo.id)}
          />
          <p
            style={{
              textDecoration:
                todo.fields.isCompleted === todoStatusDone
                  ? "line-through"
                  : "",
              color:
                todo.fields.isCompleted === todoStatusDone ? "gray" : "initial",
            }}
          >
            {todo.fields.Title}
          </p>

          <button
            onClick={() => onRemoveTodo(todo.id, todo.fields.isCompleted)}
          >
            ✖
          </button>
          <button onClick={handleClick}>Edit</button>
        </li>
      </>
    );
  }
);

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    fields: PropTypes.shape({
      isCompleted: PropTypes.bool,
      Title: PropTypes.string,
    }),
  }),
  onRemoveTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  changeTodoStatus: PropTypes.func,
  todoStatusDone: PropTypes.bool,
};

export default TodoListItem;
