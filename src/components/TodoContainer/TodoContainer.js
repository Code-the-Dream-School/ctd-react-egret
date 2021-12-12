import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {sortBy} from "lodash";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortUp, faSortDown} from "@fortawesome/free-solid-svg-icons";
import AddTodoForm from "../AddTodoForm";
import TodoList from "../TodoList";
import styles from "./TodoContainer.module.css";

const TodoContainer = ({
  onAddTodo,
  onRemoveTodo,
  todoList,
  setTodoList,
  fetchStatus,
  children,
}) => {
  const handleSort = () => {
    const sortedList = todoList.isReverse
      ? sortBy(todoList.list, "createdTime").reverse()
      : sortBy(todoList.list, "createdTime");
    setTodoList({
      list: sortedList,
      isReverse: !todoList.isReverse,
    });
  };

  return (
    <div className={styles.listWrapper}>
      <div className={styles.homeButton}>
        <Link to='/'>Close</Link>
      </div>
      <h2>
        {children}&nbsp;
        <span
          data-testid='sort-icon'
          className={styles.sortButton}
          onClick={handleSort}>
          {todoList.isReverse ? (
            <FontAwesomeIcon icon={faSortDown} />
          ) : (
            <FontAwesomeIcon icon={faSortUp} />
          )}
        </span>
      </h2>
      {fetchStatus.isError && (
        <p>
          <strong>SOMETHING WENT WRONG:</strong>&nbsp;
          {fetchStatus.errMsg.error}--{fetchStatus.errMsg.message}
        </p>
      )}
      {fetchStatus.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <TodoList
          todoList={todoList.list}
          listName={children}
          onRemoveTodo={onRemoveTodo}
        />
      )}
      <AddTodoForm listName={children} onAddTodo={onAddTodo} />
    </div>
  );
};

TodoContainer.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  todoList: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.object),
    isReverse: PropTypes.bool,
  }).isRequired,
  setTodoList: PropTypes.func.isRequired,
  fetchStatus: PropTypes.exact({
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    errMsg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }).isRequired,
  children: PropTypes.string.isRequired,
};

export default TodoContainer;
