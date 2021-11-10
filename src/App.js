import React  from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListContainer from "./ListContainer";
import Navigation from "./Navigation";

const todoCategories = [
  {
    category: "Personal",
    imgSrc: "./logo/human.png",
  },
  {
    category: "Business",
    imgSrc: "./logo/business.jpg",
  },
  {
    category: "FurryFriend",
    imgSrc: "./logo/furry.jpg",
  },
];

function fetchTodoItems(category) {
  return fetch(
    `https://api.airtable.com/v0/${
      process.env.REACT_APP_AIRTABLE_BASE_ID
    }/${encodeURIComponent(category)}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }
    ).then((response) => response.json())
  }

  function fetchTodoTables() {
    return todoCategories.map(todoCategory => {
      return fetchTodoItems(todoCategory.category);
    });
  }

function App() {
  const [todoCounts, setTodoCounts] = React.useState({});
  function handleChange() {

  }
  React.useEffect(() => {
    Promise.all(fetchTodoTables()).then((todoResponses) => {
      const counts = {};
      todoCategories.forEach((todoCategory, index) => {
        counts[todoCategory.category] = todoResponses[index].records.length;
      });
      setTodoCounts(counts);
    });
  }, []);
  
  console.log(todoCounts)

  return (
    <Router>
      <Navigation categories={todoCategories} counts={todoCounts} />
      
      <Switch>
      
        {todoCategories.map((table, index) => (
          <Route path={`/${table.category}`} key={index}>
            <ListContainer listName={table.category} handleChange={handleChange} />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
