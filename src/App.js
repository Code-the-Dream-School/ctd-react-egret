import React from 'react';


const todoList = [
  {
    'id': 1,
    'title': 'Clone the ctd-react-egret repo'
  },
  {
    'id': 2,
    'title': 'Create a new branch and name it lesson-1-1'
  },
  {
    'id': 3,
    'title': 'Complete the assignment'
  },
  {
    'id': 4,
    'title': 'Submit a pull request'
  }
]

//function to transform array list into JSX
function renderList(list)  {
  let newList = list.map( item => <li key={item.id}>{item.title}</li>)
  return newList
}


function App() {
  return (
    <div>
      <h1>Todo List</h1>
        <ul>{renderList(todoList)}</ul>
    </div>
   
  );
}


export default App;
