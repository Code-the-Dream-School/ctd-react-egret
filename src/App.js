import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListContainer from "./ListContainer";
import Navigation from "./Navigation";

function App() {
  /* const [listLength, setListLength] = React.useState([]) */

  const listOfTables = [
    {
      type: "Personal",
      id: 0,
      imgSrc: "./logo/human.png",
      
    },
    {
      type: "Business",
      id: 1,
      imgSrc: "./logo/business.jpg",
      
    },
    {
      type: "FurryFriend",
      id: 2,
      imgSrc: "./logo/furry.jpg",
      
    },
  ];
  /* const arrayoflength = []
  listOfTables.map((table) => {
    fetch(
      `https://api.airtable.com/v0/${
        process.env.REACT_APP_AIRTABLE_BASE_ID
      }/${encodeURIComponent(table.type)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.records.length)
        arrayoflength.push(result.records.length)
        });
  }) */

  return (
    <Router>
      <Navigation listOfTables={listOfTables} />
      <Switch>
        {listOfTables.map((table) => (
          <Route path={`/${table.type}`} key={table.id}>
            <ListContainer listName={table.type}  />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
