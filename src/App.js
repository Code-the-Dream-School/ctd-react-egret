import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListContainer from "./ListContainer";
import Navigation from "./Navigation";

const todoCategories = [
  {
    category: "Personal",
    imgSrc: "./logo/guy1.png",
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
  ).then((response) => response.json());
}

function fetchTodoTables() {
  return todoCategories.map((todoCategory) => {
    return fetchTodoItems(todoCategory.category);
  });
}

function App() {
  const [todoCounts, setTodoCounts] = React.useState({});

  React.useEffect(() => {
    Promise.all(fetchTodoTables()).then((todoResponses) => {
      const counts = {};

      todoCategories.forEach((todoCategory, index) => {
       /*  counts[todoCategory.category] = todoResponses[index].records.length; */
        let count = 0;
        for (let i = 0; i < todoResponses[index].records.length; i++) {
          if (todoResponses[index].records[i].fields.isCompleted === "false") {
            count += 1;
          }
        }
        counts[todoCategory.category] = count;
      });

      setTodoCounts(counts);
    });
  }, []);

  function updateCount(category, delta) {
    setTodoCounts(() => {
      return { ...todoCounts, [category]: todoCounts[category] + delta };
    });
  }

  return (
    <Router>
      <Navigation categories={todoCategories} counts={todoCounts} />
      <Route exact path="/">
        <img
          src="./logo/guys.jpg"
          alt="`Lets do it!`"
          style={{ width: "100%", margin: "0 auto", opacity: "0.1" }}
        ></img>
      </Route>
      <Switch>
        {todoCategories.map((table, index) => (
          <Route path={`/${table.category}`} key={index}>
            <ListContainer
              listName={table.category}
              handleUpdate={updateCount}
            />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
