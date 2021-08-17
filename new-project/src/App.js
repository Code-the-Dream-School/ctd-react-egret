import logo from './logo.svg';
import './App.css';
const title = 'React';
const todolist = [
  {
    id: '1 ',
    title: 'Read assigment'
  },
  {
    id: '2 ',
    title: 'Watch videos'
  },
  {
    id: '3 ',
    title: 'Complete and submit assignment'
  },
  ];

  

function App() {
  return (
    <div>
      <h1>Todo List</h1>
   
   <hr />
   <ul>
   {todolist.map(function(item){
  return (
  <li key= {item.objectID}>
    <span>{item.id}</span>
    <span>{item.title}</span>
  </li>
  );
  })}
  </ul>
   </div>
  );
}

export default App;
