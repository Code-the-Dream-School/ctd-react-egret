import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListContainer from "./components/ListContainer";
import Navigation from "./components/Navigation";
import Toggle from "react-toggle";
import "react-toggle/style.css";


const ThemeContext = createContext()
console.log(ThemeContext)


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

async function fetchTodoItems(category) {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${
        process.env.REACT_APP_AIRTABLE_BASE_ID
      }/${encodeURIComponent(category)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    );

    return await response.json();
  } catch (error) {
    return console.log(error);
  }
}

async function allData() {
  try {
    const response = await fetch("/.netlify/functions/fetchBaseSchema", {
      headers: {
        "X-Airtable-Client-Secret": "foo-123123",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log("response?", response);
    console.log("response data?", JSON.parse(data));

    return data;
  } catch (error) {
    console.log("Error happened here!");
    return console.log(error);
  }
}

function fetchTodoTables() {
  return todoCategories.map((todoCategory) => {
    return fetchTodoItems(todoCategory.category);
  });
}

function App() {
  const [todoCounts, setTodoCounts] = React.useState({});
  const [isDark, setIsDark] = React.useState(true);
console.log(isDark)
  React.useEffect(() => {
    Promise.all(fetchTodoTables()).then((todoResponses) => {
      const counts = {};

      todoCategories.forEach((todoCategory, index) => {
        let count = 0;
        for (let i = 0; i < todoResponses[index].records.length; i++) {
          if (
            !todoResponses[index].records[i].fields.isCompleted
          ) {
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

  console.log(allData());
  return (
    <Router>
      <Toggle
        //className="dark-mode-toggle"//
        checked={isDark}
        className="custom-classname"
        icons={{
          checked: "🌙",
          unchecked: null,
        }}
        onChange={({ target }) => setIsDark(target.checked)}
        
      />
      <Navigation categories={todoCategories} counts={todoCounts} />

      <Route exact path="/">
        <img
          src="./logo/guys.jpg"
          alt="Lets do it!"
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
