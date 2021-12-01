import React from 'react'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
import PropTypes from 'prop-types'

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
        console.log(data.records[0].id)
        setTodoList([...todoList, ...data.records])
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
        const filteredTodoList = todoList.filter((item) => item.id !== data.records[0].id)
        setTodoList(filteredTodoList)
      })
  }

  return (
    <>
      <h1>{tableName}</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {(isLoading) ? (<p>Loading...</p>) : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)}
    </>
  );
}

TodoContainer.propTypes = {
  tableName: PropTypes.string,
}

export default TodoContainer;
