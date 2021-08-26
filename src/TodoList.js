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

const renderList = (list) => {
  return list.map(item => <li key={item.id}>{item.title}</li>)
}

function TodoList() {
  return (
    <ul>
      {renderList(todoList)}
    </ul>
  )
}

export default TodoList