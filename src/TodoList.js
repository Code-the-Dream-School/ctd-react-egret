import React from 'react'

const todoList = [
    {
      id: 1,
      title: 'Clone the ctd-react-egret repo'
    },
    {
      id: 2,
      title: 'Create a new branch and name it lesson-1-1'
    },
    {
      id: 3,
      title: 'Complete the assignment'
    },
    {
      id: 4,
      title: 'Submit a pull request'
    }
  ]


function TodoList() {
    return (
        <ul>
        {todoList.map( item => <li key={item.id}>{item.title}</li>
        )}
        </ul>
    )
}

export default TodoList