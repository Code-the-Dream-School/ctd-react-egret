import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import PropTypes from 'prop-types';
import { textAlign } from '@mui/system';
function TodoContainer({ tableName }) {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTodoList(data.records)
        setIsLoading(false)
      })
  }, [tableName])

  const addTodo = (title) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Title: title,
              },
            },
          ],
        }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTodoList([...todoList, data.records[0]])
      })
  }

  const removeTodo = (id) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}?records[]=${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTodoList(todoList.filter((item) => item.id !== data.records[0].id))
      })
  }
  TodoContainer.propTypes = {
    tableName: PropTypes.string
  }
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    textAlign: "center",
    width: "500px",
    margin: "auto"



  }
  return (

    <>
      <h1 style={mystyle} >{tableName}</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {(isLoading) ? (<p>Loading...</p>) : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)}
    </>
  );
}

export default TodoContainer;
