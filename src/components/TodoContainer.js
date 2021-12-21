import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { HiSortAscending, HiSortDescending } from 'react-icons/hi';

const TodoContainer = ({ tableName }) => {

    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)

    function sortTodo(todoList, field, direction) {
        todoList.sort((a, b) => {
            if (direction === 'desc') {
                return a[field] < b[field] ? 1 : -1;
            } else {
                return a[field] < b[field] ? -1 : 1;
            }
        });
    }

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
                    return { id: record.id, title: record.fields.Title, completed: !!record.fields.Completed }
                })

                setTodoList(formattedList)
                setIsLoading(false)
            })
            .catch((error) => {
                setError(true)
            })
    }, [tableName])

    function buttonDirectionSortHandler(direction) {
        const copyTodo = [...todoList];
        sortTodo(copyTodo, 'title', direction);
        setTodoList(copyTodo);
    }

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

    function checkTodoDone(id, completed) {
        fetch(
            `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}`,
            {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ records: [{ id: id, fields: { Completed: completed } }] }),
            }
        )
            .then((resp) => resp.json())
            .then((data) => {

                const todoListUpdated = todoList.map((item) => {
                    if(item.id === id) {
                        item.completed = completed
                    }
                    return item
                })

                setTodoList(todoListUpdated)
                console.log(todoListUpdated.length)
                
            })
    }

    function removeTodoAll(id) {
        fetch(
            `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}?${todoList.map((item) => `records[]=${item.id}`).join('&')}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setTodoList([])
            })
    }

    return (
        <main>
            <AddTodoForm onAddTodo={addTodo} />
            <div className='container'>
                <span>Total tasks for {tableName}</span> <strong>{todoList.length}</strong>
                {/* <strong>{checkTodoDone.completed.length}</strong> */}
                <div>
                    <button onClick={() => buttonDirectionSortHandler('asc')}><HiSortAscending /></button>
                    <button onClick={() => buttonDirectionSortHandler('desc')}><HiSortDescending /></button>
                </div>
                {isLoading ? (<span>Loading...</span>) : (<TodoList className='todoList' todoList={todoList} onRemoveTodo={removeTodo} onDoneTask={checkTodoDone} onRemoveAll={removeTodoAll} />)}
                {error && <h2>Server Error</h2>}
            </div>
        </main>

    );
}

export default TodoContainer
