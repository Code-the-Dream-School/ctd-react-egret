import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListComponent from "./ListComponent";
import Navigation from "./Navigation";

function App() {
  
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/List 1" >
          <ListComponent listName={'List 1'} />
        </Route>

        <Route path="/List 2">
          <ListComponent listName={'List 2'} />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
