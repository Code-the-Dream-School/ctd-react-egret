import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import './style.css';


const TodoContainer = ({ tableName }) => {

    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)


    useEffect(() => {
        fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                const formattedList = data.records.map(record => {
                    return { id: record.id, title: record.fields.Title }
                })
                console.log(data)
                setTodoList(formattedList)
                setIsLoading(false)
            })
            .catch((error) => {
                setError(true)
            })
    }, [tableName])

    useEffect(() => {
        if (isLoading === false) {
            const json = JSON.stringify(todoList);
            localStorage.setItem('todoList', json)
        }
    }, [todoList, isLoading, error]);

    const addTodo = (title) => {
        fetch(
            `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fields: { Title: title } }),
            }
        )
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setTodoList([...todoList, { id: data.id, title: data.fields.Title }])
            })
    }

    function removeTodo(id) {
        fetch(
            `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}?records[]=${id}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setTodoList(todoList.filter((item) => item.id !== data.records[0].id))
            })
    }

    return (
        <main>
            <h1>{tableName}</h1>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? (<span>Loading...</span>) : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)}
            {error && <h2>Server Error</h2>}
        </main>
    );
}

export default TodoContainer
