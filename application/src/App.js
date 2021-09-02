import logo from './logo.svg';
import './App.css';




const todoList = [
{ id: 1,
  title: "Bye an apple",
},
{ id: 2,
  title: "Bye a squash",
},
{ id: 3,
  title: "Bye a beer",
},
 ]
function App() {
  return (
  <div>
  <h1>Todo list</h1>;
  <ul>
{
  todoList.map((i) => <li key={i.id}>{i.title}</li>)
}
  </ul>;
  </div>
  );
}

export default App;
